// src\utils\toast.js
import { ToastAndroid, Platform, Alert } from 'react-native';

const show = (message = '', duration = 'short') => {
    if (!message) return;

    if (Platform.OS === 'android') {
        ToastAndroid.show(
            message,
            duration === 'long'
                ? ToastAndroid.LONG
                : ToastAndroid.SHORT
        );
    } else {
        Alert.alert('', message);
    }
};

export default {
    success: (msg) => show(msg, 'short'),
    error: (msg) => show(msg, 'long'),
    info: (msg) => show(msg, 'short'),
};