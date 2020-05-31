import React from 'react';
import { View, Text, Image, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('screen');

const PhotoCard = ({ item, ...props }) => {
  const { uri } = item.node.image;

  return (
    <View style={[props.style]}>
      <Image source={{ uri }} style={{ width: '100%', height: height / 1.5 }} />
    </View>
  );
};

export default PhotoCard;
