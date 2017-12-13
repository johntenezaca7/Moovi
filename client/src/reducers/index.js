import { combineReducers } from 'redux';
import NowPlaying from './reducers_nowPlaying';

const rootReducer = combineReducers({
    nowPlaying: NowPlaying
})

export default rootReducer;