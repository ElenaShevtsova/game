import { calculateWinner } from "../utils";
const ACTION_CHANGE_VALUE = "ACTION_CHANGE_VALUE";
const ACTION_CHANGE_STEP = "ACTION_CHANGE_STEP";
const ACTION_END_OF_GAME = "ACTION_END_OF_GAME";

export const jumpTo = (step) => {
  return {
    type: ACTION_CHANGE_STEP,
    payload: {
      stepNumber: step,
      xIsNext: step,
    },
  };
};

const actionChangeValue = (history, xIsNext, squares) => {
  return {
    type: ACTION_CHANGE_VALUE,
    payload: {
      history: history.concat([
        {
          squares: squares,
        },
      ]),
      xIsNext: !xIsNext,
      stepNumber: history.length,
    },
  };
};

const actionEndOfGame = (history) => {
  return {
    type: ACTION_END_OF_GAME,
    payload: {
      history: history,
    },
  };
};

export const handleClick = (i, propsHistory, stepNumber, xIsNext) => {
  const history = propsHistory.slice(0, stepNumber + 1);
  const current = history[history.length - 1];
  const squares = current.squares.slice();
  if (calculateWinner(squares) || squares[i]) {
    return actionEndOfGame(history);
  } else {
    squares[i] = xIsNext ? "X" : "O";
    return actionChangeValue(history, xIsNext, squares);
  }
};
