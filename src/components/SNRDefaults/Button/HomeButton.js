import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'

import Icons from 'react-native-vector-icons/Ionicons'

export const HomeButton = props => {
    let isInvert = false;
    isInvert = props.inverted

    return (
        <TouchableOpacity style={isInvert ? invertedstyles.mainButton : styles.mainButton} onPress={props.onPress}>

            <View style={isInvert ? invertedstyles.textBackground : styles.textBackground}>
                <View style={styles.intextView}>
                    <Text style={isInvert ? invertedstyles.titleStyle : styles.titleStyle}>
                        {props.textTitle}
                    </Text>
                </View>

                <View style={isInvert ? invertedstyles.iconBackground : styles.iconBackground}>
                    <Icons name={props.iconName} size={45} color={isInvert ? "#FA58AC" : 'white'} />
                </View>
            </View>

        </TouchableOpacity>
    )

}

const styles = StyleSheet.create({
    mainButton: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'center',
        paddingBottom:'5%',
    },
    textBackground: {
        backgroundColor: "#FA58AC",
        width: '80%',
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 2,
        borderColor: 'white',
        borderRadius: 15,
        borderTopRightRadius: 40,
        borderBottomRightRadius: 40,
        flexDirection: 'row'
    },
    intextView: {
        alignItems: 'flex-end',
        width: '70%',
        justifyContent: 'center',
        paddingRight: '8%',

    },
    titleStyle: {
        color: 'white',
        fontSize: 28,
        fontWeight: 'bold',
        margin:15
    },
    iconBackground: {
        backgroundColor: '#FA58AC',
        width: 60,
        height: 60,
        borderWidth: 2,
        borderColor: 'white',
        borderRadius: 60,
        justifyContent: 'center',
        alignItems: 'center',
        // margin: 5
    }
});

const invertedstyles = StyleSheet.create({
    mainButton: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'center',
        paddingBottom:'5%',
    },
    textBackground: {
        backgroundColor: "white",
        width: '80%',
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 2,
        borderColor: '#FA58AC',
        borderRadius: 15,
        borderTopRightRadius: 40,
        borderBottomRightRadius: 40,
        flexDirection: 'row'
    },
    intextView: {
        alignItems: 'flex-end',
        width: '70%',
        justifyContent: 'center',
        paddingRight: '8%',

    },
    titleStyle: {
        color: '#FA58AC',
        fontSize: 28,
        fontWeight: 'bold',
        margin:15
    },
    iconBackground: {
        backgroundColor: 'white',
        width: 60,
        height: 60,
        borderWidth: 2,
        borderColor: '#FA58AC',
        borderRadius: 60,
        justifyContent: 'center',
        alignItems: 'center',
        // padding: 5
    }
});