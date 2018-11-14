import {FETCH_FAIL, FETCH_SUCCESS} from './ActionTypes'

export const fetchFail = () =>{
    return{
        type:FETCH_FAIL
    }
}

export const fetchSuccess = () =>{
    return{
        type:FETCH_SUCCESS
    }
}