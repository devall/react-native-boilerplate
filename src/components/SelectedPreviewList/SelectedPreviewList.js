import React from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import SelectedPreviewListItem from './SelectedPreviewListItem';

const SelectedPreviewList = ({ items, activeIndex }) => {
  const renderPairs = (pair, index) => {
    if (pair.length > 1) {
      return renderPair(pair, index);
    }
    return renderItem(pair[0]);
  };

  const renderItem = item => {
    return (
      <SelectedPreviewListItem
        highlighted={items.length < 2}
        key={item.timestamp}
        item={item}
      />
    );
  };

  const renderPair = (pair, index) => {
    return (
      <View key={index} style={{ paddingHorizontal: 5, flexDirection: 'row' }}>
        {pair.map(item => (
          <SelectedPreviewListItem
            highlighted={activeIndex === index}
            key={item.timestamp}
            item={item}
          />
        ))}
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer} horizontal>
        {items.map(renderPairs)}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgba(0,0,0,0.1)',
    height: 60,
  },
  scrollContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default SelectedPreviewList;
