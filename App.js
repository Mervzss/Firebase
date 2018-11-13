import React, { Component } from 'react';

import { createSwitchNavigator } from "react-navigation";

import  SignLogStack  from "./src/ScreenViews/LoginStack/index";
import  MainTabStack  from './src/ScreenViews/MainTabStack/index'

export default class App extends Component{
  render() {
    return (
      <SwitchNav/>
    );
  }
}

const SwitchNav = createSwitchNavigator(
  {
    AppHome: SignLogStack,
    Main: MainTabStack
  },
  {
    initialRouteName:'AppHome'
  }
)


