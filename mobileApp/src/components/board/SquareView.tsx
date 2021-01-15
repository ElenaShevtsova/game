import {Text, TouchableHighlight} from 'react-native';
import {styles} from './Square.styles';
import React, {FC} from 'react';
import {Disabled, Index, CurrentSquare} from '../../types';
import {actionTypes} from '../../redux/actions/actions';

export type SquareViewComponentProps = {
  disabled: Disabled;
  onClick(): void;
  currentSquare: CurrentSquare;
  index: Index;
};
export const SquareViewComponent: FC<SquareViewComponentProps> = (props) => {
  const {disabled, onClick, currentSquare, index} = props;
  return (
    <TouchableHighlight
      onPress={() => onClick()}
      disabled={disabled}
      style={styles.field}>
      <Text style={styles.fontSize}>{currentSquare[index]}</Text>
    </TouchableHighlight>
  );
};
