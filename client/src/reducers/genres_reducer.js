import { FETCH_GENRES } from '../actions/types'


export default function(state = [], action){

    switch(action.type){
        case FETCH_GENRES:
            return action.payload.data;
        default:
            return state;
    }
}