// src/navigation/tabs/MainTabs.jsx

import React, { useMemo } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

import { NavigationStrings } from '../../constants';
import { HomeScreen } from '../../screens/app';
import { ProfileStack } from '../stacks';
import { useTheme } from '../../theme';

const Tab = createBottomTabNavigator();

const MainTabs = () => {
    const { Colors } = useTheme();

    /**
     * Centralized Tab Configuration
     * Add new tabs here only.
     */
    const TAB_CONFIG = useMemo(
        () => [
            {
                name: NavigationStrings.HOME_TAB,
                component: HomeScreen,
                label: 'Home',
                icon: {
                    active: 'home',
                    inactive: 'home-outline',
                },
            },
            {
                name: NavigationStrings.PROFILE_TAB,
                component: ProfileStack,
                label: 'Profile',
                icon: {
                    active: 'person',
                    inactive: 'person-outline',
                },
            },
        ],
        []
    );

    return (
        <Tab.Navigator
            screenOptions={{
                headerShown: false,
                tabBarStyle: {
                    backgroundColor: Colors.CARD,
                    borderTopColor: Colors.BORDER,
                    height: 60,
                    paddingBottom: 6,
                },
                tabBarLabelStyle: {
                    fontSize: 12,
                    fontWeight: '600',
                },
                tabBarActiveTintColor: Colors.PRIMARY,
                tabBarInactiveTintColor: Colors.TEXT_LIGHT,
            }}
        >
            {TAB_CONFIG.map(tab => (
                <Tab.Screen
                    key={tab.name}
                    name={tab.name}
                    component={tab.component}
                    options={{
                        title: tab.label,
                        tabBarIcon: ({ focused, size }) => (
                            <Ionicons
                                name={focused ? tab.icon.active : tab.icon.inactive}
                                size={size || 22}
                                color={focused ? Colors.PRIMARY : Colors.TEXT_LIGHT}
                            />
                        ),
                    }}
                />
            ))}
        </Tab.Navigator>
    );
};

export default MainTabs;