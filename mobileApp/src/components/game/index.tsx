import {useMachine} from '@xstate/react';

import {XIsNext, Squares, Index, Status, Step} from '../../types';
import {GameComponent} from './game';
import {gameMachine} from "../../machines/gameMachine/gameMachine";

export const clickOnSquare = (
  i: Index,
  xIsNext: XIsNext,
  currentSquares: Squares,
  saveCurrentSquare: any
) => {
  const squares = currentSquares.slice();
  if(!squares[i]) {
    squares[i] = xIsNext ? 'X' : 'O';
    saveCurrentSquare(squares);
  }
};

export const Game = () => {
  const [current, send] = useMachine(gameMachine);
  const history = current.context.history;
  const xIsNext = current.context.xIsNext;
  const winner = current.context.winner;

  const saveCurrentSquare = (currentSquare: any) => {
    send('TRANSITION', {currentSquare});
  }
  const jumpToMove = (step: Step) => {
    send('CHANGE_STEP', {step});
  };

  let status: Status;
  if (winner) {
    status = `Выиграл ${winner}`;
  } else {
    if (history.length === 10) {
      status = 'Ничья';
    } else {
      status = `Следующий ход: ${xIsNext ? 'X' : 'O'}`;
    }
  }

  return GameComponent({status, saveCurrentSquare, current, jumpToMove});
};
