import React, { useEffect, useRef, useState } from 'react';
import { Transition, Transitioning } from 'react-native-reanimated';
import { useSelector } from 'react-redux';

import styled from 'styled-components/native';

import { selectCurrentIndex } from '@store/selectors/photos';

import SelectedPreviewListItem from './SelectedPreviewListItem';

const Container = styled(Transitioning.View)`
  flex-direction: row;
  padding: 0 5px;
`;

const transition = (
  <Transition.Change durationMs={200} interpolation="easeIn" />
);

const SelectedPreviewPair = ({ items, active }) => {
  const [pair, setPair] = useState(items);
  const selectedIndex = useSelector(selectCurrentIndex);
  const ref = useRef(null);

  useEffect(() => {
    if (active) {
      if (ref.current) {
        ref.current.animateNextTransition();
      }

      setPair(pair.slice().reverse());
    }
  }, [selectedIndex]);

  const [firstItem, secondItem] = pair;

  return (
    <Container ref={ref} transition={transition}>
      <SelectedPreviewListItem
        highlighted={active}
        key={firstItem.timestamp}
        item={firstItem}
      />
      <SelectedPreviewListItem
        highlighted={active}
        key={secondItem.timestamp}
        item={secondItem}
      />
    </Container>
  );
};

export default SelectedPreviewPair;
