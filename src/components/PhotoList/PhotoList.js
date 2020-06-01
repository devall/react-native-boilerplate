import React from 'react';
import { FlatList } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';

import PhotoListItem from './PhotoListItem';
import { photos as photoActions } from '../../store/actions';
import {
  selectSelectedPhotoIds,
  selectPhotos,
} from '../../store/selectors/photos';

const PhotoList = () => {
  const photos = useSelector(selectPhotos);
  const selectedPhotos = useSelector(selectSelectedPhotoIds);
  const dispatch = useDispatch();

  const renderItem = ({ item: key }) => {
    const photo = photos[key];

    return (
      <PhotoListItem
        selected={selectedPhotos.includes(key)}
        onSelect={handleSelect}
        photo={photo}
        id={key}
      />
    );
  };

  const handleSelect = id => {
    if (selectedPhotos.includes(id)) {
      dispatch(photoActions.all.deselectPhoto(id));
    } else {
      dispatch(photoActions.all.selectPhoto(id));
    }
  };

  return (
    <FlatList
      showsVerticalScrollIndicator
      scrollEnabled
      data={Object.keys(photos)}
      renderItem={renderItem}
      keyExtractor={item => item}
      numColumns={3}
    />
  );
};

export default PhotoList;
