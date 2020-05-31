import React from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import SelectedPreviewListItem from './SelectedPreviewListItem';

const SelectedPreviewList = ({ items }) => {
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer} horizontal>
        {items.map((item) => (
          <SelectedPreviewListItem key={item.node.timestamp} item={item} />
        ))}
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
