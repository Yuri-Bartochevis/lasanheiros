import React from 'react'
import { StyleSheet, Image, View, Text,Button, TextInput, TouchableOpacity } from 'react-native'

function Feed({ navigation }) {
    return (
        <View style = {{flex:1, alignItems: 'center', justifyContent: 'center'}}>
        <Button title="go to detail screen" onPress={()=>{navigation.navigate('EventDetail')}}/>
    </View>
    )
}

export default Feed;