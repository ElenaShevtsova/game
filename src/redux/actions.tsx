export const ACTION_MAKE_A_MOVE = "ACTION_MAKE_A_MOVE";
export const ACTION_CHANGE_STEP = "ACTION_CHANGE_STEP";
export const ACTION_CHANGE_DISABLED = "ACTION_CHANGE_DISABLED";

export interface IJumpToStepAction {
    type: typeof ACTION_CHANGE_STEP,
    payload: {
        stepNumber: number,
        xIsNext: boolean
    }
}

export interface IMakeAMoveAction {
    type: typeof ACTION_MAKE_A_MOVE,
    payload: {
        squares: string[]
    }
}

export interface IChangeDisabledAction {
    type: typeof ACTION_CHANGE_DISABLED,
    payload: {
        disabled: boolean
    }
}

export type actionTypes = IJumpToStepAction | IMakeAMoveAction | IChangeDisabledAction;

export const jumpTo = (step: number):IJumpToStepAction => {
    return {
        type: ACTION_CHANGE_STEP,
        payload: {
            stepNumber: step,
            xIsNext: step % 2 === 0,
        },
    };
};

export const actionMakeAMove = (squares: string[]):IMakeAMoveAction => {
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
