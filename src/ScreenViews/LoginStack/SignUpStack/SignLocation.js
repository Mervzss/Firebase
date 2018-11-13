import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import {connect} from 'react-redux'
import {addLocation} from '../../../ReduxStore/Actions/SignIn'
//Custom Components Imports
import {DefaultBG, HeadText, SignUpButtons ,MapViewer} from '../../../components/SNRDefaults'

class SignLocation extends Component {

    onButtonNext = () =>{
        this.props.navigation.navigate('Submit')
    }

    resLocation = location =>{
        this.props.locationAdd(location)
    }
    render() {
        return (
            <DefaultBG>
                <HeadText>Sign Up: Step 4</HeadText>
                <HeadText> Locate Yourself</HeadText>

                <MapViewer 
                passLocation ={this.resLocation}
                buttonBack={() => this.props.navigation.navigate('Picture')}
                buttonNext={this.onButtonNext}
                />

                
            </DefaultBG>
        )
    }
}

const mapDispatchToProps = dispatch =>{
    return{
        locationAdd: loc => dispatch(addLocation(loc))
    }
}
export default connect(null, mapDispatchToProps)(SignLocation);