// src/theme/ThemeProvider.jsx

import React, { createContext, useState, useEffect, useMemo } from 'react';
import { Appearance } from 'react-native';
import DarkColors from '../constants/Colors.Dark';
import LightColors from '../constants/Colors.Light';

export const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
    const systemScheme = Appearance.getColorScheme();

    const [themeMode, setThemeMode] = useState(systemScheme || 'light');

    useEffect(() => {
        const subscription = Appearance.addChangeListener(({ colorScheme }) => {
            setThemeMode(colorScheme || 'light');
        });

        return () => subscription.remove();
    }, []);

    const toggleTheme = () => {
        setThemeMode(prev => (prev === 'light' ? 'dark' : 'light'));
    };

    const setLight = () => setThemeMode('light');
    const setDark = () => setThemeMode('dark');

    const Colors = themeMode === 'dark' ? DarkColors : LightColors;

    const value = useMemo(
        () => ({
            Colors,
            themeMode,
            toggleTheme,
            setLight,
            setDark,
        }),
        [Colors, themeMode]
    );

    return (
        <ThemeContext.Provider value={value}>
            {children}
        </ThemeContext.Provider>
    );
};

export default ThemeProvider;