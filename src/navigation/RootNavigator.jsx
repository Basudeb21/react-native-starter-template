// src/navigation/RootNavigator.jsx
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useSelector } from 'react-redux';
import AuthStack from './stacks/AuthStack';
import MainStack from './stacks/MainStack';
import SplashScreen from '../screens/common/SplashScreen';

const Stack = createNativeStackNavigator();

const RootNavigator = () => {
    // Use Redux for auth state
    const { isLoggedIn, isAuthLoading } = useSelector(state => state.auth);

    if (isAuthLoading) {
        return <SplashScreen />;
    }

    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            {isLoggedIn ? (
                <Stack.Screen name="MainStack" component={MainStack} />
            ) : (
                <Stack.Screen name="AuthStack" component={AuthStack} />
            )}
        </Stack.Navigator>
    );
};

export default RootNavigator;