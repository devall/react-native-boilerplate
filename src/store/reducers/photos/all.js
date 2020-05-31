import reducer from '../../../utils/reducer';
import { types } from '../../actions/photos/all';

const initState = {
  byId: [],
  allIds: [],
  selectedIds: [],
};

export default reducer(initState, {
  [types.FETCH_PHOTOS]: (state, action) => {
    const allIds = action.payload.map((photo) => photo.node.timestamp);

    return {
      ...state,
      allIds,
      byId: action.payload,
    };
  },
  [types.SELECT_PHOTO]: (state, action) => {
    const id = action.payload;
    const selectedIds = [...state.selectedIds, id];

    return {
      ...state,
      selectedIds,
    };
  },
  [types.DESELECT_PHOTO]: (state, action) => {
    const id = action.payload;
    const selectedIds = state.selectedIds.filter(
      (selectedId) => selectedId !== id,
    );

    return {
      ...state,
      selectedIds,
    };
  },
});
