
import React, { useState } from "react";
import {
    StyleSheet,
    View,
    Text,
    Dimensions,
    SafeAreaView,
    TextInput
} from "react-native";

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const MobileNumberScreen = ({route, navigation }) => {
    const [mobile, setMobile] = useState('');
    const { user } = route.params;
    const onSubmitEdit = () => {
        navigation.navigate("Account", {user, mobile})
    }
    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.header}>Enter Your Mobile No.</Text>
            <TextInput 
                style={styles.input}
                placeholder=""
                onChangeText={num => setMobile(num)}
                keyboardType="numeric" 
                onSubmitEditing={onSubmitEdit}/>
        </SafeAreaView>
    );
};

export default MobileNumberScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        paddingTop: 25
    },
    header: {
        fontSize: 20,
    },
    input: {
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderRadius: 10,
        height: windowHeight / 12,
        width: windowWidth / 1.5,
        margin: 20,
        padding: 10,
        borderColor:'#000000',
        fontSize:20
    }
});