import React from 'react';
import {StyleSheet, Text, TextInput, TextInputProps, View} from 'react-native';
import {MaskedTextInput} from 'react-native-mask-text';
import {colors} from 'utils/constants';
import {inputErrorTextStyle} from 'utils/typography';
interface InputProps extends TextInputProps {
  showIcon?: boolean;
  errorText?: string;
  title?: string;
  mask: string;
  textLength: number;

  handleChange: (text: string, rawText: string) => void;
}
export const MaskedInput = React.forwardRef(
  (props: InputProps, ref: React.Ref<TextInput>) => {
    const onChange = (text: string, rawText: string) => {
      if (rawText.length <= props.textLength) {
        props.handleChange(text, rawText);
      }
    };
    return (
      <View style={props.style || styles.container}>
        <MaskedTextInput
          {...props}
          ref={ref}
          style={styles.input}
          mask={props.mask}
          onChangeText={onChange}
          placeholderTextColor={colors.gray}
        />
        {typeof props.errorText === 'string' && (
          <Text style={inputErrorTextStyle}>{props.errorText}</Text>
        )}
      </View>
    );
  },
);

const styles = StyleSheet.create({
  input: {
    backgroundColor: colors.white,
    color: 'black',
  },
  container: {
    marginHorizontal: 2,
    flex: 1,
  },
});
