import { combineReducers } from 'redux';
import NowPlaying from './reducers_nowPlaying';
import Genres from './genres_reducer';

const rootReducer = combineReducers({
    nowPlaying: NowPlaying,
    allGenres: Genres
})

export default rootReducer;