import React from 'react';
import {Pressable, StyleSheet, Text} from 'react-native';
import {appPadding, colors, normalize} from 'utils/constants';
import {buttonTextStyle} from 'utils/typography';

export function Button({disabled = false, onPress = () => {}}) {
  return (
    <Pressable
      disabled={disabled}
      onPress={onPress}
      style={[styles.container, disabled && styles.disabled]}>
      <Text style={buttonTextStyle}>Buy Now</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#007',
    padding: normalize(10),
    borderRadius: normalize(8),
    margin: appPadding,
  },
  disabled: {
    backgroundColor: colors.disableButton,
  },
});
