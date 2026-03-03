// src\navigation\stacks\ProfileStack.jsx

import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import NavigationStrings from '../navigationStrings';

import { ProfileSettings } from '../../screens/app';
import { ProfilePage } from '../../screens/app';

const Stack = createNativeStackNavigator();

const ProfileStack = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen
                name={NavigationStrings.PROFILE_SCREEN}
                component={ProfilePage}
            />
            <Stack.Screen
                name={NavigationStrings.PROFILE_SETTINGS_SCREEN}
                component={ProfileSettings}
            />
        </Stack.Navigator>
    );
};

export default ProfileStack;