import {StyleSheet, TextStyle, ViewStyle} from 'react-native';

import {WHITE_COLOR, BLACK_COLOR, BORDER_WIDTH} from '../../constants';
import {SIZE, PADDING_LEFT, FONTSIZE} from './constants';

interface Style {
    field: ViewStyle;
    fontSize: TextStyle;
}

export const styles = StyleSheet.create<Style>({
    field: {
        backgroundColor: WHITE_COLOR,
        borderWidth: BORDER_WIDTH,
        borderColor: BLACK_COLOR,
        borderStyle: 'solid',
        fontWeight: 'bold',
        lineHeight: SIZE,
        height: SIZE,
        textAlign: 'center',
        width: SIZE,
        paddingLeft: PADDING_LEFT,
    },
    fontSize: {
        fontSize: FONTSIZE,
    },
});
