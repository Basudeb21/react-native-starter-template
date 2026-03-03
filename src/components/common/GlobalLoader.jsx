// src\components\common\GlobalLoader.jsx
import React, { useEffect, useState } from 'react';
import { View, ActivityIndicator, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';

const GlobalLoader = () => {
    const { globalCount, minVisibleUntil } = useSelector(
        state => state.loading
    );

    const [visible, setVisible] = useState(false);

    useEffect(() => {
        if (globalCount > 0) {
            setVisible(true);
        } else {
            const remaining = minVisibleUntil - Date.now();
            if (remaining > 0) {
                setTimeout(() => setVisible(false), remaining);
            } else {
                setVisible(false);
            }
        }
    }, [globalCount]);

    if (!visible) return null;

    return (
        <View style={styles.overlay}>
            <ActivityIndicator size="large" color="#fff" />
        </View>
    );
};

const styles = StyleSheet.create({
    overlay: {
        ...StyleSheet.absoluteFillObject,
        backgroundColor: 'rgba(0,0,0,0.35)',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 999,
    },
});

export default GlobalLoader;