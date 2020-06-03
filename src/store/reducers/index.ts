import { combineReducers } from 'redux';

import photos from './photos';
import test from './test';

export default combineReducers({
  test,
  photos,
});
