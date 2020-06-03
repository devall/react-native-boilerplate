import React from 'react';

import styled from 'styled-components/native';

import SelectedPreviewListItem from './SelectedPreviewListItem';
import SelectedPreviewPair from './SelectedPreviewPair';

const Container = styled.View`
  height: 60px;
  background-color: rgba(0, 0, 0, 0.1);
`;

const ScrollContainer = styled.ScrollView.attrs(() => ({
  contentContainerStyle: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
}))``;

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
    <Container>
      <ScrollContainer horizontal>{items.map(renderPairs)}</ScrollContainer>
    </Container>
  );
};

export default SelectedPreviewList;
