import React,{useEffect, useState} from 'react'
import { View, Text, SafeAreaView, StyleSheet, Dimensions } from 'react-native'
import AccountHeader from '../components/AccountHeader';
import Card from '../components/Card';
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';
import * as Contacts from 'expo-contacts';
import { useSelector, useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actionCreators from '../Redux/actions/index';

const windowWidth = Dimensions.get('window').width;

const HomeScreen = ({ route, navigation }) => {
    const { mobile, user } = route.params;
    const [contacts, setContacts ] = useState([]);

    const dispatch = useDispatch();
    const { addContacts } = bindActionCreators(actionCreators, dispatch);


    var str = user.email;
    let username = str.split("@")[0];

    const logoutHandler = () =>{
        navigation.navigate("Login")
    }
    const importHandler = () =>{
        navigation.navigate("Import", {contacts});
    }

    useEffect(() => {
        (async () => {
          const { status } = await Contacts.requestPermissionsAsync();
          if (status === 'granted') {
            const { data } = await Contacts.getContactsAsync({
              number: [Contacts.Fields.PhoneNumbers],
              firstName: [Contacts.Fields.firstName],
              firstName: [Contacts.Fields.lastName],
            });
            
            if (data.length > 0) {
                let temp = [];
                data.forEach(el => {
                    let t={};
                    t.name = el.name;
                    if(el.phoneNumbers){
                        t.number = el.phoneNumbers[0].number;
                    }else{
                        t.number = ''
                    }
                    temp.push(t);
                })
              setContacts(temp);
              addContacts(temp);
            }
          }
        })();
      }, []);

    return (
        <SafeAreaView style={styles.container}>
            <AccountHeader user={user} mobile={mobile} username={username} />
            <View>
                <Card style={styles.currencyCard}>
                    <View style={styles.currency}>
                        <Text> Default currency</Text>
                        <FontAwesome name="inr" size={20} color="grey" />
                    </View>
                </Card>
                <View style={styles.hr} />
                <Card>
                    <TouchableOpacity style={styles.rating}>
                        <Ionicons name="star" size={24} color="#3895d3" />
                        <Text style={{ marginLeft: 10 }}>Rate Us</Text>
                    </TouchableOpacity>
                </Card>
                <View style={styles.hr} />
                <Card>
                    <TouchableOpacity style={styles.rating} onPress = {logoutHandler}>
                        <Ionicons name="exit-outline" size={24} color="#3895d3" />
                        <Text style={{ marginLeft: 10 }}>Logout</Text>
                    </TouchableOpacity>
                </Card>
                <View style={styles.hr} />
                <Card>
                    <TouchableOpacity style={styles.rating} onPress= {importHandler}>
                        <Ionicons name="cloud-upload" size={24} color="#3895d3" />
                        <Text style={{ marginLeft: 10 }}>Import balances from other apps</Text>
                    </TouchableOpacity>
                </Card>
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
    currency: {
        padding: 15,
        margin: 5,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    currencyCard: {
        borderRadius: 10,
        borderWidth: 1,
    },
    rating: {
        padding: 15,
        margin: 5,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center'
    },
    hr: {
        marginVertical:5,
        borderBottomColor: '#808080',
        borderStyle: 'dashed',
        borderBottomWidth: 1,
        borderRadius: 1,
        marginHorizontal: windowWidth/15
    }
});

export default HomeScreen;
