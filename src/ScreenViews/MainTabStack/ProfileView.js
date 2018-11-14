import React, { Component } from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'
import {HeadText, MediumText} from '../../components/SNRDefaults'
import Sample from '../../../assets/ninje.gif'
class ProfileView extends Component {
    render() {
        return (
            <View style={styles.parentContainer}>
                <View style={styles.childViewContainer}>
                <HeadText style={styles.textDes}> SNR PROFILE</HeadText>

                <View style={{flexDirection:'row'}}>
                    <Image style={styles.imageStyle} source={Sample}/>
                        <View style={{flexDirection:'column'}}>
                            <MediumText style={styles.textDes}>UserName: </MediumText>
                            <MediumText style={styles.textDes}>ID: </MediumText>
                        </View>
                </View>

                <MediumText style={styles.textDes}>First Name: </MediumText>
                <MediumText style={styles.textDes}>Last Name: </MediumText>
                <MediumText style={styles.textDes}>Email: </MediumText>
                <MediumText style={styles.textDes}>Located At: </MediumText>

                </View>
            </View>
        )
    }
}

export const styles = StyleSheet.create({
    parentContainer:{
        flex:1,
        width:'100%',
        alignItems:'center',
        backgroundColor:'white'
    },
    childViewContainer:{
        flex:1,
        width:'90%',
        alignSelf:'flex-start',
        backgroundColor:'white'
    },
    textDes:{
        color:'#FA58AC'
    },
    imageStyle:{
        width:'50%',
        height:150
    }   
})
export default ProfileView;