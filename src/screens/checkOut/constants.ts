import {IconsEnum} from 'assets/icons';
import {PaymentTypeEnum, PaymentTypeModel} from 'screens/checkOut/models';
import * as Yup from 'yup';
const initialFees = {
  fees: [
    {
      text: 'Subtotal',
      value: '0 AED',
      key: 'subtotal',
    },
    {
      text: 'Coupon Code',
      value: '0 AED',
      key: 'couponCode',
    },
    {
      text: 'Shipping',
      value: '0 AED',
      key: 'shipping',
    },
  ],
  total: '0 AED',
};

const paymentType: PaymentTypeModel[] = [
  {
    type: PaymentTypeEnum.creditCard,
    title: 'Credit/Debit Card Payment',
    iconName: IconsEnum.masterCard,
    subtitle: '(We accept Visa or Mastercard)',
  },
  {
    type: PaymentTypeEnum.cashOnDelivery,
    title: 'Cash on Delivey',
    iconName: IconsEnum.coinCash,
    subtitle: 'The additional fees for this service is',
  },
  {
    type: PaymentTypeEnum.paypal,
    title: 'Paypal',
    iconName: IconsEnum.paypal,
    subtitle:
      'Paypal will charge you in USD Total may differ slighty due to currency conversion',
  },
];
const CreditCardValidationScheme = Yup.object().shape({
  cardNumber: Yup.string()
    .required('Card Number is a required field')
    .min(19, 'Card Number must be at least 16 number'),

  cardDate: Yup.string()
    .required('Card Date is a required field')
    .min(5, 'Card Date must be at least 4 number'),
  cvc: Yup.string()
    .required('CVC is a required field')
    .min(3, 'CVC must be at least 3 number'),
  cardHolderName: Yup.string()
    .required('Name Surname is a required field')
    .min(3, 'Name Surname must be at least 3 number'),
});
export const maskedViewRawtext = {
  cardNumber: '',
  cardDate: '',
};
export {CreditCardValidationScheme, paymentType, initialFees};
