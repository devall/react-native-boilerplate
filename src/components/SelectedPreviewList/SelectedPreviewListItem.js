import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const SelectedPreviewListItem = ({ item, highlighted }) => {
  const { uri } = item.image;

  return (
    <View style={!highlighted ? styles.opacity : null}>
      <Image style={styles.image} source={{ uri }} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  image: {
    width: 60,
    height: 60,
  },
  opacity: {
    opacity: 0.2,
  },
});

export default SelectedPreviewListItem;
