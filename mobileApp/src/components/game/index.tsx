import {useSelector} from 'react-redux';

import {
  actionMakeAMove,
  actionChangeDisabled,
  actionTypes,
} from '../../redux/actions';
import {IInitState} from '../../redux/reducers';
import {
  XIsNext,
  Squares,
  Index,
  Status,
  SquaresInHistory,
  Winner,
} from '../../types';
import {
  selectorHistory,
  selectorWinner,
  selectorXIsNext,
} from '../../redux/selectors';
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
  const history = useSelector<IInitState, SquaresInHistory>(selectorHistory);
  const xIsNext = useSelector<IInitState, XIsNext>(selectorXIsNext);
  const winner = useSelector<IInitState, Winner>(selectorWinner);
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
