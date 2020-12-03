import {calculateWinner} from "../utils/calculateWinner";
import {ACTION_CHANGE_DISABLED, ACTION_CHANGE_STEP, ACTION_MAKE_A_MOVE, actionTypes} from "./actions";
import {Disabled, SquaresInHistory, StepNumber, Winner, XIsNext} from "../types";

export interface IInitState {
    history: SquaresInHistory,
    xIsNext: XIsNext,
    stepNumber: StepNumber,
    winner: Winner,
    disabled: Disabled,
}

export const initialState: IInitState = {
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
        case ACTION_MAKE_A_MOVE : {
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
                winner,
                disabled,
            };
        }
        case ACTION_CHANGE_STEP:
            return {
                ...state,
                history: state.history.slice(0, action.payload.stepNumber + 1),
                stepNumber: action.payload.stepNumber,
                xIsNext: action.payload.xIsNext,
                disabled: false,
                winner: state.winner
            };
        case ACTION_CHANGE_DISABLED:
            return {
                ...state,
                disabled: action.payload.disabled,
            };
        default:
            return state;
    }
}
