import { GET_NEWS, GET_THE_NEWS, LOADING_START, CLEAR_THE_NEWS } from './/types';
import axios from 'axios';

export const getNews = () => async dispatch => {
  try {
    dispatch({ type: LOADING_START });

    const { data } = await axios.get('/api/haberler');

    dispatch({ type: GET_NEWS, payload: data });
  } catch (e) {
    console.log(e);
  }
};

export const getTheNews = id => async dispatch => {
  try {
    dispatch({ type: LOADING_START });
    const { data } = await axios.get(`/api/haberler/${id}`);
    dispatch({ type: GET_THE_NEWS, payload: data });
  } catch (e) {
    console.log(e);
  }
};
export const clearNews = () => async dispatch => {
  try {
    dispatch({ type: CLEAR_THE_NEWS });
  } catch (e) {
    console.log(e);
  }
};
