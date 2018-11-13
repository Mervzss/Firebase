import React, { Component } from 'react'
import {View,StyleSheet} from 'react-native'
import {connect} from 'react-redux'
import {addInitial} from '../../../ReduxStore/Actions/SignIn'
// Custom Components Imports
import {DefaultBG, HeadText, SignUpButtons, InitialTextInput} from '../../../components/SNRDefaults'

class SignInitial extends Component{
    state ={
        firstName:{
            value:'',
            valid:false,
            rule:{
                minlength:6
            }
        },
        lastName:{
            value:'',
            valid:false,
            rule:{
                minlength:8
            },
        },
        email:{
            value:'',
            valid:false,
            rule:{
                isEmail:true
            },
        },
        password:{
            value:'',
            valid:false,
        },

    }

    onUpdateText = (key, val) => {
        this.setState(prevState => {
            return{
                ...prevState,
                [key]:{
                    ...prevState[key],
                    value: val
                }
            }
        })
    }

    onNextButton = () =>{
        this.props.initialAdd(
            this.state.firstName.value,
            this.state.lastName.value,
            this.state.email.value,
            this.state.password.value
        )
        // this.props.navigation.navigate('Verify')
    }
    render(){
        return(
            <DefaultBG >
                <HeadText> Sign Up: Step 1 </HeadText>

                <View style={styles.inputParent}>
                    <InitialTextInput
                        underlineColorAndroid='white'
                        placeholder='Enter First Name'
                        placeholderTextColor='#F6CEE3'
                        value={this.state.firstName.value}
                        onChangeText={(val) => this.onUpdateText("firstName", val)}
                        />
                    
                    <InitialTextInput
                        underlineColorAndroid='white'
                        placeholder='Enter Last Name'
                        placeholderTextColor='#F6CEE3'
                        value={this.state.lastName.value}
                        onChangeText={(val) => this.onUpdateText("lastName", val)}
                        />

                    <InitialTextInput
                        underlineColorAndroid='white'
                        placeholder='Enter Email'
                        placeholderTextColor='#F6CEE3' 
                        value={this.state.email.value}
                        onChangeText={(val) => this.onUpdateText("email", val)}
                        />

                    <InitialTextInput
                        underlineColorAndroid='white'
                        placeholder='Enter Password'
                        placeholderTextColor='#F6CEE3' 
                        value={this.state.password.value}
                        onChangeText={(val) => this.onUpdateText("password", val)}
                        />
                </View>
                
                <SignUpButtons
                buttonBack={() => this.props.navigation.navigate('AppInit')}
                buttonNext={this.onNextButton}
                />
                    


            </DefaultBG>
        )
    }
}

const mapDispatchToProps = dispatch =>{
    return{
        initialAdd: (fname,lname,email,pass) => dispatch(addInitial(fname,lname,email,pass))
    }
}

const styles = StyleSheet.create({
    inContainer:{
        width:'100%',
        alignItems: 'center',
    },
    inputParent:{
        width:'90%'
    },
  });
    


export default connect(null, mapDispatchToProps)(SignInitial);