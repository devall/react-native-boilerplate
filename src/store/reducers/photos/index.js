import { combineReducers } from 'redux';
import all from './all';
import filtered from './filtered';

export default combineReducers({
  all,
  filtered,
});
