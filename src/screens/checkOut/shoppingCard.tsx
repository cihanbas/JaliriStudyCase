import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {appPadding, colors, normalize} from 'utils/constants';
import {H2TextStyle, pTextStyle} from 'utils/typography';

export function ShoppingCard() {
  return (
    <View style={styles.container}>
      <View style={styles.stepContainer}>
        <View style={styles.titleWrapper}>
          <View style={styles.circle}>
            <Text style={styles.stepIndex}>1</Text>
          </View>
          <Text style={styles.title}>Shipping Address</Text>
        </View>
        <Text style={pTextStyle}>Karput mahallesi şişli istanbul.</Text>
      </View>
      <View style={styles.divider} />
      <View style={styles.stepContainer}>
        <View style={styles.titleWrapper}>
          <View style={[styles.circle, styles.activeCircle]}>
            <Text style={styles.stepIndexActive}>2</Text>
          </View>
          <Text style={styles.titleActive}>Checkout</Text>
        </View>
        <Text style={pTextStyle}>
          Credit/Debit Card, pay on delivery or Paypal
        </Text>
      </View>
    </View>
  );
}
const cirleSize = 25;
const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.backgroundGray,
    flexDirection: 'row',
    padding: appPadding,
    justifyContent: 'space-between',
  },
  titleWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: normalize(5),
  },
  title: {
    ...H2TextStyle,
    color: colors.gray,
    paddingLeft: normalize(5),
  },
  titleActive: {
    ...H2TextStyle,
    color: colors.black,
    paddingLeft: normalize(5),
  },
  stepIndex: {
    ...H2TextStyle,
    color: colors.gray,
  },
  stepIndexActive: {
    ...H2TextStyle,
    color: colors.white,
  },
  circle: {
    borderWidth: 1,
    borderColor: colors.gray,
    height: cirleSize,
    width: cirleSize,
    borderRadius: cirleSize,
    justifyContent: 'center',
    alignItems: 'center',
  },
  activeCircle: {
    backgroundColor: colors.black,
  },
  stepContainer: {
    flex: 1,
  },
  divider: {
    width: 1,
    backgroundColor: colors.gray,
    marginHorizontal: appPadding,
  },
});
