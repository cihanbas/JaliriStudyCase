import {Icon, IconsEnum} from 'assets/icons';
import {MaskedInput} from 'components/maskedInput';
import {Formik, FormikErrors, FormikProps} from 'formik';
import React, {forwardRef, useRef} from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';
import {
  CreditCardValidationScheme,
  maskedViewRawtext,
} from 'screens/checkOut/constants';
import {CreditCardModel} from 'screens/checkOut/models';
import {appPadding, colors} from 'utils/constants';
import {inputErrorTextStyle} from 'utils/typography';
import _ from 'lodash';
const CreaditCard = forwardRef(
  ({onComplete}: {onComplete: (status: boolean) => void}, formikRef) => {
    const cardNumberRef = React.createRef<TextInput>();
    const cardDateRef = React.createRef<TextInput>();
    const cvcRef = React.createRef<TextInput>();
    const nameRef = React.createRef<TextInput>();
    return (
      <View style={styles.container}>
        <Formik
          initialValues={{
            cardNumber: '',
            cardDate: '',
            cvc: '',
            cardHolderName: '',
          }}
          innerRef={formikRef}
          validationSchema={CreditCardValidationScheme}
          onSubmit={values => console.log(values)}>
          {({values, errors, handleChange}) => {
            onComplete(_.isEmpty(errors));
            return (
              <View style={styles.inputsContainer}>
                <View style={styles.creditCardContainer}>
                  <Icon
                    name={IconsEnum.creditCard}
                    color={colors.gray}
                    size={20}
                  />
                  <MaskedInput
                    autoCapitalize="none"
                    autoFocus={true}
                    ref={cardNumberRef}
                    handleChange={(text, rawText) => {
                      formikRef.current?.setFieldValue('cardNumber', text);
                      maskedViewRawtext.cardNumber = rawText;
                      if (rawText.length === 16) {
                        cardDateRef.current?.focus();
                      }
                    }}
                    textLength={16}
                    value={values.cardNumber}
                    placeholder="4242 4242 4242 24242"
                    keyboardType="numeric"
                    maxLength={19}
                    mask="9999 9999 9999 9999"
                    style={styles.cardNumberInput}
                  />
                  <MaskedInput
                    ref={cardDateRef}
                    autoCapitalize="none"
                    handleChange={(text, rawText) => {
                      formikRef.current?.setFieldValue('cardDate', text);
                      maskedViewRawtext.cardDate = rawText;
                      if (rawText.length === 4) {
                        cvcRef.current?.focus();
                      } else if (rawText.length === 0) {
                        cardNumberRef.current?.focus();
                      }
                    }}
                    textLength={4}
                    value={values.cardDate}
                    placeholder="MM/YY"
                    keyboardType="numeric"
                    maxLength={5}
                    mask="99/99"
                  />
                  <MaskedInput
                    ref={cvcRef}
                    autoCapitalize="none"
                    handleChange={(text, rawText) => {
                      formikRef.current?.setFieldValue('cvc', text);
                      if (rawText.length === 3) {
                        nameRef.current?.focus();
                      } else if (
                        rawText.length === 0 &&
                        cvcRef.current?.isFocused()
                      ) {
                        cardDateRef.current?.focus();
                      }
                    }}
                    textLength={3}
                    value={values.cvc}
                    placeholder="999"
                    keyboardType="numeric"
                    maxLength={3}
                    mask="999"
                  />
                </View>
                <TextInput
                  ref={nameRef}
                  autoCapitalize="none"
                  value={values.cardHolderName}
                  onChangeText={handleChange('cardHolderName')}
                  placeholder="Name On Card"
                  style={styles.nameInput}
                />
                <Text style={inputErrorTextStyle}>{getErrorValue(errors)}</Text>
              </View>
            );
          }}
        </Formik>
      </View>
    );
  },
);
export {CreaditCard};
const getErrorValue = (errors: FormikErrors<CreditCardModel>): string => {
  return errors[Object.keys(errors)[0]];
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: appPadding,

    borderBottomColor: colors.gray,
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  inputsContainer: {},
  creditCardContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderWidth: 1,
    padding: 8,
    borderRadius: 8,
    alignItems: 'center',
  },
  nameInput: {
    paddingTop: appPadding,
    paddingBottom: appPadding / 2,
    borderBottomColor: colors.gray,
    borderBottomWidth: 1,
  },
  cardNumberInput: {
    flex: 4,
    paddingLeft: 6,
  },
});
