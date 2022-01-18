import React from 'react';
import {Pressable, StyleSheet, Text} from 'react-native';
import {appPadding, colors, normalize} from 'utils/constants';
import {buttonTextStyle} from 'utils/typography';

export function Button() {
  return (
    <Pressable disabled style={styles.container}>
      <Text style={buttonTextStyle}>Buy Now</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.disableButton,
    padding: normalize(10),
    borderRadius: normalize(8),
    margin: appPadding,
  },
});
