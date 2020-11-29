import {calculateWinner} from "../utils/calculateWinner";
import {actionTypes} from "./actions";

export interface initState {
    history: {squares:string[]}[],
    xIsNext: boolean,
    stepNumber: number,
    winner: null | undefined,
    disabled: boolean
}

export const initialState: initState = {
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

export function rootReducer(state = initialState, action: actionTypes) {
    let newHistory;
    switch (action.type) {
        case "ACTION_MAKE_A_MOVE": {
            const winner = calculateWinner(action.payload.squares);
            const disabled = !!winner;
            if (state.history.length !== state.stepNumber) {
                newHistory = state.history.slice(0, state.stepNumber + 1);
            }
            newHistory = state.history.concat({squares: action.payload.squares});
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
                history: state.history.slice(0, action.payload.stepNumber + 1),
                stepNumber: action.payload.stepNumber,
                xIsNext: action.payload.xIsNext,
                disabled: false,
                winner: state.winner
            };
        case "ACTION_CHANGE_DISABLED":
            return {
                ...state,
                disabled: action.payload.disabled,
            };
        default:
            return state;
    }
}
