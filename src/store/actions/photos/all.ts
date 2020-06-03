import CameraRoll from '@react-native-community/cameraroll';

export const types = {
  FETCH_PHOTOS: 'photos/all/FETCH',
  SELECT_PHOTO: 'photos/all/SELECT_PHOTO',
  DESELECT_PHOTO: 'photos/all/DESELECT_PHOTO',
  GROUP_PHOTOS: 'photos/all/GROUP_PHOTOS',
  REMOVE_FILTERED: 'photos/all/REMOVE_FILTERED',
  SET_SELECTED_INDEX: 'photos/all/SET_SELECTED_INDEX',
};

export const fetchPhotos = () => async dispatch => {
  const options = {
    first: 20,
    assetType: 'Photos',
  };

  const { edges } = await CameraRoll.getPhotos(options);

  dispatch({ type: types.FETCH_PHOTOS, payload: edges });
};

export const selectPhoto = id => dispatch => {
  dispatch({ type: types.SELECT_PHOTO, payload: id });
};

export const deselectPhoto = id => dispatch => {
  dispatch({ type: types.DESELECT_PHOTO, payload: id });
};

export const removeFromFiltered = id => dispatch => {
  dispatch({ type: types.REMOVE_FILTERED, payload: id });
};

export const setSelectedIndex = index => dispatch => {
  dispatch({ type: types.SET_SELECTED_INDEX, payload: index });
};
