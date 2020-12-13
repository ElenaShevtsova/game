import React from 'react';
import {View, Text, ScrollView} from 'react-native';
import {useSelector} from 'react-redux';

import {Board} from '../board';
import {StepHistory} from '../stepHistory';
import {
  actionMakeAMove,
  actionChangeDisabled,
  actionTypes,
} from '../../redux/actions';
import {IInitState} from '../../redux/reducers';
import {Winner, XIsNext, SquaresInHistory, Squares, Index} from '../../types';
import {styles} from './Game.styles';
import {
  selectorHistory,
  selectorWinner,
  selectorXIsNext,
} from '../../redux/selectors';

export const clickOnSquare = (
  i: Index,
  xIsNext: XIsNext,
  currentSquares: Squares,
): actionTypes => {
  const squares = currentSquares.slice();
  if (squares[i]) {
    return actionChangeDisabled();
  } else {
    squares[i] = xIsNext ? 'X' : 'O';
    return actionMakeAMove(squares);
  }
};

export const Game = () => {
  const history = useSelector<IInitState, SquaresInHistory>(selectorHistory);
  const xIsNext = useSelector<IInitState, XIsNext>(selectorXIsNext);
  const winner = useSelector<IInitState, Winner>(selectorWinner);
  let status: string;
  if (winner) {
    status = `Выиграл ${winner}`;
  } else {
    if (history.length === 10) {
      status = 'Ничья';
    } else {
      status = `Следующий ход: ${xIsNext ? 'X' : 'O'}`;
    }
  }
  return (
    <View style={styles.game}>
      <Board />
      <ScrollView style={styles.gameInfo}>
        <View>
          <Text style={styles.styleStatus}>{status}</Text>
        </View>
        <StepHistory />
      </ScrollView>
    </View>
  );
};
