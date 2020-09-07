import React from 'react'
import Icon from 'react-native-vector-icons/dist/MaterialCommunityIcons'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import Home from '../screens/home'
import Table from '../screens/table'
import DrawerNav from './drawerNav'

const Tab = createBottomTabNavigator()
const TabNav = () => {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;
                    if (route.name === 'home') {
                        iconName = focused ? 'home' : 'home-outline';
                    } else if (route.name === 'table') {
                        iconName = focused ? 'wallet' : 'wallet-outline';
                    } 
                    return <Icon name={iconName} size={size} color={color} />;
                },
            })}
            tabBarOptions={{
                activeTintColor: 'tomato',
                inactiveTintColor: 'gray',
                showLabel: false,
            }}
        >
            <Tab.Screen name='home' component={Home} />
            <Tab.Screen name='table' component={Table} />
            <Tab.Screen name='drawer' component={DrawerNav} />
        </Tab.Navigator>
    )
}
export default TabNav