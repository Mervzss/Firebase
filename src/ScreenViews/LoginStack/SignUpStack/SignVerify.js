import React, { Component } from 'react'
import { View, StyleSheet } from 'react-native'
import {connect} from 'react-redux'
import {verifyPass} from '../../../ReduxStore/Actions/SignIn'
// Custom Components Imports
import { DefaultBG, HeadText, SignUpButtons, InitialTextInput } from '../../../components/SNRDefaults'

class SignVerify extends Component {

    state={
        pass:''
    }
    onButtonNext = () =>{
        if(this.props.validity){
            this.props.navigation.navigate('Picture')
            }
            else{
                alert("Wrong Verify")
            }
        
    }
    onUpdateText = (val) => {
        this.setState({
            pass: val
        })
    }
    shouldComponentUpdate(){
        console.log('Should I update', this.props.validity)
        return !this.props.validity
    }
    componentDidUpdate(){
        this.props.passVerified(this.state.pass)    
    }
    render() {
        return (
            <DefaultBG>

                <HeadText> Sign Up: Step 2</HeadText>

                <View style={{ width: '90%' }}>
                    <InitialTextInput
                        underlineColorAndroid='white'
                        placeholder='Confirm Password'
                        placeholderTextColor='#F6CEE3'
                        onChangeText={val => this.onUpdateText(val)}
                        />
                </View>

                <SignUpButtons 
                    buttonBack={() => this.props.navigation.navigate('SignInit')}
                    buttonNext={this.onButtonNext}
                />


            </DefaultBG>
        )
    }
}
const mapStateToProps = state =>{
    return{
        validity: state.SignIn.passValid
    }
}
const mapDispatchToProps = dispatch =>{
    return{
        passVerified: (pass) => dispatch(verifyPass(pass))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignVerify);