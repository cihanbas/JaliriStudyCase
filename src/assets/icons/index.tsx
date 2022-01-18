import React from 'react';
import MasterCard from './masterCard.svg';
import BackArrow from './back.svg';
import Check from './check.svg';
import UnCheck from './uncheck.svg';
import CoinCash from './coinCash.svg';
import Paypal from './paypal.svg';
import Visa from './visa.svg';
import CreditCard from './creditCard.svg';

const icons = {
  MasterCard,
  BackArrow,
  Check,
  UnCheck,
  CoinCash,
  Paypal,
  Visa,
  CreditCard,
};
enum IconsEnum {
  masterCard = 'MasterCard',
  back = 'BackArrow',
  check = 'Check',
  unCheck = 'UnCheck',
  coinCash = 'CoinCash',
  paypal = 'Paypal',
  visa = 'Visa',
  creditCard = 'CreditCard',
}
interface IconProps {
  size?: number;
  name: IconsEnum;
  fill?: string;
  stroke?: string;
  color?: string;
}
const Icon = ({
  size = 16,
  name = IconsEnum.back,
  fill = 'white',
  stroke = 'transparent',
  color,
}: IconProps) => {
  return React.createElement(icons[name], {
    height: size,
    width: size,
    fill: color ? color : fill,
    stroke: color ? color : stroke,
  });
};
export {Icon};
export {IconsEnum};
