import {IconsEnum} from 'assets/icons';

export type FeeItemModel = {
  text: string;
  value: string;
  key: string;
};
export enum PaymentTypeEnum {
  creditCard = 'CreditCard',
  paypal = 'paypal',
  cashOnDelivery = 'cashOnDelivery',
}
export type PaymentTypeModel = {
  type: PaymentTypeEnum;
  title: string;
  iconName: IconsEnum;
  subtitle: string;
};

export type CreditCardModel = {
  cardNumber: string;
  cardHolderName: string;
  cardDate: string;
  cvc: string;
};
