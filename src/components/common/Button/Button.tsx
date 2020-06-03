import React from 'react';
import { GestureResponderEvent } from 'react-native';

import styled from 'styled-components/native';

const Container = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100px;

  background-color: ${p => (p.disabled ? '#ccc' : 'green')};
`;

interface Props {
  disabled?: boolean;
  onPress: (event: GestureResponderEvent) => void;
  children: React.ReactNode;
}

const Button: React.FC<Props> = ({ children, disabled, onPress }: Props) => {
  return (
    <Container disabled={disabled} onPress={onPress}>
      {children}
    </Container>
  );
};

export default Button;
