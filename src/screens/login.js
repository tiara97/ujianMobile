import React from 'react'
import { View, StyleSheet } from 'react-native'
import { Text, Button, TextInput } from 'react-native-paper'
import {useDispatch, useSelector} from 'react-redux'

import {login} from '../actions'

const Login = ({navigation}) => {
    const [username, setUsername] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [error, setError] = React.useState('');

    const {usernameDB} = useSelector(state => {
        return {
            usernameDB: state.userReducer.username
        }
    })
    const dispatch = useDispatch()
    
    const handlePress = () => {
        if (username.length < 5)
            return setError('Username length must be minimum 5 chars with number')
        if (password.length < 6)
            return setError('password length must be minimum 6 chars with number, with number, and a special character')
        dispatch(login(username))
        setUsername('')
        setPassword('')
    }
    React.useEffect(()=> {
        if(usernameDB) {
            navigation.navigate('tabNav', {screen: 'home'})
        }
    })
    return (
        <View style={styles.root}>
            <Text style={styles.title}>Login</Text>
            <TextInput
                style={styles.input}
                label="Username"
                value={username}
                onChangeText={value => setUsername(value)}
                mode='outlined'
            />
            <TextInput
                style={styles.input}
                label="Password"
                value={password}
                onChangeText={value => setPassword(value)}
                mode='outlined'
                secureTextEntry={true}
            />
            <Text>{error}</Text>
            <Button mode='contained' style={styles.button} onPress={handlePress}>Login</Button>
        </View>
    )
}
const styles = StyleSheet.create({
    root: {
        flex: 1,
        backgroundColor: '#f2f2f2',
        display: 'flex',
        justifyContent: 'center',
        padding: 10
        // alignItems: 'center'
    },
    title: {
        fontSize: 28,
        marginVertical: 20
    },
    input: {
        marginVertical: 10
    },
    button: {
        color: 'white',
        marginVertical: 10
    },
})
export default Login