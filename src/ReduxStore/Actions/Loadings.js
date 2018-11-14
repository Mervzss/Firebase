import {LOAD_START, LOAD_FINISH} from './ActionTypes'

export const startLoad = () =>{
    return{
        type: LOAD_START
    }
}

export const finishLoad = () =>{
    return{
        type: LOAD_FINISH
    }
}