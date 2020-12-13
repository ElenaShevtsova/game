import {StyleSheet} from 'react-native';

import {whiteColor, blackColor} from '../../constants';

export const styles = StyleSheet.create({
  field: {
    backgroundColor: whiteColor,
    borderWidth: 1,
    borderColor: blackColor,
    borderStyle: 'solid',
    fontWeight: 'bold',
    lineHeight: 74,
    height: 74,
    textAlign: 'center',
    width: 74,
    paddingLeft: 15,
  },
  fontSize: {
    fontSize: 54,
  },
});
