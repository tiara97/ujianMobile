import React from 'react'
import {View, StyleSheet} from 'react-native'
import {Text} from 'react-native-paper'
import AsyncStorage from '@react-native-community/async-storage';

const Splash = () => {
    return (
        <View style={styles.root}>
            <Text style={styles.text}>Corona Info</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    root: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        fontSize: 40
    }
})
export default Splash