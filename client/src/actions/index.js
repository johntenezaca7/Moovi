import axios from 'axios';
import { FETCH_NOW_PLAYING, FETCH_GENRES } from './types';
import { NOW_PLAYING_URL, GENRES_URL } from './urls';
 

export const fetch_nowPlaying = () => {
    const response = axios.get(NOW_PLAYING_URL);
    return {
        type: FETCH_NOW_PLAYING,
        payload: response
    };
};

export const fetch_genres = () => {
    const response = axios.get(GENRES_URL);
    return {
        type: FETCH_GENRES,
        payload: response
    };
};