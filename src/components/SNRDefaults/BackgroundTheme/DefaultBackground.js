import React from 'react'
import {View,StyleSheet} from 'react-native'

export const DefaultBG = props => {
    let isInverted = false;
    isInverted = props.inverted
    return(
        <View style={ isInverted ? invertedstyles.parentcontainer : styles.parentcontainer}>
                <View style={ isInverted ? invertedstyles.secondContainer : styles.secondContainer}>
                    <View style={ isInverted ? invertedstyles.childContainer : styles.childContainer}>
                        {props.children}
                    </View>
                </View>
            </View>
    )
}

const styles = StyleSheet.create({
    parentcontainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FA58AC',
      },
      secondContainer: {
          flex: .95,
          width: '90%',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#F2FBEF',
          borderRadius: 20
      },
      childContainer: {
          flex: .97,
          width: '93%',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#FA58AC',
          borderRadius: 18
      },
});

const invertedstyles = StyleSheet.create({
    parentcontainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
      },
      secondContainer: {
          flex: .95,
          width: '90%',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#FA58AC',
          borderRadius: 20
      },
      childContainer: {
          flex: .97,
          width: '93%',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: 'white',
          borderRadius: 18
      },
});

