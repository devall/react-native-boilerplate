import React from 'react';
import { FlatList } from 'react-native';
import PhotoListItem from './PhotoListItem';
import { useSelector, useDispatch } from 'react-redux';
import { photos as photoActions } from '../../store/actions';

const PhotoList = () => {
  const dispatch = useDispatch();
  const photos = useSelector((state) => state.photos.all.byId);
  const selectedPhotos = useSelector((state) => state.photos.all.selectedIds);

  const renderItem = ({ item }) => {
    return (
      <PhotoListItem
        selected={selectedPhotos.includes(item.node.timestamp)}
        onSelect={handleSelect}
        photo={item}
      />
    );
  };

  const handleSelect = (id) => {
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
      data={photos}
      renderItem={renderItem}
      keyExtractor={(item) => item.node.timestamp}
      numColumns={3}
    />
  );
};

export default PhotoList;
