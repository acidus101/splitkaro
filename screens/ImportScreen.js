import React, { useState } from 'react'
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity } from 'react-native'
import ImportMenuButton from '../components/ImportMenuButton';
import { Ionicons } from '@expo/vector-icons';;
import { FontAwesome } from '@expo/vector-icons';
import ExistingGroup from '../components/ExistingGroup';
import ExistingFriend from '../components/ExistingFriend';

const ImportScreen = ({route, navigation}) => {
    const [eGroup, seteGroup] = useState(true);
    const [friend, setFriend] = useState(false);
    const [nGroup, setnGroup] = useState(false);

    let color1, color2, color3;
    let viewComponent;

    if (eGroup) {
        color1 = '#3895d3';
        viewComponent  = <ExistingGroup  navigation = {navigation}/>
    } else {
        color1 = 'grey'
    }
    if (friend) {
        color2 = '#3895d3';
        viewComponent = <ExistingFriend navigation = {navigation}/>
    } else {
        color2 = 'grey'
    }
    if (nGroup) {
        color3 = '#3895d3';
        viewComponent = null
    } else {
        color3 = 'grey'
    }

    const eGroupHandler = () => {
        setFriend(false);
        setnGroup(false);
        seteGroup(true);
    }

    const friendHandler = () => {
        setFriend(true);
        setnGroup(false);
        seteGroup(false);
    }

    const nGroupHandler = () => {
        setFriend(false);
        setnGroup(true);
        seteGroup(false);
    }

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.menu}>
                <ImportMenuButton title={'An Existing Group'} clicked={eGroupHandler}>
                    <FontAwesome name="group" size={35} color={color1} />
                </ImportMenuButton>
                <ImportMenuButton title={'An Existing Friend'} clicked={friendHandler}>
                    <Ionicons name="people" size={35} color={color2} />
                </ImportMenuButton>
                <ImportMenuButton title={'Create a New Group'} clicked={nGroupHandler}>
                    <FontAwesome name="group" size={35} color={color3} />
                </ImportMenuButton>
            </View>
            <View>
                {
                    viewComponent
                }
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#fff',
    },
    menu: {
        flexDirection: 'row',
        backgroundColor: '#F5F5F5',
        marginVertical: 5,
        marginHorizontal: 10,
        paddingLeft: 20,
        paddingVertical: 25,
        justifyContent: 'space-around',
        alignItems: 'center',
        borderRadius: 5,
    }
})
export default ImportScreen;
