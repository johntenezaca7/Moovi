import axios from 'axios';
import { 
    FETCH_NOW_PLAYING, 
    FETCH_GENRES,
    FIND_MOVIES_BY_SELECTED_GENRE_S
       } from './types';

import { NOW_PLAYING_URL,
         GENRES_URL,
         FIND_MOVIES_BY_GENRE
         } from './urls';
 

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

export const selected_genre = (arrayOfGenres) => {
    const response = axios.get(FIND_MOVIES_BY_GENRE+arrayOfGenres);
    return {
        type: FIND_MOVIES_BY_SELECTED_GENRE_S,
        payload: response
    }
}