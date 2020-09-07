import React from 'react'
import {createStackNavigator} from '@react-navigation/stack'
import {useSelector, useDispatch} from 'react-redux'

import Splash from '../screens/splash'
import Login from '../screens/login'
import TabNav from './tabNav'

import {keepLogin} from '../actions'

const Stack = createStackNavigator()

const StackNav = () => {
    const {username, loading} = useSelector((state)=> {
        return {
            username: state.userReducer.username,
            loading: state.userReducer.loading,
        }
    })
    const dispatch = useDispatch()
    React.useEffect(()=> {
        dispatch(keepLogin())
    }, [])
    if(loading) {
        return <Splash />
    }
    return (
        <Stack.Navigator headerMode='none'>
            {
                username ?
                (<Stack.Screen name='tabnav' component={TabNav} />)
                :
                (<Stack.Screen name='login' component={Login} />)
            }
            {/* <Stack.Screen name='login' component={Login} />
            <Stack.Screen name='tabnav' component={TabNav} /> */}
        </Stack.Navigator>
    )
}
export default StackNav