import React from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';
import {PaymentTypeEnum, PaymentTypeModel} from 'screens/checkOut/models';
import {appPadding, colors, normalize} from 'utils/constants';
import {subTextStyle, titleTextStyle} from 'utils/typography';
type ListITemModel = {
  item: PaymentTypeModel;
  onChange: (value: PaymentTypeEnum) => void;
  isCheck?: boolean;
  rightIcon: React.ReactElement;
  bottomDivider?: boolean;
};
const ListItem = ({
  isCheck = false,
  onChange,
  item,
  rightIcon,
  bottomDivider = true,
}: ListITemModel) => {
  return (
    <Pressable
      style={[styles.container, bottomDivider && styles.bottomDivider]}
      onPress={() => onChange(item.type)}>
      <View style={styles.wrapper}>
        <View style={styles.content}>
          <View style={styles.row}>
            <View style={styles.circle}>
              {isCheck && <View style={styles.check} />}
            </View>
            <View>
              <Text style={titleTextStyle}>{item.title} </Text>
              <Text style={styles.subtitle}>{item.subtitle} </Text>
            </View>
          </View>
        </View>
        {rightIcon}
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {},
  bottomDivider: {
    borderBottomColor: colors.gray,
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  wrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',

    paddingVertical: normalize(12),
    paddingHorizontal: appPadding,
  },

  content: {
    overflow: 'hidden',
    flex: 1,
  },
  row: {
    flexDirection: 'row',
    paddingVertical: normalize(5),
  },
  icon: {
    padding: 5,
  },
  circle: {
    height: normalize(20),
    width: normalize(20),
    borderRadius: normalize(20),
    borderColor: 'black',
    borderWidth: 1,
    marginRight: normalize(5),
    justifyContent: 'center',
    alignItems: 'center',
  },
  check: {
    height: normalize(10),
    width: normalize(10),
    borderRadius: normalize(10),
    backgroundColor: colors.black,
  },
  subtitle: {
    ...subTextStyle,
    paddingVertical: normalize(5),
    flexShrink: 1,
  },
});
export {ListItem};
