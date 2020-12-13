import {StyleSheet, ViewStyle} from 'react-native';

interface Style {
  game: ViewStyle;
  gameInfo: ViewStyle;
  styleStatus: ViewStyle;
}

export const styles = StyleSheet.create<Style>({
  game: {
    display: 'flex',
    marginTop: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  gameInfo: {
    width: 180,
    paddingTop: 30,
  },
  styleStatus: {
    fontSize: 13,
    fontWeight: 'bold',
    paddingLeft: 30,
    paddingBottom: 15,
  },
});
