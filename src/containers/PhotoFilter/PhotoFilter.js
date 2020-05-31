import React from 'react';
import { View, Text } from 'react-native';
import { useSelector } from 'react-redux';
import { getSelectedPhotos } from '../../store/selectors/photos';

const PhotoFilter = () => {
  const selectedPhotos = useSelector(getSelectedPhotos);

  console.log(selectedPhotos.length, 'selected SELECTOR ???');
  return (
    <View>
      <Text>123</Text>
    </View>
  );
};

export default PhotoFilter;
