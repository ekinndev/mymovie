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
      return {};
    case GET_FILM:
      return {};
    case LOADING_START:
      return {};
    case CLEAR_FILM:
      return {};

    default:
      return state;
  }
}
