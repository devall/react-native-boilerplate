import _ from 'lodash';

import { types } from '@store/actions/photos/all';
import reducer from '@utils/reducer';

const initState = {
  byId: [],
  allIds: [],
  selectedIds: [],
  filtered: [],
  selectedIndex: 0,
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
    const selectedPhotos = selectedIds.map(  => state.byId[id]);
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
    let filtered = state.filtered.map(pair =>
      pair.filter(item => item.timestamp !== id),
    );
    const shouldChunk =
      filtered.length > 1 && !filtered.some(pair => pair.length > 1);

    if (shouldChunk) {
      filtered = _.chunk(_.flatten(filtered), 2);
    }

    return {
      ...state,
      filtered,
    };
  },
  [types.SET_SELECTED_INDEX]: (state, action) => {
    console.log(111, state, action);

    return {
      ...state,
      selectedIndex: action.payload,
    };
  },
});
