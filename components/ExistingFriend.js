import React, { useState } from 'react'
import { View, Text, StyleSheet, Dimensions, TextInput, TouchableOpacity } from 'react-native'
import AppLoading from 'expo-app-loading';
import {
    useFonts,
    Roboto_400Regular,
    Roboto_300Light
} from "@expo-google-fonts/roboto";
import ButtonDark from './ButtonDark';
import { useSelector, useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actionCreators from '../Redux/actions/index';
import NewMember from './NewMemberI';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const ExistingGroup = ({navigation}) => {
    const [view, setView] = useState(false);
    const [amount, setAmount] = useState(0);
    const [name, setName] = useState('');
    const [newFriend, setNewFriend] = useState({});
    
    const dispatch = useDispatch();
    const { addMemberI } = bindActionCreators(actionCreators, dispatch);

    let [fontsLoaded] = useFonts({
        Roboto_400Regular,
        Roboto_300Light
    });

    const onSubmitEdit = () => {
        let temp = {};
        temp.name = name;
        temp.balance = amount;
        temp.paid = false;
        temp.number = "000"
        setNewFriend(temp)
        setView(true);
    }
    
    const shareHandler = () => {
        addMemberI(newFriend);
        navigation.navigate("Ibal")
    }

    if (!fontsLoaded) {
        return (
            <AppLoading />
        )
    } else {
        return (
            <View>
                <Text style={styles.groupHeader}>
                    Person's name
                </Text>
                <TextInput
                    style={styles.input}
                    placeholder=""
                    onChangeText={el => setName(el)}
                    placeholder="Enter Name"/>
                <TextInput
                    style={styles.input}
                    placeholder=""
                    onChangeText={el => setAmount(el)}
                    placeholder="Enter Share"
                    keyboardType="numeric"
                    onSubmitEditing={onSubmitEdit} />
                {
                    view?<NewMember item={newFriend} />:null
                }
                <ButtonDark style = {styles.createFriendButton} clicked = {shareHandler}>Add Expense</ButtonDark>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    input: {
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderRadius: 10,
        height: windowHeight / 14,
        width: windowWidth / 1.2,
        marginHorizontal: 20,
        padding: 10,
        borderColor: '#000000',
        fontSize: 15,
        margin:10
    },
    groupHeader: {
        fontFamily: 'Roboto_400Regular',
        fontSize: 15,
        paddingLeft: 20,
        paddingVertical: 5
    },
    createFriendButton: {
        height : windowHeight/13,
        width : windowWidth/1.1,
        marginHorizontal : 20
    }
})
export default ExistingGroup;
