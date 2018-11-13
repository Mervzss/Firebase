import React, { Component } from 'react'
import { View, Text, StyleSheet, ScrollView, Image } from 'react-native'
import { DefaultBG, HeadText, HomeButton } from '../../../components/SNRDefaults'
import MapView, { Marker } from 'react-native-maps'
import { connect } from 'react-redux'
class SignSubmit extends Component {
    onButtonNext = () => {

    }
    render() {
        return (

            <DefaultBG>
                <ScrollView contentContainerStyle={{ alignItems: "center", paddingVertical: 50 }} showsVerticalScrollIndicator={false}>
                    {/* OutPuts User Inputs */}
                    <HeadText> Sign Up: Submit</HeadText>

                    {/* TEXT VIEW */}
                    <View style={{flexDirection:'column'}}>
                                   
                        <Text>Your userName:</Text>
                        <Text> {this.props.firstName}.{this.props.lastName}</Text>
                        <Text>Email:</Text>
                        <Text>{this.props.email}</Text>
                        <Text>Password:</Text>
                        <Text>{this.props.password}</Text>
                        
                    
                    </View>

                    {/* IMAGE VIEW */}
                    <View style={{ width: '100%', height: 200 }}>
                        <Image resizeMode='stretch' style={styles.insertedImage} source={this.props.picture} />
                    </View>
                    
                    {/* MAP VIEW */}
                    <View style={{ width: '100%', height: 200 }}>
                        <MapView
                            style={{ width: '90%', height: '100%' }}
                            initialRegion={this.props.location}>
                            <Marker coordinate={this.props.location} pinColor="#f024b0" />
                        </MapView>
                    </View>


                    <View style={{ width: '100%', alignItems: 'center', }}>
                        <HomeButton textTitle={'Submit'} iconName='md-done-all' inverted={true} onPress={() => this.props.navigation.navigate('Login')} />
                    </View>

                    <HeadText> Sign Up: Submit</HeadText>

                </ScrollView>
            </DefaultBG>

        )
    }
}
const mapStateToProps = state => {
    return {
        firstName: state.SignIn.firstName,
        lastName: state.SignIn.lastName,
        email: state.SignIn.email,
        password: state.SignIn.password,
        picture: state.SignIn.picture,
        location: state.SignIn.location
    }
}

const styles = StyleSheet.create({
    insertedImage: {
        width: '90%',
        height: 200,
    }
})

export default connect(mapStateToProps)(SignSubmit);