import {useSelector} from 'react-redux';

import {
  actionMakeAMove,
  actionChangeDisabled,
  actionTypes,
} from '../../redux/actions/actions';
import {XIsNext, Squares, Index, Status} from '../../types';
import {
  historySelector,
  winnerSelector,
  xIsNextSelector,
} from '../../redux/selectors/selectors';
import {GameComponent} from './game';

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
  const history = useSelector(historySelector);
  const xIsNext = useSelector(xIsNextSelector);
  const winner = useSelector(winnerSelector);
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
  return GameComponent({status});
};
