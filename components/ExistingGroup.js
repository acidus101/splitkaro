import React, { useState } from 'react'
import {
    View,
    Text,
    StyleSheet,
    Dimensions,
    TextInput,
    TouchableOpacity,
    FlatList,
    Alert
} from 'react-native'
import AppLoading from 'expo-app-loading';
import {
    useFonts,
    Roboto_400Regular,
    Roboto_300Light
} from "@expo-google-fonts/roboto";
import { AntDesign } from '@expo/vector-icons';
import NewMember from './NewMember';
import ButtonDark from '../components/ButtonDark';
import { useSelector, useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actionCreators from '../Redux/actions/index';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const ExistingGroup = ({navigation}) => {
    const [groupName, setGroupName] = useState('');
    let [fontsLoaded] = useFonts({
        Roboto_400Regular,
        Roboto_300Light
    });
    const dispatch = useDispatch();
    const { addMember, addGroup} = bindActionCreators(actionCreators, dispatch);
    const state = useSelector((state) => state);

    const onSubmitEdit = () => {

    }

    const newPersonHandler = () => {
        navigation.navigate("Add");
    }
    const createGroupHandler = () => {
        let t = {};
        t.groupName = groupName;
        t.items = items;
        if(groupName !== ''){
            if(items.length !== 0){
                addGroup(t);
                setGroupName('');
                navigation.navigate("Gbal")
            }else{
                Alert.alert("Add some members");
            }
        }else{
            Alert.alert("Group Name Required");
        }
    }
    let items = state.members.temp.filter(el => el !== {})
    

    if (!fontsLoaded) {
        return (
            <AppLoading />
        )
    } else {
        return (
            <View>
                <Text style={styles.groupHeader}>
                    Group name
                </Text>
                <TextInput
                    style={styles.input}
                    placeholder=""
                    value = {groupName}
                    onChangeText={el => setGroupName(el)}
                    placeholder="Enter Group Name"/>
                <Text style={styles.addshareHeader}>
                    Add Overall Shares
                </Text>
                <Text style={styles.addshareFooter}>
                    from the other apps
                </Text>
                <TouchableOpacity style={styles.addUserButton} onPress = {newPersonHandler}>
                    <AntDesign name="adduser" size={35} color="#50C878" />
                </TouchableOpacity>
                <View style={styles.list}>
                    <FlatList
                        contentContainerStyle={{ paddingBottom: 10, paddingTop: 8 }}
                        data={items}
                        keyExtractor={(item, index) => 'key' + index}
                        renderItem={({ item }) =><NewMember item={item} />}
                    />
                </View>
                <ButtonDark style = {styles.createGroupButton} clicked = {createGroupHandler}>Create Group</ButtonDark>
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
        fontSize: 15
    },
    groupHeader: {
        fontFamily: 'Roboto_400Regular',
        fontSize: 15,
        paddingLeft: 20,
        paddingVertical: 5
    },
    addUserButton: {
        marginTop: 10,
        marginHorizontal: 15
    },
    addshareHeader: {
        fontFamily: 'Roboto_400Regular',
        fontSize: 20,
        paddingLeft: 20,
        marginTop: 15
    },
    addshareFooter: {
        fontFamily: 'Roboto_300Light',
        fontSize: 13,
        paddingLeft: 20,
    },
    list: {
        marginHorizontal:20,
        marginTop:20,
    },
    createGroupButton: {
        height : windowHeight/13,
        width : windowWidth/1.1,
        marginHorizontal : 20
    }

})
export default ExistingGroup;
