import React, {FC} from 'react';
import {TouchableHighlight, View, Text} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';

import {clickOnSquare} from '../game';
import {IInitState} from '../../redux/reducers';
import {
  Disabled,
  Index,
  SquaresInHistory,
  StepNumber,
  XIsNext,
} from '../../types';
import {styles} from './Square.styles';
import {
  selectorDisabled,
  selectorHistory,
  selectorStepNumber,
  selectorXIsNext,
} from '../../redux/selectors';

export type SquareProps = {index: Index};

export const Square: FC<SquareProps> = (prop) => {
  const {index} = prop;
  const history = useSelector<IInitState, SquaresInHistory>(selectorHistory);
  const stepNumber = useSelector<IInitState, StepNumber>(selectorStepNumber);
  const xIsNext = useSelector<IInitState, XIsNext>(selectorXIsNext);
  const disabled = useSelector<IInitState, Disabled>(selectorDisabled);
  const dispatch = useDispatch();
  const currentSquare = history[stepNumber].squares;
  const click = () => {
    dispatch(clickOnSquare(index, xIsNext, currentSquare));
  };
  return (
    <View>
      <TouchableHighlight
        onPress={click}
        disabled={disabled}
        style={styles.field}>
        <Text style={styles.fontSize}>{currentSquare[index]}</Text>
      </TouchableHighlight>
    </View>
  );
};
