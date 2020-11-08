const ACTION_MAKE_A_MOVE = "ACTION_MAKE_A_MOVE";
const ACTION_CHANGE_STEP = "ACTION_CHANGE_STEP";
const ACTION_END_OF_GAME = "ACTION_END_OF_GAME";

export const jumpTo = (step) => {
  return {
    type: ACTION_CHANGE_STEP,
    payload: {
      stepNumber: step,
      xIsNext: step % 2 === 0,
    },
  };
};

export const actionMakeAMove = (history, xIsNext, squares) => {
  return {
    type: ACTION_MAKE_A_MOVE,
    payload: {
      squares: squares,
      xIsNext: xIsNext,
      stepNumber: history.length,
    },
  };
};

export const actionEndOfGame = (history) => {
  return {
    type: ACTION_END_OF_GAME,
    payload: {
      history: history,
    },
  };
};
