import React from 'react'
import {View, StyleSheet} from 'react-native'
import {Button} from 'react-native-paper'
import {useDispatch, useSelector} from 'react-redux'
import { CommonActions } from '@react-navigation/native';

import {logout} from '../actions'

const Account = ({navigation}) => {
    const dispatch = useDispatch()
    const { username } = useSelector((state) => {
        return {
            username: state.userReducer.username,
        };
    });

    React.useEffect(() => {
        if (!username) {
            // redirect to sigin screen
            const resetAction = CommonActions.reset({
                index: 0,
                routes: [{ name: 'login' }],
            });
            navigation.dispatch(resetAction);
        }
    });
    const handlePress = () => {
        dispatch(logout())
        console.log('noo')
        // navigation.navigate('login')
    }
    return (
        <View style={styles.root}>
            <Button onPress={handlePress} mode='contained'>Logout</Button>
        </View>
    )
}
const styles = StyleSheet.create({
    root: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})
export default Account