import { combineReducers } from 'redux';
import NowPlaying from './reducers_nowPlaying';
import Genres from './genres_reducer';
import SelectedMovie from './selectedGenreReducer';

const rootReducer = combineReducers({
    nowPlaying: NowPlaying,
    allGenres: Genres,
    selected: SelectedMovie
})

export default rootReducer;