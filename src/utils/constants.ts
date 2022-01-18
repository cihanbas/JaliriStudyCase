import {Platform} from 'react-native';
import {moderateScale} from 'react-native-size-matters';

const normalize = (number: number, factor = 0.25) =>
  moderateScale(number, factor);
const appPadding = normalize(18);
const isIOS = Platform.OS === 'ios';

const colors = {
  black: '#000',
  white: '#fff',
  gray: '#7C7B7B',
  disable: '#DADADA',
  backgroundGray: '#FBFBFB',
  disableButton: '#DADADA',
  error: 'red',
};
export {isIOS, normalize, appPadding, colors};
