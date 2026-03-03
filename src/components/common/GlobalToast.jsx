// src\components\common\GlobalToast.jsx

import React, { useEffect } from 'react';
import { View, Text, StyleSheet, Animated } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { hideToast } from '../../store/slices/uiSlice';

const GlobalToast = () => {
    const dispatch = useDispatch();
    const toast = useSelector((state) => state.ui.toast);
    const opacity = React.useRef(new Animated.Value(0)).current;

    useEffect(() => {
        if (toast) {
            // Fade in
            Animated.timing(opacity, {
                toValue: 1,
                duration: 300,
                useNativeDriver: true,
            }).start();

            // Auto hide after 3s
            const timer = setTimeout(() => {
                Animated.timing(opacity, {
                    toValue: 0,
                    duration: 300,
                    useNativeDriver: true,
                }).start(() => dispatch(hideToast()));
            }, 3000);

            return () => clearTimeout(timer);
        }
    }, [toast]);

    if (!toast) return null;

    const backgroundColors = {
        success: '#4BB543',
        error: '#FF3B30',
        info: '#2D9CDB',
    };

    return (
        <Animated.View style={[styles.container, { opacity, backgroundColor: backgroundColors[toast.type] || '#333' }]}>
            <Text style={styles.text}>{toast.message}</Text>
        </Animated.View>
    );
};

export default GlobalToast;

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        top: 50,
        alignSelf: 'center',
        paddingHorizontal: 16,
        paddingVertical: 10,
        borderRadius: 8,
        zIndex: 9999,
        maxWidth: '90%',
        elevation: 5,
    },
    text: {
        color: '#fff',
        fontSize: 14,
    },
});