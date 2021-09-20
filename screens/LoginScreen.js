
import React, { useState } from "react";
import {
    StyleSheet,
    View,
    Text,
    ActivityIndicator,
    Dimensions
} from "react-native";
import * as Google from "expo-google-app-auth";
import Button from "../components/GoogleButton";
import { Ionicons } from '@expo/vector-icons';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const LoginScreen = ({ navigation }) => {
    const [loading, setLoading] = useState(false);
    const signInAsync = async () => {
        setLoading(true);
        console.log("LoginScreen.js 6 | loggin in");
        try {
            const { type, user } = await Google.logInAsync({
                androidClientId: `875455185968-7moc94ojmdnehgpf6r9j6b46k3jgkc2t.apps.googleusercontent.com`,
            });
            setLoading(false);

            if (type === "success") {
                console.log("LoginScreen.js 17 | success, navigating to profile");
                setLoading(false);
                navigation.navigate("Mobile", {user});
            }
        } catch (error) {
            console.log("LoginScreen.js 19 | error with login", error);
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.header}>SplitKaro</Text>
            {loading ? <ActivityIndicator size="large" color="tomato" /> :
                <Button style = {styles.button} clicked={signInAsync}>
                    <View>
                        <Ionicons name={'logo-google'} size={24} color={'gray'} /> 
                    </View>
                    <View>
                        <Text>   Login With google</Text>
                    </View>
                </Button>}
        </View>
    );
};

export default LoginScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'space-evenly',
    },
    header: {
        fontSize: 40,
    },
    button: {
        height: windowHeight / 12,
        width: windowWidth / 1.5,
    }
});