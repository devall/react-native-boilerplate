import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';

import { getSelectedPhotos } from '../../store/selectors/photos';
import { SelectedPreviewList, PhotoCard } from '../../components';
import { photos as photoActions } from '../../store/actions';

const PhotoFilter = () => {
  const [selectedIndex, setSelectedIndex] = React.useState(0);
  const selectedPhotos = useSelector(getSelectedPhotos);
  const dispatch = useDispatch();

  const handleLike = () => {
    //add custom logic
    if (selectedPhotos.length > 1) {
      const index = (selectedIndex + 1) % selectedPhotos.length;

      setSelectedIndex(index);
    }
  };

  const handleDislike = () => {
    if (selectedPhotos.length > 1) {
      const id = selectedPhotos[selectedIndex].node.timestamp;
      const index = selectedIndex ? selectedIndex - 1 : selectedIndex;

      setSelectedIndex(index);
      dispatch(photoActions.all.deselectPhoto(id));
    }
  };

  return (
    <View style={styles.container}>
      <SelectedPreviewList items={selectedPhotos} />
      <PhotoCard item={selectedPhotos[selectedIndex]} style={styles.card} />
      <View style={styles.footer}>
        <TouchableOpacity onPress={handleDislike} style={styles.likeButton}>
          <Text>DISLIKE</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleLike} style={styles.likeButton}>
          <Text>LIKE</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  card: {
    marginTop: 2,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  likeButton: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: 50,
    borderWidth: 1,
  },
});

export default PhotoFilter;
