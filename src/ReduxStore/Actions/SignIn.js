import {ADD_INITIAL,VERIFY_PASS,ADD_PICTURE,ADD_LOCATION} from './ActionTypes'

export const addInitial = (fname, lname, email, pass) =>{
    return{
        type: ADD_INITIAL,
        firstName: fname,
        lastName: lname,
        email: email,
        password:pass
    }
}

export const verifyPass = (pass) =>{
    return{
        type: VERIFY_PASS,
        password: pass
    }
}

export const addPicture = (pic) =>{
    return{
        type: ADD_PICTURE,
        picture: pic
    }
}

export const addLocation = (loc) =>{
    return{
        type: ADD_LOCATION,
        location: loc
    }
}