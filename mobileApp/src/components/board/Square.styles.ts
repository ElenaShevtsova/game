import {StyleSheet, TextStyle, ViewStyle} from 'react-native';

import {WHITE_COLOR, BLACK_COLOR, BORDER_WIDTH} from '../../constants';

interface Style {
  field: ViewStyle;
  fontSize: TextStyle;
}

const HEIGHT = 74;
const WIDTH = 74;
const LINE_HEIGHT = 74;
const FONTSIZE = 54;
const PADDING_LEFT = 15;

export const styles = StyleSheet.create<Style>({
  field: {
    backgroundColor: WHITE_COLOR,
    borderWidth: BORDER_WIDTH,
    borderColor: BLACK_COLOR,
    borderStyle: 'solid',
    fontWeight: 'bold',
    lineHeight: LINE_HEIGHT,
    height: HEIGHT,
    textAlign: 'center',
    width: WIDTH,
    paddingLeft: PADDING_LEFT,
  },
  fontSize: {
    fontSize: FONTSIZE,
  },
});
