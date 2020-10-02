import { GET_FILM, GET_FILMS, LOADING_START, CLEAR_FILM } from '../actions/types';

const initialState = {
  films: [],
  film: null,
  loading: true
};

export default function (state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case GET_FILMS:
      return { ...state, films: payload, loading: false };
    case GET_FILM:
      return { ...state, film: payload, loading: false };
    case LOADING_START:
      return {};
    case CLEAR_FILM:
      return { ...state, film: null };

    default:
      return state;
  }
}
