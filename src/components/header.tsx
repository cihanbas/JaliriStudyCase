import {Icon, IconsEnum} from 'assets/icons';
import React from 'react';
import {Pressable, StatusBar, StyleSheet, Text, View} from 'react-native';
import {appPadding, colors, isIOS, normalize} from 'utils/constants';

const HEADER_HEIGHT = isIOS ? 44 : 56;

export function Header({text = 'Checkout'}) {
  return (
    <View style={styles.header}>
      <StatusBar barStyle={'dark-content'} backgroundColor={'white'} />
      <Pressable style={styles.iconButton}>
        <Icon name={IconsEnum.back} size={26} />
      </Pressable>
      <Text style={styles.text}>{text}</Text>
      <View style={styles.iconButton} />
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    height: HEADER_HEIGHT,
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderColor: colors.gray,
  },
  iconButton: {
    justifyContent: 'center',
    width: HEADER_HEIGHT,
    height: HEADER_HEIGHT,
    paddingHorizontal: appPadding,
  },
  text: {
    fontWeight: '700',
    fontSize: normalize(20),
  },
});
