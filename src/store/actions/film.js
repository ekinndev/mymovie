import { GET_FILM, GET_FILMS, LOADING_START, CLEAR_FILM, GET_CINEMA } from './types';
import axios from 'axios';

export const getFilms = () => async dispatch => {
  try {
    dispatch({ type: LOADING_START });
    const API_URL = `${process.env.REACT_APP_MOVIE_API}?apikey=${process.env.REACT_APP_KEY}`;
    const res = await axios.get('/api');
    const promises = res.data.map(async id => {
      const queryUrl = `${API_URL}&i=${id}&plot=full`;
      const filmResponse = await axios.get(queryUrl);
      return filmResponse.data;
    });
    const films = await Promise.all(promises);
    dispatch({ type: GET_FILMS, payload: films });
  } catch (e) {
    console.log(e);
  }
};

export const getFilm = id => async dispatch => {
  try {
    dispatch({ type: LOADING_START });
    const API_URL = `${process.env.REACT_APP_MOVIE_API}?apikey=${process.env.REACT_APP_KEY}`;
    const queryUrl = `${API_URL}&i=${id}&plot=full`;
    const film = await axios.get(queryUrl);
    dispatch({ type: GET_FILM, payload: film.data });
  } catch (e) {
    console.log(e);
  }
};
export const clearFilm = () => async dispatch => {
  try {
    dispatch({ type: CLEAR_FILM });
  } catch (e) {
    console.log(e);
  }
};
export const getCinema = () => async dispatch => {
  try {
    dispatch({ type: LOADING_START });
    const { data } = await axios.get(`/api/salonlar/`);
    dispatch({ type: GET_CINEMA, payload: data });
  } catch (e) {
    console.log(e);
  }
};
