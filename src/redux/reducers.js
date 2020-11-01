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
            return Object.assign({}, state, {
                history: action.history,
                xIsNext: action.xIsNext,
                stepNumber: action.stepNumber,
            })
        case 'ACTION_CHANGE_STEP':
            return Object.assign({}, state, {
                stepNumber: action.stepNumber,
                xIsNext: action.xIsNext
            })
        case 'ACTION_END_OF_GAME':
            return Object.assign({}, state, {
                history: action.history,
            })
        default: return state;    
    }
}