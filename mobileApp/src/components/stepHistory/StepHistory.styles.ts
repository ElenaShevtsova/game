import {StyleSheet, ViewStyle} from 'react-native';
import {blackColor, blueColor} from '../../constants';
interface Style {
  button: ViewStyle;
  textColorBlue: ViewStyle;
}

export const styles = StyleSheet.create<Style>({
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
