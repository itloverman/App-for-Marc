import { Tabs } from 'expo-router';
import React from 'react';

import { TabBarIcon } from '@/components/navigation/TabBarIcon';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';

export default function TabLayout() {
    const colorScheme = useColorScheme();

    return (
        <Tabs
            screenOptions={{
                tabBarActiveTintColor: Colors[colorScheme ?? 'dark'].tint,
                headerShown: false,
                tabBarStyle: { backgroundColor: '#000' }
            }}
        >
            <Tabs.Screen
                name="index"
                options={{
                    title: '',
                    tabBarIcon: ({ color, focused }) => (
                        <TabBarIcon name={require('@/assets/images/icon-tab-1.png')} focus={focused} />
                    ),
                }}
            />
            <Tabs.Screen
                name="message"
                options={{
                    title: '',
                    tabBarIcon: ({ color, focused }) => (
                        <TabBarIcon name={require('@/assets/images/icon-tab-2.png')} focus={focused} />
                    ),
                }}
            />
            <Tabs.Screen
                name="profile"
                options={{
                    title: '',
                    tabBarIcon: ({ color, focused }) => (
                        <TabBarIcon name={require('@/assets/images/icon-tab-3.png')} focus={focused} />
                    ),
                }}
            />
        </Tabs>
    );
}
