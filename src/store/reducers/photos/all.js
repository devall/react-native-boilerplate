import reducer from '../../../utils/reducer';
import { types } from '../../actions/photos/all';
import _ from 'lodash';

const initState = {
  byId: [],
  allIds: [],
  selectedIds: [],
  filtered: [],
};

export default reducer(initState, {
  [types.FETCH_PHOTOS]: (state, action) => {
    // action.payload.pop();
    const photos = action.payload.reduce((result, photo) => {
      const key = photo.node.timestamp.toString().replace(/\./g, '');
      result[key] = photo.node;
      return result;
    }, {});
    const allIds = Object.keys(photos);

    return {
      ...state,
      allIds,
      byId: photos,
    };
  },
  [types.SELECT_PHOTO]: (state, action) => {
    const id = action.payload;
    const selectedIds = [...state.selectedIds, id];
    const selectedPhotos = selectedIds.map(id => state.byId[id]);
    const filtered = _.chunk(selectedPhotos, 2);

    return {
      ...state,
      selectedIds,
      filtered,
    };
  },
  [types.DESELECT_PHOTO]: (state, action) => {
    const id = action.payload;
    const selectedIds = state.selectedIds.filter(
      selectedId => selectedId !== id,
    );
    const selectedPhotos = selectedIds.map(id => state.byId[id]);
    const filtered = _.chunk(selectedPhotos, 2);

    return {
      ...state,
      selectedIds,
      filtered,
    };
  },
  [types.REMOVE_FILTERED]: (state, action) => {
    const id = action.payload;
    const flatten = _.flatten(state.filtered)
      .filter(item => item.timestamp !== id)
      .reverse();
    const filtered = _.chunk(flatten, 2);

    return {
      ...state,
      filtered,
    };
  },
});
