import React from 'react'
import { View, Text, FlatList, StyleSheet, ScrollView } from 'react-native'
import { useSelector, useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actionCreators from '../Redux/actions/index';

const IndividualBalanceScreen = () => {

    const dispatch = useDispatch();
    const { } = bindActionCreators(actionCreators, dispatch);
    const state = useSelector((state) => state);
    const data = state.ind.people;
    
    return (
        <View style={styles.container}>
            <FlatList
                data={data}
                keyExtractor={(item, index) => 'key' + index}
                renderItem={({ item }) => (
                    <View style={styles.listItem}>
                        <View style={styles.metaInfo}>
                            <Text style={styles.title}>{item.name}</Text>
                            {item.paid ? (
                                    <Text style={styles.Recievebalance}>recieve {item.balance}</Text>
                                ) : (
                                    <Text style={styles.Paybalance}>pay {item.balance}</Text>
                                )
                            }
                        </View>
                    </View>
                )}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#fff',
        padding: 20
    },
    metaInfo: {
        marginLeft: 10,
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
        borderWidth: 1,
        borderColor: 'black',
        paddingHorizontal: 15,
        paddingVertical: 10,
        borderRadius: 5
    },
    title: {
        fontSize: 18,
        width: 200,
        padding: 10
    },
    Paybalance: {
        color:'#D22B2B'
    },
    Recievebalance:{
        color:'#50C878'
    }
})

export default IndividualBalanceScreen;
