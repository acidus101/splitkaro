import React from 'react'
import { View, StyleSheet } from 'react-native'

const Card = (props) => {
    return (
        <View style={{ ...style.container, ...props.style }}>
            {props.children}
        </View>
    )
}

const style = StyleSheet.create({
    container: {
        borderColor:'#000',
        marginHorizontal:20,
    }
})
export default Card
