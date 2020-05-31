import reducer from '../../../utils/reducer';

// import {types} from './actions.js';

const initState = {
  byId: [],
};

export default reducer(initState, {
  ['INIT']: (state) => {
    return {
      ...state,
      byId: [1],
    };
  },
});
