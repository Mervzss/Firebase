import { ADD_INITIAL, VERIFY_PASS, ADD_PICTURE, ADD_LOCATION } from './ActionTypes'
//Loading imports
import {startLoad,finishLoad} from './Loadings'
import {fetchSuccess,fetchFail} from './Authenticate'

export const addInitial = (fname, lname, email, pass) => {
    return {
        type: ADD_INITIAL,
        firstName: fname,
        lastName: lname,
        email: email,
        password: pass
    }
}

export const verifyPass = (pass) => {
    return {
        type: VERIFY_PASS,
        password: pass
    }
}

export const addPicture = (pic) => {
    return {
        type: ADD_PICTURE,
        picture: pic
    }
}

export const addLocation = (loc) => {
    return {
        type: ADD_LOCATION,
        location: loc
    }
}

export const uploadToFB = (account) => {
    console.log("CHECK picturre.base64: ", account.picture)
    return dispatch => {
        console.log("stsart load ")
         dispatch(startLoad())
        fetch("https://us-central1-snrfirebase.cloudfunctions.net/uploadPicture", {
            method: 'POST',
            body: JSON.stringify({
                image: account.picture.base64
            })
        })
            .catch(err => {
                dispatch(finishLoad())
                console.log('Image Upload Error')
                return console.log(err)
                
            }) .then(res => res.json())
            .then(finRes => {
                let finalAccount = {
                    ...account,
                    picture: finRes.Imageurl
                };
               
                console.log(finalAccount)

                // POST REQUEST
                return fetch("https://snrfirebase.firebaseio.com/accountsInfo.json", {
                    method: 'POST',
                    body: JSON.stringify(finalAccount)
                }).catch(err => {
                    // dispatch(finishLoad())
                    dispatch(fetchFail())
                    return console.log(err)
                })
                .then(receive => receive.json())
                .then(jsValue => 
                    {
                        dispatch(fetchSuccess())
                        // dispatch(finishLoad())
                       return console.log(jsValue)
                    })
                    
            })


    }

}

