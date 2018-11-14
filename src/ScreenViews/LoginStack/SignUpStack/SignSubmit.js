import React, { Component } from 'react'
import { View, Text, StyleSheet, ScrollView, Image, ActivityIndicator } from 'react-native'
import { DefaultBG, HeadText, HomeButton, MediumText } from '../../../components/SNRDefaults'
import MapView, { Marker } from 'react-native-maps'
import { connect } from 'react-redux'
import { uploadToFB } from '../../../ReduxStore/Actions/SignIn'

class SignSubmit extends Component {

    onButtonNext = () => {
        this.props.sendToFB(this.props.accountInfo)
    }

    componentDidUpdate() {
        console.log("Submit Update", this.props.fetch)
        this.props.fetch === true ? this.props.navigation.navigate('Login') : this.props.fetch === false
            ? alert("Network Connection Error Please Submit Again") : null
    }
    render() {
        return (
            <DefaultBG>
                <ScrollView contentContainerStyle={{ alignItems: "center", paddingVertical: 50 }} showsVerticalScrollIndicator={false}>
                    <View style={{ alignItems: "center", flex: 1, justifyContent: 'center', width: '100%' }}>
                        {/* OutPuts User Inputs */}
                        <HeadText> Sign Up: Submit</HeadText>

                        {/* TEXT VIEW */}
                        <View style={{ flexDirection: 'column' }}>

                            <MediumText>Your userName:</MediumText>
                            <MediumText> {this.props.accountInfo.firstName}.{this.props.accountInfo.lastName}</MediumText>
                            <MediumText>Email:</MediumText>
                            <MediumText>{this.props.accountInfo.email}</MediumText>
                            <MediumText>Password:</MediumText>
                            <MediumText>{this.props.accountInfo.password}</MediumText>


                        </View>
                        <MediumText>Your Picture</MediumText>
                        {/* IMAGE VIEW */}
                        <View style={{ width: '100%', height: 200, alignItems: "center" }}>
                            <Image resizeMode='stretch' style={styles.insertedImage} source={this.props.accountInfo.picture} />
                        </View>
                        <MediumText>Your Location</MediumText>
                        {/* MAP VIEW */}
                        <View style={{ width: '100%', height: 200 }}>
                            <MapView
                                style={{ width: '100%', height: '100%' }}
                                initialRegion={this.props.accountInfo.location}>
                                {/* <Marker coordinate={this.props.location} pinColor="#f024b0" /> */}
                            </MapView>
                        </View>


                        <View style={{ width: '100%', paddingTop: 20 }}>
                            {!this.props.loading === true ?
                                (
                                    <HomeButton textTitle={'Submit'} iconName='md-done-all' inverted={true} onPress={this.onButtonNext} />
                                )
                                :
                                (
                                    <ActivityIndicator size={40} color='white' />
                                )}
                        </View>

                        <HeadText> Happy Day !</HeadText>
                    </View>
                </ScrollView>
            </DefaultBG>

        )
    }
}
const mapStateToProps = state => {
    return {
        accountInfo: state.SignIn.accountInfo,
        loading: state.Loading.loading,
        fetch: state.Authenticate.fetch
    }
}

const mapDispatchToProps = dispatch => {
    return {
        sendToFB: acc => dispatch(uploadToFB(acc))
    }
}

const styles = StyleSheet.create({
    insertedImage: {
        width: '100%',
        height: 200,
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(SignSubmit);