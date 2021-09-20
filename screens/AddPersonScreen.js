import React, { useState, useEffect } from 'react'
import { View, Text, TextInput, FlatList, StyleSheet, TouchableOpacity, Dimensions, Modal } from 'react-native'
import { filter } from 'lodash';
import { useSelector, useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actionCreators from '../Redux/actions/index';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const AddPerson = ({ route, navigation }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [balance, setBalance] = useState(0);
  const [query, setQuery] = useState('');
  const [data, setData] = useState([]);
  const [fullData, setFullData] = useState([]);
  const [selected, setSelected] = useState({});
  const dispatch = useDispatch();
  const { newMember, addMember } = bindActionCreators(actionCreators, dispatch);
  const state = useSelector((state) => state);
  const contacts = state.members.contacts;

  useEffect(() => {
    setData(contacts);
    setFullData(contacts);
  }, []);

  const fetchPersonHandler = (newItem) => {
    setModalVisible(true);
    setSelected(newItem)
  }

  const modalSubmitHandler = () => {
    setModalVisible(!modalVisible)
    let temp = {};
    temp.name = selected.name;
    temp.number = selected.number;
    temp.balance = balance;
    temp.paid = false;
    addMember(temp);
    navigation.navigate("Import");
  }
  const handleSearch = text => {
    const formattedQuery = text.toLowerCase();
    const filteredData = filter(fullData, user => {
      return contains(user, formattedQuery);
    });
    setData(filteredData);
    setQuery(text);
  };

  const contains = ({ name }, query) => {
    if (name.includes(query)) {
      return true;
    }
    return false;
  };

  const renderHeader = () => {
    return (
      <View
        style={{
          backgroundColor: '#fff',
          padding: 10,
          marginVertical: 10,
          borderRadius: 20
        }}
      >
        <TextInput
          autoCapitalize="none"
          autoCorrect={false}
          clearButtonMode="always"
          value={query}
          onChangeText={queryText => handleSearch(queryText)}
          placeholder="Search"
          style={{ backgroundColor: '#fff', paddingHorizontal: 20 }}
        />

      </View>
    );
  }

  return (
    <View style={styles.container}>

      <FlatList
        ListHeaderComponent={renderHeader}
        data={data}
        keyExtractor={(item, index) => 'key' + index}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.listItem} onPress={() => fetchPersonHandler(item)}>
            <View style={styles.metaInfo}>
              <Text style={styles.title}>{`${item.name}`}</Text>
            </View>
          </TouchableOpacity>
        )}
      />

      {
        modalVisible ? (
          <View style={styles.centeredView} >
            <Modal
              animationType="slide"
              transparent={true}
              visible={modalVisible}
              onRequestClose={() => {
                setModalVisible(!modalVisible);
              }}
            >
              <View style={styles.centeredView}>
                <View style={styles.modalView}>
                  <TextInput
                    style={styles.input}
                    placeholder="enter amount"
                    onChangeText={num => setBalance(num)}
                    keyboardType="numeric"
                    onSubmitEditing={modalSubmitHandler} />
                </View>
              </View>
            </Modal>
          </View >
        ) : null}
    </View>
  )
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  container: {
    flex: 1,
    backgroundColor: '#f8f8f8',
    paddingTop: 25
  },
  listItem: {
    marginTop: 10,
    paddingVertical: 20,
    paddingHorizontal: 20,
    backgroundColor: '#fff',
    flexDirection: 'row'
  },
  metaInfo: {
    marginLeft: 10
  },
  title: {
    fontSize: 18,
    width: 200,
    padding: 10
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
    borderColor: '#000000',
    fontSize: 20
  }
});

export default AddPerson
