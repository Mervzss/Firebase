import {combineReducers, createStore, compose, applyMiddleware  } from 'redux'
import thunk from 'redux-thunk'
// import React from 'react-native'

import SignInReducer from '../Reducers/SignInReducer'
import LoadingReducer from '../Reducers/LoadingReducer'
import AuthenticateReducer from '../Reducers/AuthenticateReducer'

const ReducerCombination = combineReducers({
    SignIn: SignInReducer,
    Loading: LoadingReducer,
    Authenticate: AuthenticateReducer
})

let composeEnchancers = compose;

if(__DEV__){
    composeEnchancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE || compose;
}

export default configs = () =>{
   return createStore(ReducerCombination,composeEnchancers(applyMiddleware(thunk)))
}

