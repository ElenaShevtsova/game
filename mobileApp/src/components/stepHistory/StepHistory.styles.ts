import {StyleSheet, ViewStyle} from 'react-native';

import {BLACK_COLOR, BLUE_COLOR, BORDER_WIDTH} from '../../constants';
import {WIDTH, PADDING_VERTICAL, FONTSIZE} from './constants';

interface Style {
  button: ViewStyle;
  textColorBlue: ViewStyle;
}

export const styles = StyleSheet.create<Style>({
  button: {
    borderWidth: BORDER_WIDTH,
    borderColor: BLACK_COLOR,
    borderStyle: 'solid',
    width: WIDTH,
    textAlign: 'center',
    paddingVertical: PADDING_VERTICAL,
  },
  textColorBlue: {
    color: BLUE_COLOR,
    fontSize: FONTSIZE,
    textAlign: 'center',
  },
});
