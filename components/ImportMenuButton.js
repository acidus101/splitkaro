import React from 'react'
import { View, Text,TouchableOpacity, StyleSheet} from 'react-native'


const ImportMenuButton = (props) => {
    return (
        <TouchableOpacity style = {styles.container} onPress = {props.clicked}>
            {props.children}
            <Text style = {styles.text}>{props.title}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container:{
        flexDirection:'column',
        justifyContent: 'center',
        alignItems:'center',
        width:100
    },
    text:{
        textAlign: 'center'
    }
})
export default ImportMenuButton;
