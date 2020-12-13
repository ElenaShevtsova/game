import {StyleSheet} from 'react-native';
import {blackColor, blueColor} from '../../constants';

export const styles = StyleSheet.create({
  button: {
    borderWidth: 1,
    borderColor: blackColor,
    borderStyle: 'solid',
    width: 170,
    textAlign: 'center',
    paddingTop: 10,
    paddingBottom: 10,
  },
  textColorBlue: {
    color: blueColor,
    fontSize: 16,
    textAlign: 'center',
  },
});
