import React from 'react'
import {View ,StyleSheet, Text, TouchableOpacity} from 'react-native'

import Icons from 'react-native-vector-icons/Ionicons'

export const SignUpButtons = props => {

    // Additional Button
    let middleButton = null

    if(props.middleButton){
        middleButton = (
                    <TouchableOpacity style={styles.middleView} onPress={props.onMidPress}>
                    <Text style={styles.textStyle}> {props.middleTitle}</Text>    
                    </TouchableOpacity>
        )
    }

    return(
        <View style={styles.viewButton}>

                    <Icons name='md-arrow-dropleft-circle' size={50} color={props.inverted ? '#FA58AC':'white'} onPress={props.buttonBack}/>

                    {/* Optional Middle Button */}
                    {middleButton}
                    
                    <Icons name='md-arrow-dropright-circle' size={50} color={props.inverted ? '#FA58AC':'white'} onPress={props.buttonNext}/>

                </View>
    )
}

const styles = StyleSheet.create({
    viewButton:{
        width:'82%',
        justifyContent:'space-between',
        flexDirection:'row',
        paddingTop:12
    },
    middleView:{
        justifyContent:'center'
    },
    textStyle:{
        color:'white',
        fontSize:20,
        fontWeight:'bold'
    }
  });