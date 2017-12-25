import { FIND_MOVIES_BY_SELECTED_GENRE_S} from '../actions/types';

export default function(state = [], action ){

    switch(action.type){
        case FIND_MOVIES_BY_SELECTED_GENRE_S:
            return action.payload;
        default:
            return state;
    }
}