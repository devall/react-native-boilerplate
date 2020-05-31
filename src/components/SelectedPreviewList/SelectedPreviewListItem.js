import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const SelectedPreviewListItem = ({ item }) => {
  const { uri } = item.node.image;

  return (
    <View>
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
});

export default SelectedPreviewListItem;
