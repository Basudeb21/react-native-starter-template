// src\navigation\stacks\AuthStack.jsx

import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import NavigationStrings from '../navigationStrings';
import { LoginScreen, SessionScreen } from '../../screens/auth';


const Stack = createNativeStackNavigator();

const AuthStack = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen
                name={NavigationStrings.LOGIN_SCREEN}
                component={LoginScreen}
            />
            <Stack.Screen
                name={NavigationStrings.SESSION_SCREEN}
                component={SessionScreen}
            />
        </Stack.Navigator>
    );
};

export default AuthStack;