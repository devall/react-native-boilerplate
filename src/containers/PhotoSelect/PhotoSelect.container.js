import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useDispatch } from 'react-redux';

import appStyles from '../../theme/appStyles';
import { PhotoList, Button } from '../../components';
import { photos } from '../../store/actions';

const PhotoSelectContainer = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(photos.all.fetchPhotos());
  }, []);

  const handleContinue = () => {
    navigation.navigate('PhotoFilter');
  };

  return (
    <View style={[appStyles.flex]}>
      <PhotoList />
      <Button onPress={handleContinue}>
        <Text style={styles.buttonLabel}>Продолжить</Text>
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonLabel: {
    color: 'white',
  },
});

export default PhotoSelectContainer;
