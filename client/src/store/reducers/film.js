import { GET_FILM, GET_FILMS, LOADING_START, CLEAR_FILM, GET_CINEMA, ADD_FAV, REMOVE_FAV } from '../actions/types';

const initialState = {
  films: [],
  film: null,
  loading: true,
  cinema: [],
  favs: localStorage.getItem('favs') ? JSON.parse(localStorage.getItem('favs')) : []
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
    case ADD_FAV:
      const newState = { ...state, favs: [...state.favs, payload] };
      localStorage.setItem('favs', JSON.stringify(newState.favs));
      return { ...newState };
    case REMOVE_FAV:
      const newRemoveState = { ...state, favs: [...state.favs.filter(id => id !== payload)] };
      localStorage.setItem('favs', JSON.stringify(newRemoveState.favs));
      return { ...newRemoveState };
    default:
      return state;
  }
}
