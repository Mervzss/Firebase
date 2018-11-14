import {ACCOUNT_READ} from './ActionTypes'

export const readAccount = (key) =>{
    return{
        type:ACCOUNT_READ,
        account:key
    }
}

export const getAccountData = (key) =>{
    return dispatch =>{
        fetch("https://snrfirebase.firebaseio.com/accountsInfo.json", {
                    method: 'GET',
                    body: JSON.stringify(key)
                }).catch(err => {
                    dispatch(finishLoad())
                    dispatch(fetchFail())
                    return console.log(err)
                })
                .then(receive => receive.json())
                .then(jsValue => 
                    {
                        console
                        dispatch(fetchSuccess())
                        dispatch(finishLoad())
                       return console.log(jsValue)
                    })
    }
}