import React from 'react';
import { Dimensions, TouchableOpacity } from 'react-native';

import PropTypes from 'prop-types';
import styled from 'styled-components/native';

const { width } = Dimensions.get('screen');

const Container = styled.View<{ selected: boolean }>`
  ${p => (p.selected ? 'opacity: 0.3;' : '')}
`;

const Image = styled.Image`
  width: ${width / 3}px;
  height: 140px;
`;

const PhotoListItem = ({ photo, onSelect, selected, id }) => {
  const { uri } = photo.image;

  return (
    <Container selected={selected}>
      <TouchableOpacity onPress={() => onSelect(id)}>
        <Image source={{ uri }} />
      </TouchableOpacity>
    </Container>
  );
};

PhotoListItem.defaultProps = {
  photo: {},
};

PhotoListItem.propTypes = {
  photo: PropTypes.object,
  onSelect: PropTypes.func.isRequired,
  selected: PropTypes.bool.isRequired,
};

export default PhotoListItem;
