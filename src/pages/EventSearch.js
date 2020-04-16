import React from 'react'
import { StyleSheet, Image, View, Text, TextInput, TouchableOpacity } from 'react-native'
import { requestPermissionsAsync, getCurrentPositionAsync } from 'expo-location'
import { MaterialIcons } from '@expo/vector-icons'


function EventSearch({navigation}) {
    return (
        <>
            <View>
                <View style={styles.searchForm}>
                    <TextInput
                        style={styles.searchInput}
                        placeholder="Exemplo: Drift & Meet"
                        autoCapitalize="none"
                        placeholderTextColor="#ff5c00"
                        autoCorrect={false} />

                    <TouchableOpacity onPress={() => { }} style={styles.searchButton}>
                        <MaterialIcons name="location-searching" size={20} color="#fff" />
                    </TouchableOpacity>
                </View>
            </View>
        </>
    )
}

const styles = StyleSheet.create({

    searchForm: {
        position: 'absolute',
        top: 20,
        left: 20,
        right: 20,
        zIndex: 5,
        flexDirection: 'row'
    },

    searchInput: {
        flex: 1,
        height: 50,
        backgroundColor: '#fff',
        color: '#333',
        borderRadius: 25,
        paddingHorizontal: 20,
        fontSize: 16,
        shadowColor: '#000',
        shadowOpacity: 0.2,
        shadowOffset: {
            width: 4,
            height: 4,
        },
        elevation: 2,
    },

    searchButton: {
        width: 50,
        height: 50,
        backgroundColor: '#ff5c00',
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 15,
    },

    location: {

    }
})
export default EventSearch