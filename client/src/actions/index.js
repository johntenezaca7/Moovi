import axios from 'axios';
import { FETCH_NOW_PLAYING } from './types'
 
const API_KEY = 'dc8b8984622bb10d12c258287d2952d2';
const ROOT_URL = `https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY}&language=en-US&page=1`

export function fetch_nowPlaying() {
    const request = axios.get(ROOT_URL);
    
    return {
        type: FETCH_NOW_PLAYING,
        payload: request
    }
}