import React from 'react';
import { Dimensions } from 'react-native';
import {
  State,
  TapGestureHandler,
  TapGestureHandlerStateChangeEvent,
} from 'react-native-gesture-handler';

import styled from 'styled-components/native';

const { height } = Dimensions.get('screen');

const Container = styled.View`
  margin-top: 2px;
`;

const Image = styled.Image`
  width: 100%;
  height: ${height / 1.5};
`;

interface Props {
  item: {
    image: {
      uri: string;
    };
  };
  onTap: () => void;
}

const PhotoCard: React.FC<Props> = ({ item, onTap }) => {
  const { uri } = item.image;

  const handleTap = ({ nativeEvent }: TapGestureHandlerStateChangeEvent) => {
    if (nativeEvent.state === State.ACTIVE) {
      onTap();
    }
  };

  return (
    <TapGestureHandler onHandlerStateChange={handleTap}>
      <Container>
        <Image source={{ uri }} />
      </Container>
    </TapGestureHandler>
  );
};

export default PhotoCard;
