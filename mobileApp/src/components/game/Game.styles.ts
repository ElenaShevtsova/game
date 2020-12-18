import {StyleSheet, ViewStyle} from 'react-native';

interface Style {
  game: ViewStyle;
  gameInfo: ViewStyle;
  styleStatus: ViewStyle;
}

const MARGIN_TOP = 100;
const WIDTH = 180;
const PADDING_TOP = 30;
const FONTSIZE = 13;
const PADDING_LEFT = 30;
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
    paddingTop: PADDING_TOP,
  },
  styleStatus: {
    fontSize: FONTSIZE,
    fontWeight: 'bold',
    paddingLeft: PADDING_LEFT,
    paddingBottom: PADDING_BOTTOM,
  },
});
