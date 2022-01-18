import {TextStyle} from 'react-native';
import {colors, normalize} from 'utils/constants';
const titleTextStyle: TextStyle = {
  fontWeight: '700',
  fontSize: normalize(16),
};
const H2TextStyle: TextStyle = {
  fontWeight: '600',
  fontSize: normalize(14),
};
const pTextStyle: TextStyle = {
  fontWeight: '400',
  fontSize: normalize(13),
  color: colors.black,
};
const subTextStyle: TextStyle = {
  fontWeight: '400',
  fontSize: normalize(12),
  color: colors.gray,
};
const buttonTextStyle: TextStyle = {
  fontWeight: '600',
  fontSize: normalize(18),
  color: colors.white,
  textTransform: 'uppercase',
  textAlign: 'center',
};
const inputErrorTextStyle: TextStyle = {
  fontSize: normalize(10),
  color: colors.error,
  paddingVertical: normalize(9),
};

export {
  titleTextStyle,
  pTextStyle,
  buttonTextStyle,
  H2TextStyle,
  subTextStyle,
  inputErrorTextStyle,
};
