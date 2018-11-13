import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import {connect} from 'react-redux'
import {addPicture} from '../../../ReduxStore/Actions/SignIn'

//Custom Components Imports
import {DefaultBG, HeadText, SignUpButtons, ImageViewer} from '../../../components/SNRDefaults'

//Sample Pic
import Sample from '../../../../assets/ninje.gif'
class SignPicture extends Component {

    onButtonNext = () =>{
        console.log('getPic')
        // passImage=(image) => {this.props.pictureAdd(image)}
        
        this.props.navigation.navigate('Location')
    }

    resImage = image =>{
        this.props.pictureAdd(image)
    }
    render() {
        return (
            <DefaultBG>
                <HeadText>Sign Up: Step 3</HeadText>

                <HeadText style={{fontSize:20}}>"Set a Picture"</HeadText>
                
                <ImageViewer 
                passImage ={this.resImage}
                buttonBack ={() =>  this.props.navigation.navigate('Verify')}
                buttonNext = {this.onButtonNext}
                />

            </DefaultBG>
        )
    }
}

const mapDispatchToProps = dispatch =>{
    return{
        pictureAdd: pic => dispatch(addPicture(pic))
    }
}

const styles = StyleSheet.create({
    imageContainer:{
        width:'90%',
        height: 200,
        backgroundColor:'white',
        borderRadius:20
    }
});


export default connect(null, mapDispatchToProps)(SignPicture);