import React, { Component } from 'react'
import {View,Text,StyleSheet} from 'react-native'

//Custom imports
import { DefaultBG, HeadText, InitialTextInput, SignUpButtons } from "../../components/SNRDefaults";

class LoginView extends Component{
    render(){
        return(
            <DefaultBG inverted={true}>
                <HeadText style={{color:'#FA58AC'}}>Log In</HeadText>

                <View style={{width:'90%'}}>

                    <InitialTextInput
                    underlineColorAndroid='#FA58AC'
                    placeholder='Enter UserName'
                    placeholderTextColor='#F781F3'
                    style={styles.textStyle}
                    />

                    <InitialTextInput
                    underlineColorAndroid='#FA58AC'
                    placeholder='Enter Password'
                    placeholderTextColor='#F781F3'
                    style={styles.textStyle}
                    />
                </View>

                <SignUpButtons
                    inverted={true}
                    buttonBack={() => this.props.navigation.navigate('AppInit')}
                    buttonNext={() => this.props.navigation.navigate('Main')}
                />
                
            </DefaultBG>
        )
    }
}

const styles = StyleSheet.create({
    textStyle:{
        color:'#FA58AC',
        fontWeight:'bold',
        fontSize:18
    }
})
export default LoginView