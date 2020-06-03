import React, { useEffect } from 'react';
import { View } from 'react-native';
import { useDispatch } from 'react-redux';

import { useNavigation } from '@react-navigation/native';
import styled from 'styled-components/native';

import { Button } from '@components/common';
import { PhotoList } from '@components/screens/PhotoSelect';
import { photos } from '@store/actions';
import appStyles from '@theme/appStyles';

const ButtonText = styled.Text`
  color: white;
`;

const PhotoSelect = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(photos.all.fetchPhotos());
  }, [dispatch]);

  const handleContinue = () => {
    navigation.navigate('PhotoFilter');
  };

  return (
    <View style={[appStyles.flex]}>
      <PhotoList />
      <Button onPress={handleContinue}>
        <ButtonText>Продолжить</ButtonText>
      </Button>
    </View>
  );
};

export default PhotoSelect;
