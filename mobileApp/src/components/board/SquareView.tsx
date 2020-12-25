import {Text, TouchableHighlight} from 'react-native';
import {styles} from './Square.styles';
import React, {FC} from 'react';
import {Disabled, Index, CurrentSquare} from '../../types';
import {actionTypes} from '../../redux/actions';
import {useDispatch} from 'react-redux';
import { useMachine } from '@xstate/react';
import { gameMachine } from '../../Machine/main';

export type SquareViewComponentProps = {
  disabled: Disabled;
  click: actionTypes;
  currentSquare: CurrentSquare;
  index: Index;
};
export const SquareViewComponent: FC<SquareViewComponentProps> = (props) => {
  const {disabled, currentSquare, index, onClick} = props;

  return (
    <TouchableHighlight
      onPress={() => {
        onClick()
      }}
      disabled={disabled}
      style={styles.field}>
      <Text style={styles.fontSize}>{currentSquare[index]}</Text>
    </TouchableHighlight>
  );
};
