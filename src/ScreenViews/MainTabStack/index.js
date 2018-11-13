import { createBottomTabNavigator, createDrawerNavigator } from 'react-navigation'

// Tab imports
import SendDataView from './SendDataView'
import ReceiveDataView from './ReceiveDataView'
import ProfileView from './ProfileView'

export const MainTabStack = createBottomTabNavigator(
    {
        Send: SendDataView,
        Receive: ReceiveDataView
    },
    {
        initialRouteName:'Send'
    }
    )

export default StackDrawer = createDrawerNavigator(
    {
        MainDrawer: MainTabStack,
        Profile: ProfileView
    },
    {
        navigationOptions:{
            gesturesEnabled:true,
        },
        paths:false,
        drawerBackgroundColor:'white',
        contentOptions:{
            activeBackgroundColor:'#FA58AC',
            activeTintColor:'white',
            inactiveBackgroundColor:'white',
            inactiveTintColor:'#FA58AC'
        },
    }
    )