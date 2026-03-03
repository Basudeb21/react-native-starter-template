// src\navigation\stacks\MainStack.jsx
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationStrings } from '../../constants';
import MainTabs from '../tabs/MainTabs';

const Stack = createNativeStackNavigator();

const MainStack = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen
                name={NavigationStrings.HOME_TAB}
                component={MainTabs}
            />
        </Stack.Navigator>
    );
};

export default MainStack;