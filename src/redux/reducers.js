const initialState = {
  history: [
    {
      squares: Array(9).fill(null),
    },
  ],
  xIsNext: true,
  stepNumber: 0,
};

export function rootReducer(state = initialState, action) {
  const payload = action.payload;
  let history;
  switch (action.type) {
    case "ACTION_MAKE_A_MOVE":
      if (state.history.length !== payload.stepNumber) {
        history = state.history.slice(0, payload.stepNumber + 1);
      } else {
        history = state.history.concat({ squares: payload.squares });
      }
      return {
        ...state,
        history: history,
        xIsNext: !payload.xIsNext,
        stepNumber: payload.stepNumber,
      };
    case "ACTION_CHANGE_STEP":
      return {
        ...state,
        stepNumber: payload.stepNumber,
        xIsNext: payload.xIsNext,
      };
    case "ACTION_END_OF_GAME":
      return {
        ...state,
        history: payload.history,
      };
    default:
      return state;
  }
}
