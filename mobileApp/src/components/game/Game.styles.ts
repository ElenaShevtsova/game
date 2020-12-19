import {StyleSheet, ViewStyle} from 'react-native';

interface Style {
  game: ViewStyle;
  gameInfo: ViewStyle;
  styleStatus: ViewStyle;
}

const SIZE = 30;
const MARGIN_TOP = 100;
const WIDTH = 180;
const FONTSIZE = 13;
const PADDING_BOTTOM = 15;

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
