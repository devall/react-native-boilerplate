import React from 'react';
import { FlatList } from 'react-native';
import PhotoListItem from './PhotoListItem';

const PhotoList = ({ items }) => {
  const [selectedPhotos, setSelectedPhotos] = React.useState([]);
  const [photos, setPhotos] = React.useState([]);

  React.useEffect(() => {
    if (items.length) {
      setPhotos(items);
    }
  }, [items]);

  const renderItem = ({ item }) => {
    return (
      <PhotoListItem
        selected={selectedPhotos.includes(item.node.timestamp)}
        onSelect={handleSelect}
        photo={item}
      />
    );
  };

  const handleSelect = (id) => {
    if (selectedPhotos.includes(id)) {
      const result = selectedPhotos.filter((item) => item !== id);
      setSelectedPhotos(result);
    } else {
      setSelectedPhotos([...selectedPhotos, id]);
    }
  };

  return (
    <FlatList
      showsVerticalScrollIndicator
      scrollEnabled
      data={photos}
      renderItem={renderItem}
      keyExtractor={(item) => item.node.timestamp}
      numColumns={3}
    />
  );
};

export default PhotoList;
