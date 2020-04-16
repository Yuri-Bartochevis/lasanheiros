import React from 'react'
import { StyleSheet, Image, View, Text, Button, TouchableOpacity } from 'react-native'

function Login({ navigation }) {
    return (
        <View style = {{flex:1, alignItems: 'center', justifyContent: 'center'}}>
           <Button title='Login' onPress={()=>{navigation.navigate('Feed')}}/>
           <Button title='Sign Up' onPress={()=>{}}/>
        </View>
    )
}

export default Login;