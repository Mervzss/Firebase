import React from 'react'
import { TextInput, StyleSheet } from 'react-native'

export const InitialTextInput = props => {
    return(
        <TextInput 
                style={[styles.inputStyle, props.style]}
                 {...props}/>
    )
}

const styles = StyleSheet.create({
    inputStyle:{
        color:'white',
        fontWeight:'bold',
        fontSize:18
    },
  });