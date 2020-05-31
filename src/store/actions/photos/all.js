import CameraRoll from '@react-native-community/cameraroll';

export const types = {
  FETCH_PHOTOS: 'photos/all/FETCH',
  SELECT_PHOTO: 'photos/all/SELECT_PHOTO',
  DESELECT_PHOTO: 'photos/all/DESELECT_PHOTO',
};

export const fetchPhotos = () => async (dispatch) => {
  const options = {
    first: 20,
    assetType: 'Photos',
  };

  const { edges } = await CameraRoll.getPhotos(options);

  dispatch({ type: types.FETCH_PHOTOS, payload: edges });
};

export const selectPhoto = (id) => (dispatch) => {
  dispatch({ type: types.SELECT_PHOTO, payload: id });
};

export const deselectPhoto = (id) => (dispatch) => {
  dispatch({ type: types.DESELECT_PHOTO, payload: id });
};
