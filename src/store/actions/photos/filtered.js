import CameraRoll from '@react-native-community/cameraroll';

export const types = {
  FETCH_PHOTOS: 'photos/all/FETCH',
};

export const fetchPhotos = () => async (dispatch) => {
  const options = {
    first: 20,
    assetType: 'Photos',
  };

  const { edges } = await CameraRoll.getPhotos(options);

  dispatch({ type: types.FETCH_PHOTOS, payload: edges });
};
