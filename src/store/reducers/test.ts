import reducer from '../../utils/reducer';

// import {types} from './actions.js';

const initState = {
  data: [],
};

export default reducer(initState, {
  INIT: (state) => ({
    ...state,
    data: [1],
  }),
});
