import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {FeeItemModel} from 'screens/checkOut/models';
import {appPadding, normalize} from 'utils/constants';
import {pTextStyle} from 'utils/typography';

const FeeItem = ({item}: {item: FeeItemModel}) => {
  return (
    <View style={styles.rowBetween}>
      <Text style={pTextStyle}>{item.text}</Text>
      <Text style={pTextStyle}>{item.value}</Text>
    </View>
  );
};
export {FeeItem};
const styles = StyleSheet.create({
  rowBetween: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: normalize(6),
    paddingHorizontal: appPadding,
  },
});
