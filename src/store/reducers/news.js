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
      return {};
    case GET_THE_NEWS:
      return {};
    case LOADING_START:
      return {};
    case CLEAR_THE_NEWS:
      return {};

    default:
      return state;
  }
}
