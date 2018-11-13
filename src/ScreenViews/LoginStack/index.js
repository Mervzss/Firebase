import { createStackNavigator } from "react-navigation";

//Screen Calls
import  InitialView  from "./InitialView";
import  LoginView  from "./LoginView";

//SignUp Stack Call
import { SignUpStack } from "./SignUpStack";

// Login Stack

// Combined Stack
export default SignLogStack = createStackNavigator(
    {
        AppInit: InitialView,
        Login: LoginView,
        SignUp: SignUpStack
    },
    {
        initialRouteName:'AppInit',
        navigationOptions:{
            header:null
        }
        
    }
)