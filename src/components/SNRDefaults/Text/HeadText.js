import React from 'react'
import {Text,StyleSheet} from 'react-native'

export const HeadText = props => {
    return(
        <Text style={[styles.textStyle, props.style]}>{props.children}</Text>
    )
}

const styles = StyleSheet.create({
    textStyle:{
        color: '#F2FBEF',
        fontSize: 30,
        fontWeight: 'bold',
        alignSelf:'center',
        paddingBottom:'5%'
    },
  });