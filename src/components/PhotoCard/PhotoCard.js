import React from 'react';
import { View, Text, Image, Dimensions } from 'react-native';
import { TapGestureHandler, State } from 'react-native-gesture-handler';

const { width, height } = Dimensions.get('screen');

const PhotoCard = ({ item, onTap, ...props }) => {
  const { uri } = item.image;

  const handleTap = ({ nativeEvent }) => {
    if (nativeEvent.state === State.ACTIVE) {
      onTap();
    }
  };

  return (
    <TapGestureHandler onHandlerStateChange={handleTap}>
      <View style={[props.style]}>
        <Image
          source={{ uri }}
          style={{ width: '100%', height: height / 1.5 }}
        />
      </View>
    </TapGestureHandler>
  );
};

export default PhotoCard;
