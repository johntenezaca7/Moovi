import { FETCH_NOW_PLAYING  } from '../actions/types'


export default function(state = [], action ) {
    
    switch(action.type) {
        case FETCH_NOW_PLAYING:
            return action.payload.data;

        default:    
            return state   
    } 
}