import { createStackNavigator } from "react-navigation";

// Screen Calls
import  SignInitial  from "./SignInitial";
import  SignLocation  from "./SignLocation";
import  SignPicture  from "./SignPicture";
import  SignVerify  from "./SignVerify";
import  SignSubmit from "./SignSubmit"

export const SignUpStack = createStackNavigator(
    {
        SignInit: SignInitial,
        Verify: SignVerify,
        Picture: SignPicture,
        Location: SignLocation,
        Submit: SignSubmit
    },
    {
        initialRouteName:'SignInit',
        navigationOptions:{
            header:null
        }
    }
)