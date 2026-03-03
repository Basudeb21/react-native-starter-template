// src\services\api\axiosInstance.jsx
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import STORAGE_KEYS from '../../storage/storageKeys';
import Config from '../../config';
import { store } from '../../store';
import { refreshAccessToken } from '../auth/authService';
import {
    startGlobalLoading,
    stopGlobalLoading,
    startButtonLoading,
    stopButtonLoading,
} from '../../store/slices/loadingSlice';

let isRefreshing = false;
let failedQueue = [];

const processQueue = (error, token = null) => {
    failedQueue.forEach((prom) => {
        if (error) prom.reject(error);
        else prom.resolve(token);
    });
    failedQueue = [];
};

const axiosInstance = axios.create({
    baseURL: Config.BASE_URL,
    timeout: Config.API_TIMEOUT,
    headers: {
        'Content-Type': 'application/json',
    },
});

axiosInstance.interceptors.request.use(
    async (config) => {
        const { network } = store.getState();
        if (!network?.isConnected) {
            return Promise.reject({
                success: false,
                message: 'No internet connection',
                data: null,
                status: 0,
            });
        }

        const token = await AsyncStorage.getItem(STORAGE_KEYS.ACCESS_TOKEN);
        if (token) config.headers.Authorization = `Bearer ${token}`;

        const showLoader = config.meta?.showLoader ?? true;
        const buttonKey = config.meta?.buttonKey;
        if (showLoader) store.dispatch(startGlobalLoading());
        if (buttonKey) store.dispatch(startButtonLoading(buttonKey));

        return config;
    },
    (error) => {
        store.dispatch(stopGlobalLoading());
        return Promise.reject(error);
    }
);

axiosInstance.interceptors.response.use(
    (response) => {
        const showLoader = response.config.meta?.showLoader ?? true;
        const buttonKey = response.config.meta?.buttonKey;
        if (showLoader) store.dispatch(stopGlobalLoading());
        if (buttonKey) store.dispatch(stopButtonLoading(buttonKey));

        return {
            success: true,
            message: response.data?.message || '',
            data: response.data?.data ?? response.data,
            status: response.status,
        };
    },
    async (error) => {
        const originalRequest = error.config;
        const showLoader = originalRequest?.meta?.showLoader ?? true;
        const buttonKey = originalRequest?.meta?.buttonKey;
        if (showLoader) store.dispatch(stopGlobalLoading());
        if (buttonKey) store.dispatch(stopButtonLoading(buttonKey));

        if (error.response?.status === 401 && !originalRequest?._retry) {
            if (isRefreshing) {
                return new Promise((resolve, reject) => {
                    failedQueue.push({ resolve, reject });
                }).then((token) => {
                    originalRequest.headers.Authorization = `Bearer ${token}`;
                    return axiosInstance(originalRequest);
                });
            }

            originalRequest._retry = true;
            isRefreshing = true;

            try {
                const newToken = await refreshAccessToken();
                processQueue(null, newToken);
                isRefreshing = false;

                originalRequest.headers.Authorization = `Bearer ${newToken}`;
                return axiosInstance(originalRequest);
            } catch (refreshError) {
                processQueue(refreshError, null);
                isRefreshing = false;

                await AsyncStorage.multiRemove([
                    STORAGE_KEYS.ACCESS_TOKEN,
                    STORAGE_KEYS.REFRESH_TOKEN,
                    STORAGE_KEYS.USER,
                ]);

                return Promise.reject({
                    success: false,
                    message: 'Session expired. Please login again.',
                    data: null,
                    status: 401,
                });
            }
        }

        return Promise.reject({
            success: false,
            message:
                error.response?.data?.message ||
                error.message ||
                'Something went wrong',
            data: null,
            status: error.response?.status,
        });
    }
);

export default axiosInstance;