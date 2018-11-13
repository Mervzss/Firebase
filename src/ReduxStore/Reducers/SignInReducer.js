import {ADD_INITIAL,VERIFY_PASS,ADD_PICTURE,ADD_LOCATION} from '../Actions/ActionTypes'

initialState = {
    firstName:null,
    lastName: null,
    email : null,
    password:null,
    picture:null,
    location:null,
    passValid: false,
}
export default reducer = (state = initialState, action) =>{
    switch(action.type){
        case ADD_INITIAL:
        console.log(action)
        return{
            ...state,
            firstName: action.firstName,
            lastName: action.lastName,
            email: action.email,
            password: action.password
        }
        case VERIFY_PASS:
        console.log(action.password)
        return{
            ...state,
          passValid: state.password === action.password
        }
        case ADD_PICTURE:
        console.log(action.picture)
        return{
            ...state,
            picture:action.picture
        }
        case ADD_LOCATION:
        console.log(action.location)
        return{
            ...state,
            location:action.location
        }
        default:
        return state;
    }
}