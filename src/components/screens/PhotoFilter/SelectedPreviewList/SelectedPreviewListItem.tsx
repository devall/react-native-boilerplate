import React from 'react';

import styled from 'styled-components/native';

const Container = styled.View<{ highlighted: boolean }>`
  width: 60px;
  height: 60px;

  ${p => (!p.highlighted ? 'opacity: 0.2;' : '')}
`;

const Image = styled.Image`
  width: 60px;
  height: 60px;
`;

const SelectedPreviewListItem = ({ item, highlighted }) => {
  const { uri } = item.image;

  return (
    <Container highlighted={highlighted}>
      <Image source={{ uri }} />
    </Container>
  );
};

export default SelectedPreviewListItem;
