import React, { useState } from 'react'
import { View, Text, Switch, StyleSheet, Dimensions, TouchableOpacity } from 'react-native'
import { useSelector, useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actionCreators from '../Redux/actions/index';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const NewMember = ({ item }) => {
    const [yes, setYes] = useState(false);
    const dispatch = useDispatch();
    const { updateMemberI } = bindActionCreators(actionCreators, dispatch);
    const state = useSelector((state) => state);
    const toggleSwitch = () => {
        setYes(!yes);
        // updateMemberI(item.name);
    }

    return (
        <TouchableOpacity style={styles.memberItem}>
            <Text style={styles.memberText}>
                {item.name}
            </Text>
            <View style = {{flexDirection:'row'}}>
                <Switch
                    trackColor={{ false: "#767577", true: "#50C878" }}
                    thumbColor={"#f4f3f4"}
                    ios_backgroundColor="#3e3e3e"
                    onValueChange={toggleSwitch}
                    value={yes}
                />
                <Text style={{ ...styles.amount, color: yes ? '#50C878' : '#D22B2B' }}>
                    RS {item.balance}
                </Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    memberItem: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent:'space-between',
        margin:5
    },
    memberText: {
        fontSize: 20,
        marginRight: windowWidth / 5
    },
    amount: {
        alignContent: 'center',
        justifyContent: 'center',
        marginHorizontal: 10,
    },

})
export default NewMember;
