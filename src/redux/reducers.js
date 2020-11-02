const initialState = {
    history: [{
        squares: Array(9).fill(null),
    }],
    xIsNext: true,
    stepNumber: 0,
}

export function rootReducer(state = initialState, action) {
    switch (action.type) {
        case 'ACTION_CHANGE_VALUE':
            return {
                ...state,
                history: action.payload.history,
                xIsNext: action.payload.xIsNext,
                stepNumber: action.payload.stepNumber,
            }
        case 'ACTION_CHANGE_STEP':
            return {
                ...state,
                stepNumber: action.payload.stepNumber,
                xIsNext: action.payload.xIsNext
            }
        case 'ACTION_END_OF_GAME':
            return {
                ...state,
                history: action.payload.history,
            }
        default: return state;    
    }
}