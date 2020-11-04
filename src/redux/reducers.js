const initialState = {
    history: [{
        squares: Array(9).fill(null),
    }],
    xIsNext: true,
    stepNumber: 0,
}

export function rootReducer(state = initialState, action) {
    const prop = action.payload;
    switch (action.type) {
        case 'ACTION_CHANGE_VALUE':
            return {
                ...state,
                history: prop.history,
                xIsNext: prop.xIsNext,
                stepNumber: prop.stepNumber,
            }
        case 'ACTION_CHANGE_STEP':
            return {
                ...state,
                stepNumber: prop.stepNumber,
                xIsNext: prop.xIsNext
            }
        case 'ACTION_END_OF_GAME':
            return {
                ...state,
                history: prop.history,
            }
        default: return state;    
    }
}