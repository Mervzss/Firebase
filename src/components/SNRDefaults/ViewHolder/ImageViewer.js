import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'

import ImagePicker from 'react-native-image-picker'
import { SignUpButtons } from '../Button/SignUpButtons'
export class ImageViewer extends React.Component {
    state={
        getImage: null
    }
    pickedImage = () => {

        ImagePicker.showImagePicker(
            {
                title: 'Select Your Pic',
            }
            , (response) => {
                if (response.didCancel) {
                    console.log('User cancelled image picker');
                } else if (response.error) {
                    console.log('ImagePicker Error: ', response.error);
                } else {
                    console.log(response)
                    this.setState({
                        getImage: { uri: response.uri , base64: response.data}
                    })
                    // const source = { uri: response.uri };
                }
            })
    }

    componentDidUpdate(){
        this.props.passImage(this.state.getImage)
    }

    render() {
        let imageSelected = this.state.getImage
            ? <Image resizeMode='stretch' style={styles.insertedImage} source={this.state.getImage} />
            : <Text style={{ fontSize: 75, color: '#FA58AC' }}>?</Text>
        return (
            <View style={{ width: '100%', alignItems: 'center', justifyContent: 'center' }}>
                <View style={styles.imageContainer}>
                    {imageSelected}
                </View>
                <SignUpButtons
                    middleButton={true} middleTitle={'Take a Pic'} onMidPress={this.pickedImage}
                    buttonBack={this.props.buttonBack}
                    buttonNext={this.props.buttonNext}
                />
            </View>
        )
    }
}


const styles = StyleSheet.create({
    imageContainer: {
        width: '90%',
        height: 200,
        backgroundColor: 'white',
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center'
    },
    insertedImage: {
        width: '100%',
        height: '100%',
        borderRadius: 20,
    }
});