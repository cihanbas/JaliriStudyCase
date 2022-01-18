import {Icon, IconsEnum} from 'assets/icons';
import {Button, Header} from 'components';
import {ListItem} from 'components/listItem';
import React, {useEffect, useState} from 'react';
import {
  Platform,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {initialFees, paymentType} from './constants';
import {FeeItem} from './feeItem';
import {PaymentTypeEnum} from './models';
import {getFees} from 'services';
import {FeeListModel} from 'services/model';
import {appPadding, normalize} from 'utils/constants';
import {titleTextStyle} from 'utils/typography';
import {ShoppingCard} from './shoppingCard';
import {CreaditCard} from 'screens/checkOut/creditCard';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
const scrollHeight = Platform.select({
  ios: 15,
  android: -64,
});
const CheckOut = () => {
  const [fees, setFees] = useState<FeeListModel>(initialFees);
  const [checkItem, setCheckItem] = useState<PaymentTypeEnum>();
  useEffect(() => {
    getFees().then(result => {
      setFees(result);
    });
  }, []);

  return (
    <SafeAreaView style={styles.root}>
      <Header />
      <KeyboardAwareScrollView
        scrollEnabled={true}
        extraScrollHeight={scrollHeight}
        keyboardShouldPersistTaps="handled"
        accessible={false}
        enableOnAndroid={true}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{flexGrow: 1}}
        keyboardOpeningTime={Number.MAX_SAFE_INTEGER}>
        <ShoppingCard />
        <ListItem
          isCheck={checkItem === PaymentTypeEnum.creditCard}
          item={paymentType[0]}
          bottomDivider={false}
          onChange={(val: PaymentTypeEnum) => setCheckItem(val)}
          rightIcon={
            <View style={styles.icon}>
              <View style={styles.visaContainer}>
                <Icon name={IconsEnum.visa} size={32} />
              </View>
              <Icon name={paymentType[0].iconName} size={32} />
            </View>
          }
        />
        <CreaditCard />
        <ListItem
          isCheck={checkItem === PaymentTypeEnum.cashOnDelivery}
          item={paymentType[1]}
          onChange={(val: PaymentTypeEnum) => setCheckItem(val)}
          rightIcon={
            <View style={styles.icon}>
              <Icon name={paymentType[1].iconName} size={32} />
            </View>
          }
        />
        <ListItem
          isCheck={checkItem === PaymentTypeEnum.paypal}
          item={paymentType[2]}
          onChange={(val: PaymentTypeEnum) => setCheckItem(val)}
          rightIcon={
            <View style={styles.icon}>
              <Icon name={paymentType[2].iconName} size={55} />
            </View>
          }
        />
      </KeyboardAwareScrollView>
      <View style={styles.shippingDivider}>
        {fees && fees?.fees.map(item => <FeeItem item={item} key={item.key} />)}
      </View>
      <View style={styles.rowBetween}>
        <Text style={titleTextStyle}>Total</Text>
        <Text style={titleTextStyle}>{fees?.total}</Text>
      </View>
      <Button />
    </SafeAreaView>
  );
};
export default CheckOut;
const styles = StyleSheet.create({
  root: {
    flex: 1,
    width: '100%',
  },
  container: {
    padding: appPadding,
  },

  shippingDivider: {
    paddingVertical: normalize(4),
    marginVertical: normalize(6),
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderTopWidth: StyleSheet.hairlineWidth,
  },
  rowBetween: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: normalize(6),
    paddingHorizontal: appPadding,
  },
  icon: {
    width: 60,
    alignItems: 'flex-end',
  },
  visaContainer: {
    bottom: -12,
  },
});
