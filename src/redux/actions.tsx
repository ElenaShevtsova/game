import {Disabled, Squares, Step, StepNumber, XIsNext} from "../types";

export const ACTION_MAKE_A_MOVE = "ACTION_MAKE_A_MOVE";
export const ACTION_CHANGE_STEP = "ACTION_CHANGE_STEP";
export const ACTION_CHANGE_DISABLED = "ACTION_CHANGE_DISABLED";

export interface IJumpToStepAction {
    type: typeof ACTION_CHANGE_STEP,
    payload: {
        stepNumber: StepNumber,
        xIsNext: XIsNext
    }
}

export interface IMakeAMoveAction {
    type: typeof ACTION_MAKE_A_MOVE,
    payload: {
        squares: Squares
    }
}

export interface IChangeDisabledAction {
    type: typeof ACTION_CHANGE_DISABLED,
    payload: {
        disabled: Disabled
    }
}

export type actionTypes = IJumpToStepAction | IMakeAMoveAction | IChangeDisabledAction;

export const jumpTo = (step: Step):IJumpToStepAction => {
    return {
        type: ACTION_CHANGE_STEP,
        payload: {
            stepNumber: step,
            xIsNext: step % 2 === 0,
        },
    };
};

export const actionMakeAMove = (squares: Squares):IMakeAMoveAction => {
    return {
        type: ACTION_MAKE_A_MOVE,
        payload: {
            squares: squares
        },
    };
};

export const actionChangeDisabled = ():IChangeDisabledAction => {
    return {
        type: ACTION_CHANGE_DISABLED,
        payload: {
            disabled: false,
        },
    };
};
