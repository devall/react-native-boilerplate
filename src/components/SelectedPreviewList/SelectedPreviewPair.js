import React from 'react';
import { StyleSheet } from 'react-native';
import { Transitioning, Transition } from 'react-native-reanimated';

import { useSelector } from 'react-redux';
import SelectedPreviewListItem from '../SelectedPreviewList/SelectedPreviewListItem';
import { selectCurrentIndex } from '../../store/selectors/photos';

const transition = (
  <Transition.Change durationMs={200} interpolation="easeIn" />
);

const SelectedPreviewPair = ({ items, active }) => {
  const [pair, setPair] = React.useState(items);
  const selectedIndex = useSelector(selectCurrentIndex);
  const ref = React.useRef(null);

  React.useEffect(() => {
    if (active) {
      if (ref.current) {
        ref.current.animateNextTransition();
      }
      setPair(pair.slice().reverse());
    }
  }, [selectedIndex]);

  const [firstItem, secondItem] = pair;

  return (
    <Transitioning.View {...{ ref, transition }} style={styles.container}>
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
    </Transitioning.View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 5,
    flexDirection: 'row',
  },
});

export default SelectedPreviewPair;
