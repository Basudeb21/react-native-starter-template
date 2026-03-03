// src\services\auth\authService.js
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import STORAGE_KEYS from '../../storage/storageKeys';
import Config from '../../config';

export const refreshAccessToken = async () => {
    const refreshToken = await AsyncStorage.getItem(STORAGE_KEYS.REFRESH_TOKEN);

    if (!refreshToken) {
        throw new Error('No refresh token found');
    }

    const response = await axios.post(
        `${Config.BASE_URL}/auth/refresh`,
        { refreshToken }
    );

    const newAccessToken = response.data?.accessToken;

    if (!newAccessToken) {
        throw new Error('Invalid refresh response');
    }

    await AsyncStorage.setItem(
        STORAGE_KEYS.ACCESS_TOKEN,
        newAccessToken
    );

    return newAccessToken;
};