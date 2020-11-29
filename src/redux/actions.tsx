export const ACTION_MAKE_A_MOVE = "ACTION_MAKE_A_MOVE";
export const ACTION_CHANGE_STEP = "ACTION_CHANGE_STEP";
export const ACTION_CHANGE_DISABLED = "ACTION_CHANGE_DISABLED";

export interface jumpToStep {
    type: typeof ACTION_CHANGE_STEP,
    payload: {
        stepNumber: number,
        xIsNext: boolean
    }
}

export interface makeAMove {
    type: typeof ACTION_MAKE_A_MOVE,
    payload: {
        squares: string[]
    }
}

export interface changeDisabled {
    type: typeof ACTION_CHANGE_DISABLED,
    payload: {
        disabled: boolean
    }
}

export type actionTypes = jumpToStep | makeAMove | changeDisabled;

export const jumpTo = (step: number):jumpToStep => {
    return {
        type: ACTION_CHANGE_STEP,
        payload: {
            stepNumber: step,
            xIsNext: step % 2 === 0,
        },
    };
};

export const actionMakeAMove = (squares: string[]):makeAMove => {
    return {
        type: ACTION_MAKE_A_MOVE,
        payload: {
            squares: squares
        },
    };
};

export const actionChangeDisabled = ():changeDisabled => {
    return {
        type: ACTION_CHANGE_DISABLED,
        payload: {
            disabled: false,
        },
    };
};
