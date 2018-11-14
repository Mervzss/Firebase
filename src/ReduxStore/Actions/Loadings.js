import {LOAD_START, LOAD_FINISH} from './ActionTypes'

export const startLoad = () =>{
    console.log("LOADSTART")
    return{
        type: LOAD_START
    }
}

export const finishLoad = () =>{
    return{
        type: LOAD_FINISH
    }
}