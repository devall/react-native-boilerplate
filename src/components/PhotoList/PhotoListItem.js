import React from 'react';
import {
  View,
  StyleSheet,
  Image,
  Dimensions,
  TouchableOpacity,
} from 'react-native';

const { width } = Dimensions.get('screen');

const PhotoListItem = ({ photo, onSelect, selected }) => {
  const { uri } = photo.node.image;

  return (
    <View style={selected ? styles.active : null}>
      <TouchableOpacity
        onPress={() => onSelect(photo.node.timestamp)}
        style={styles.selectedContainer}>
        <Image style={styles.image} source={{ uri }} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    width: width / 3,
    height: 140,
  },
  container: {
    margin: 2,
  },
  active: {
    opacity: 0.3,
  },
});

export default PhotoListItem;
