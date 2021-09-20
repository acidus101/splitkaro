import React from 'react';
import { View, Text, StyleSheet, Image, Dimensions } from 'react-native';
import AppLoading from 'expo-app-loading';
import {
    useFonts,
    Roboto_400Regular,
    Roboto_300Light
} from "@expo-google-fonts/roboto";

export default function ListItem({ user, mobile, username }) {
    const userImage = user.photoUrl;
    const capitalizeFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }
    let [fontsLoaded] = useFonts({
        Roboto_400Regular,
        Roboto_300Light
    });
    if (!fontsLoaded) {
        return (
            <AppLoading />
        )
    } else {
        return (
            <View style={styles.container}>
                <View style={styles.imageborder}>
                    <Image style={styles.image} source={{ uri: userImage }} />
                </View>
                <View style={styles.userDetails}>
                    <Text style={styles.name}>{capitalizeFirstLetter(user.givenName)}</Text>
                    <Text style = {styles.detailsText}>{mobile}</Text>
                    <Text style = {styles.detailsText}>{username}</Text>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        backgroundColor: '#F5F5F5',
        marginVertical: 5,
        marginHorizontal: 10,
        paddingLeft: 20,
        paddingVertical: 40,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
    },
    userDetails: {
        flex: 1,
        marginTop: 5,
        marginHorizontal: 35,
        flexDirection: 'column',
        alignItems: 'flex-start',
    },
    imageborder: {
        height: 80,
        width: 80,
        borderRadius: 5,
    },
    image: {
        width: 80,
        height: 80,
        borderRadius: 40,
        overflow: "hidden",
        borderWidth: 1,
        borderColor: "black"
    },
    name: {
        fontFamily:'Roboto_400Regular',
        fontSize:18
    },
    detailsText: {
        color:'#808080'
    }
});