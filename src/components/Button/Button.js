import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const Button = (props) => {
  return (
    <TouchableOpacity
      style={[
        styles.button,
        props.style,
        props.disabled ? styles.disabled : styles.enabled,
      ]}
      {...props}>
      {props.children}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    height: 100,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  disabled: {
    backgroundColor: '#ccc',
  },
  enabled: {
    backgroundColor: 'green',
  },
});

export default Button;
