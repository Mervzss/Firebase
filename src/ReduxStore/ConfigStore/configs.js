import {combineReducers, createStore  } from 'redux'
// import React from 'react-native'

import SignInReducer from '../Reducers/SignInReducer'

const ReducerCombination = combineReducers({
    SignIn: SignInReducer
})

export default configs = () =>{
   return createStore(ReducerCombination)
}

