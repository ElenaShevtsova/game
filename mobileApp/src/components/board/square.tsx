import React, {FC} from 'react';
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
import {StyleSheet, TouchableHighlight, View, Text} from 'react-native';

export type SquareProps = {index: Index};

export const Square: FC<SquareProps> = (prop) => {
  const {index} = prop;
  const history = useSelector<IInitState, SquaresInHistory>(
    (state) => state.history,
  );
  const stepNumber = useSelector<IInitState, StepNumber>(
    (state) => state.stepNumber,
  );
  const xIsNext = useSelector<IInitState, XIsNext>((state) => state.xIsNext);
  const disabled = useSelector<IInitState, Disabled>((state) => state.disabled);
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
        style={styles.square}>
        <Text style={styles.fontSize}>{currentSquare[index]}</Text>
      </TouchableHighlight>
    </View>
  );
};

export const blackColor = 'black';
export const whiteColor = '#fff';

const styles = StyleSheet.create({
  square: {
    backgroundColor: whiteColor,
    borderWidth: 1,
    borderColor: blackColor,
    borderStyle: 'solid',
    fontWeight: 'bold',
    lineHeight: 74,
    height: 74,
    textAlign: 'center',
    width: 74,
    paddingLeft: 15,
  },
  fontSize: {
    fontSize: 54,
  },
});
