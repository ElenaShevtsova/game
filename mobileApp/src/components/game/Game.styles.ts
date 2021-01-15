import {StyleSheet, ViewStyle} from 'react-native';

import {MARGIN_TOP, WIDTH, SIZE, FONTSIZE, PADDING_BOTTOM} from './constants';

interface Style {
  game: ViewStyle;
  gameInfo: ViewStyle;
  styleStatus: ViewStyle;
}

export const styles = StyleSheet.create<Style>({
  game: {
    display: 'flex',
    marginTop: MARGIN_TOP,
    justifyContent: 'center',
    alignItems: 'center',
  },
  gameInfo: {
    width: WIDTH,
    paddingTop: SIZE,
  },
  styleStatus: {
    fontSize: FONTSIZE,
    fontWeight: 'bold',
    paddingLeft: SIZE,
    paddingBottom: PADDING_BOTTOM,
  },
});
