import {StyleSheet, ViewStyle} from 'react-native';

interface Style {
  square: ViewStyle;
}

export const styles = StyleSheet.create<Style>({
  square: {
    display: 'flex',
    flexDirection: 'row',
    width: 230,
  },
});
