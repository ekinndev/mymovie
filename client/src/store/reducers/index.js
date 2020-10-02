import { combineReducers } from 'redux';
import news from './news';
import film from './film';

export default combineReducers({
  news,
  film
});
