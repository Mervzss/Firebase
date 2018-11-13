
import React from 'react'
import { AppRegistry } from 'react-native';
import App from './App';
import { Provider } from 'react-redux'
import configs from './src/ReduxStore/ConfigStore/configs'
import { YellowBox } from 'react-native';
YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated', 'Module RCTImageLoader']);

const store = configs()

const MyRedux = () =>
    (
        <Provider store={store}>
            <App />
        </Provider>
    )


AppRegistry.registerComponent('SNRFireBase', () => MyRedux);
