import React from 'react'
import { View, StyleSheet, Image } from 'react-native'

import MapView, { Marker } from 'react-native-maps'
import { SignUpButtons } from '../Button/SignUpButtons'

export class MapViewer extends React.Component {

    state = {
        location: {
            latitude: 14.6103728,
            longitude: 120.9789017,
            latitudeDelta: 0.012,
            longitudeDelta: 0.0400,
            // coordinate: new AnimatedRegion({
            //     latitude: 14.6103728,
            // longitude: 120.9789017,
            // })

        }

    }

    ongetMyLocation = () => {

        navigator.geolocation.getCurrentPosition(cur => {
            console.log(cur)
            const myPos = {
                nativeEvent: {
                    coordinate: {
                        latitude: cur.coords.latitude,
                        longitude: cur.coords.longitude
                    },
                }
            }
            this.onPressLocation(myPos)
        },
            err => {
                console.log(err)
            })

    }

    onPressLocation = (val) => {
        let myLatLng = val.nativeEvent.coordinate
        this.animMap.animateMarkerToCoordinate({
            ...this.state.location,
            latitude: myLatLng.latitude,
            longitude: myLatLng.longitude
        }
        )
        this.setState(prevState => {
            return {
                ...prevState,
                location: {
                    ...prevState.location,
                    latitude: myLatLng.latitude,
                    longitude: myLatLng.longitude
                }
            }
        })
    }
    componentDidUpdate(){
        this.props.passLocation(this.state.location)
    }

    render() {
        return (
            <View style={{ width: '100%', alignItems: 'center', justifyContent: 'center' }}>

                <View style={styles.imageContainer}>
                    <MapView
                        // remove if not using Google Maps
                        style={{ width: '90%', height: '95%' }}
                        initialRegion={this.state.location}
                        region={this.state.location}
                        onPress={e => this.onPressLocation(e)}

                    >
                        <Marker coordinate={this.state.location} pinColor="#f024b0" ref={ref => this.animMap = ref} />
                    </MapView>

                </View>
                <SignUpButtons
                    middleButton={true} middleTitle={'Locate Me'} onMidPress={() => this.ongetMyLocation()}
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
        width: 150,
        height: 150
    }
});