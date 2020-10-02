import { GET_FILM, GET_FILMS, LOADING_START, CLEAR_FILM,GET_CINEMA } from '../actions/types';

const initialState = {
  films: [],
  film: null,
  loading: true,
  cinema: []
};

export default function (state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case GET_FILMS:
      return { ...state, films: payload, loading: false };
    case GET_FILM:
      return { ...state, film: payload, loading: false };
    case LOADING_START:
      return { ...state, loading: true };
    case CLEAR_FILM:
      return { ...state, film: null };
    case GET_CINEMA:
      return { ...state, cinema: payload, loading: false };
    default:
      return state;
  }
}
