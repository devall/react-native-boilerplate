import React from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';

import SelectedPreviewListItem from './SelectedPreviewListItem';
import SelectedPreviewPair from './SelectedPreviewPair';

const SelectedPreviewList = ({ items, activeIndex }) => {
  const renderPairs = (pair, index) => {
    if (pair.length > 1) {
      return (
        <SelectedPreviewPair items={pair} active={activeIndex === index} />
      );
    }
    return (
      <SelectedPreviewListItem
        highlighted={items.length < 2}
        key={pair[0].timestamp}
        item={pair[0]}
      />
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
