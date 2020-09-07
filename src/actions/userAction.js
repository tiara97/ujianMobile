import Axios from 'axios'
import AsyncStorage from '@react-native-community/async-storage';
import {LOG_IN, LOG_IN_END, LOG_IN_ERROR, LOG_IN_START, LOG_OUT, KEEPLOGIN, KEEPLOGIN_END, KEEPLOGIN_ERROR, KEEPLOGIN_START} from './helper'

export const login = (body) => {
    return async(dispatch) => {
        try {
            dispatch({type: LOG_IN_START})
            dispatch({type: LOG_IN, payload: body})
            console.log(body)
            // set asyncstorage
            await AsyncStorage.setItem('username', `${body}`)
            dispatch({type: LOG_IN_END})
        } catch (err) {
            console.log(err)
            dispatch({type: LOG_IN_ERROR, payload: err})
        }
    }
}
export const logout = () => {
    return async(dispatch) => {
        try {
            await AsyncStorage.clear()
            dispatch({type: LOG_OUT})
        } catch (err) {
            console.log(err)
        }
    }
}
export const keepLogin = () => {
    return async (dispatch) => {
        try {
            dispatch({type: KEEPLOGIN_START})
            // get token from asyncstorage
            const username = await AsyncStorage.getItem('username')
            // check tokennya ada di storage apa engga
            if(!username) {
                dispatch({type: KEEPLOGIN_END})
                return
            }
            dispatch({ type : LOG_IN, payload: username})
            dispatch({type: KEEPLOGIN_END})
        } catch (err) {
            console.log(err ? err.response.data : err)
            dispatch({type: KEEPLOGIN_END})
        }
    }
}