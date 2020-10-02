import { GET_NEWS, GET_THE_NEWS, LOADING_START, CLEAR_THE_NEWS } from '../actions/types';

const initialState = {
  news: [],
  thenew: null,
  loading: true
};

export default function (state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case GET_NEWS:
      return { ...state, loading: false, news: payload };
    case GET_THE_NEWS:
      return { ...state, loading: false, thenew: payload };
    case LOADING_START:
      return { ...state, loading: true };
    case CLEAR_THE_NEWS:
      return { ...state, loading: true, thenew: null };

    default:
      return state;
  }
}
