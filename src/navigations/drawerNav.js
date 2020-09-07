import React from 'react'
import {createDrawerNavigator} from '@react-navigation/drawer'

import Home from '../screens/home'
import Account from '../screens/account'

const Drawer = createDrawerNavigator()

const DrawerNav = () => {
    return (
        <Drawer.Navigator>
            <Drawer.Screen name='feed' component={Home} />
            <Drawer.Screen name='account' component={Account} />
        </Drawer.Navigator>
    )
}
export default DrawerNav