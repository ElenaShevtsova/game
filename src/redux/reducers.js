import { calculateWinner } from "../utils";

const initialState = {
  history: [
    {
      squares: Array(9).fill(null),
    },
  ],
  xIsNext: true,
  stepNumber: 0,
  winner: null,
  disabled: false,
};

export function rootReducer(state = initialState, action) {
  const payload = action.payload;
  let newHistory;
  switch (action.type) {
    case "ACTION_MAKE_A_MOVE": {
      const winner = calculateWinner(payload.squares);
      const disabled = winner ? true : false;
      if (state.history.length !== payload.stepNumber) {
        newHistory = state.history.slice(0, payload.stepNumber + 1);
      }
      newHistory = state.history.concat({ squares: payload.squares });
      return {
        ...state,
        history: newHistory,
        xIsNext: !state.xIsNext,
        stepNumber: state.history.length,
        winner: winner,
        disabled: disabled,
      };
    }
    case "ACTION_CHANGE_STEP":
      return {
        ...state,
        history: state.history.slice(0, payload.stepNumber + 1),
        stepNumber: payload.stepNumber,
        xIsNext: payload.xIsNext,
        disabled: false,
      };
    case "ACTION_CHANGE_DISABLED":
      return {
        ...state,
        disabled: payload.disabled,
      };
    default:
      return state;
  }
}
