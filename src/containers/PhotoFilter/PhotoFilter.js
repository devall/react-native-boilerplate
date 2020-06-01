import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';

import { selectFiltered } from '../../store/selectors/photos';
import { SelectedPreviewList, PhotoCard } from '../../components';
import { photos as photoActions } from '../../store/actions';

const PhotoFilter = () => {
  const [selectedIndex, setSelectedIndex] = React.useState(0);
  const filteredPhotos = useSelector(selectFiltered);
  const [currentPair] = filteredPhotos;
  const dispatch = useDispatch();

  const handleLike = () => {
    if (currentPair.length > 1) {
      const id = currentPair[selectedIndex ? 0 : 1].timestamp;
      dispatch(photoActions.all.removeFromFiltered(id));
    }
  };

  const handleDislike = () => {
    if (currentPair.length > 1) {
      const id = currentPair[selectedIndex].timestamp;
      dispatch(photoActions.all.removeFromFiltered(id));
    }
  };

  const handleTap = () => {
    const index = (selectedIndex + 1) % currentPair.length;
    setSelectedIndex(index);
  };

  return (
    <View style={styles.container}>
      <SelectedPreviewList
        activeIndex={filteredPhotos.indexOf(currentPair)}
        items={filteredPhotos}
      />
      <PhotoCard
        item={currentPair[selectedIndex]}
        onTap={handleTap}
        style={styles.card}
      />
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
