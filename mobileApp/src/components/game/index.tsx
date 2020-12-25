import {useSelector} from 'react-redux';

import {
  actionMakeAMove,
  actionChangeDisabled,
  actionTypes,
} from '../../redux/actions';
import {XIsNext, Squares, Index, Status} from '../../types';
import {
  historySelector,
  winnerSelector,
  xIsNextSelector,
} from '../../redux/selectors';
import {GameComponent} from './game';
import { useMachine } from '@xstate/react';
import { gameMachine } from '../../Machine/main';
import { useEffect } from 'react';

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
  // const history = useSelector(historySelector);
  const [current, send] = useMachine(gameMachine);

  const makeTransition = () => {
    send('TRANSITION');
  }

  return GameComponent({status: 'Ничья', makeTransition, current});
};
