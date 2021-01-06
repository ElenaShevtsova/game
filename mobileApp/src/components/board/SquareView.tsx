import {Text, TouchableHighlight} from 'react-native';
import {styles} from './Square.styles';
import React, {FC} from 'react';
import {Disabled, Index, CurrentSquare} from '../../types';

export type SquareViewComponentProps = {
    disabled: Disabled;
    currentSquare: CurrentSquare;
    index: Index;
    onClick: any;
};
export const SquareViewComponent: FC<SquareViewComponentProps> = (props) => {
    const {disabled, currentSquare, index, onClick} = props;
    return (
        <TouchableHighlight
            onPress={() => onClick()}
            disabled={disabled}
            style={styles.field}>
            <Text style={styles.fontSize}>{currentSquare[index]}</Text>
        </TouchableHighlight>
    );
};
