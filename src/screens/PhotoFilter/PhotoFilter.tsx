import React from 'react';
import { Text } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import styled from 'styled-components/native';

import {
  PhotoCard,
  SelectedPreviewList,
} from '@components/screens/PhotoFilter';
import { photos as photoActions } from '@store/actions';
import {
  getCurrentPair,
  selectCurrentIndex,
  selectFiltered,
} from '@store/selectors/photos';

const Container = styled.View`
  flex: 1;
`;

const Footer = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

const Button = styled.TouchableOpacity`
  flex: 1;
  justify-content: center;
  align-items: center;
  height: 50px;
  border-width: 1;
`;

const PhotoFilter = () => {
  const selectedIndex = useSelector(selectCurrentIndex);
  const filteredPhotos = useSelector(selectFiltered);
  const currentPair = useSelector(getCurrentPair);
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
    dispatch(photoActions.all.setSelectedIndex(index));
  };

  return (
    <Container>
      <SelectedPreviewList
        items={filteredPhotos}
        activeIndex={filteredPhotos.indexOf(currentPair)}
      />
      <PhotoCard item={currentPair[selectedIndex]} onTap={handleTap} />
      <Footer>
        <Button onPress={handleDislike}>
          <Text>DISLIKE</Text>
        </Button>
        <Button onPress={handleLike}>
          <Text>LIKE</Text>
        </Button>
      </Footer>
    </Container>
  );
};

export default PhotoFilter;
