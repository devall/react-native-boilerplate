import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import CameraRoll from '@react-native-community/cameraroll';

import appStyles from '../../theme/appStyles';
import { PhotoList, Button } from '../../components';
import { useNavigation } from '@react-navigation/native';

const options = {
  first: 20,
  assetType: 'Photos',
};

const PhotoSelectContainer = () => {
  const [photos, setPhotos] = React.useState([]);
  const navigation = useNavigation();

  React.useEffect(() => {
    fetchPhotos();
  }, []);

  const fetchPhotos = async () => {
    const { edges } = await CameraRoll.getPhotos(options);

    setPhotos(edges);
  };

  const handleContinue = () => {
    navigation.navigate('PhotoFilter');
  };

  return (
    <View style={[appStyles.flex]}>
      <PhotoList items={photos} />
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
