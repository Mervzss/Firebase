import {LOAD_START, LOAD_FINISH} from '../Actions/ActionTypes'

const initialState ={
    loading : false
}

export default reducer = (state = initialState, action) =>{
    console.log("PUMASOK")
    switch(action.type){
        case LOAD_START:
        console.log("Loading start")
        return{
            ...state,
            loading: true
        }
        case LOAD_FINISH:
        console.log("Loading end")
        return{
            ...state,
            loading: false
        }
        default:
        return state;
    }
}