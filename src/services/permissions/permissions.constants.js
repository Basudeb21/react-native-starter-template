// src/services/permissions/permissions.constants.js

import { PERMISSIONS } from 'react-native-permissions';
import { Platform } from 'react-native';

export const APP_PERMISSIONS = {
    CAMERA: {
        ios: PERMISSIONS.IOS.CAMERA,
        android: PERMISSIONS.ANDROID.CAMERA,
    },

    MICROPHONE: {
        ios: PERMISSIONS.IOS.MICROPHONE,
        android: PERMISSIONS.ANDROID.RECORD_AUDIO,
    },

    PHOTO_LIBRARY: {
        ios: PERMISSIONS.IOS.PHOTO_LIBRARY,
        android: PERMISSIONS.ANDROID.READ_MEDIA_IMAGES,
    },

    LOCATION_WHEN_IN_USE: {
        ios: PERMISSIONS.IOS.LOCATION_WHEN_IN_USE,
        android: PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION,
    },

    LOCATION_ALWAYS: {
        ios: PERMISSIONS.IOS.LOCATION_ALWAYS,
        android: PERMISSIONS.ANDROID.ACCESS_BACKGROUND_LOCATION,
    },

    NOTIFICATIONS: {
        ios: PERMISSIONS.IOS.NOTIFICATIONS,
        android: PERMISSIONS.ANDROID.POST_NOTIFICATIONS,
    },

    CONTACTS: {
        ios: PERMISSIONS.IOS.CONTACTS,
        android: PERMISSIONS.ANDROID.READ_CONTACTS,
    },
};

export const resolvePermission = (permissionKey) => {
    const permission = APP_PERMISSIONS[permissionKey];
    if (!permission) {
        throw new Error(`Permission "${permissionKey}" not registered.`);
    }

    return Platform.OS === 'ios'
        ? permission.ios
        : permission.android;
};