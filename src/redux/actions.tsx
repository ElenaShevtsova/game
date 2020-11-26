export const ACTION_MAKE_A_MOVE = "ACTION_MAKE_A_MOVE";
export const ACTION_CHANGE_STEP = "ACTION_CHANGE_STEP";
export const ACTION_CHANGE_DISABLED = "ACTION_CHANGE_DISABLED";

export const jumpTo = (step: number) => {
  return {
    type: ACTION_CHANGE_STEP,
    payload: {
      stepNumber: step,
      xIsNext: step % 2 === 0,
    },
  };
};

export const actionMakeAMove = (squares: any) => {
  return {
    type: ACTION_MAKE_A_MOVE,
    payload: {
      squares: squares
    },
  };
};

export const actionChangeDisabled = () => {
  return {
    type: ACTION_CHANGE_DISABLED,
    payload: {
      disabled: false,
    },
  };
};
