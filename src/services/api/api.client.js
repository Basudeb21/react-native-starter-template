// src\services\api\api.client.js
import axiosInstance from './axiosInstance';
import apiErrorHandler from './apiErrorHandler';

const apiClient = {
    get: async (url, config = {}) => {
        try {
            const response = await axiosInstance.get(url, config);
            return response.data;
        } catch (error) {
            throw apiErrorHandler(error);
        }
    },

    post: async (url, data = {}, config = {}) => {
        try {
            const response = await axiosInstance.post(url, data, config);
            return response.data;
        } catch (error) {
            throw apiErrorHandler(error);
        }
    },

    put: async (url, data = {}, config = {}) => {
        try {
            const response = await axiosInstance.put(url, data, config);
            return response.data;
        } catch (error) {
            throw apiErrorHandler(error);
        }
    },

    patch: async (url, data = {}, config = {}) => {
        try {
            const response = await axiosInstance.patch(url, data, config);
            return response.data;
        } catch (error) {
            throw apiErrorHandler(error);
        }
    },

    delete: async (url, config = {}) => {
        try {
            const response = await axiosInstance.delete(url, config);
            return response.data;
        } catch (error) {
            throw apiErrorHandler(error);
        }
    },

    /**
     * File Upload
     */
    upload: async (url, formData, config = {}) => {
        try {
            const response = await axiosInstance.post(url, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
                ...config,
            });

            return response.data;
        } catch (error) {
            throw apiErrorHandler(error);
        }
    },
};

export default apiClient;