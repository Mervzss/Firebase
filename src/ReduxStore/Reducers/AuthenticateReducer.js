import {FETCH_FAIL, FETCH_SUCCESS} from '../Actions/ActionTypes'

const initialState ={
    fetch : null
}

export default reducer = (state = initialState, action) =>{
    switch(action.type){
     
        case FETCH_SUCCESS:
        console.log("Fetch Start")
        return{
            ...state,
            fetch: true
        }
        case FETCH_FAIL:
        console.log("Fetch Fail")
        return{
            ...state,
            fetch: false
        }
        default:
        console.log('fetch to null')
        return{
            ...state,
            fetch:null
        }
    }
}