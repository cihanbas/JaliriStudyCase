import {FeeListModel} from './model';

const feesResponse = {
  fees: [
    {
      text: 'Subtotal',
      value: '800 AED',
      key: 'subtotal',
    },
    {
      text: 'Coupon Code',
      value: '-50 AED',
      key: 'couponCode',
    },
    {
      text: 'Shipping',
      value: 'Free',
      key: 'shipping',
    },
  ],
  total: '750 AED',
};
export const getFees = () =>
  new Promise<FeeListModel>(resolve =>
    setTimeout(() => resolve(feesResponse), 1000),
  );
