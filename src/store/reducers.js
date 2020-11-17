const initialState = {
    history: [{
        squares: Array(9).fill(null),
    }],
    xIsNext: true,
    stepNumber: 0,
}

export default function rootReducer(state = initialState, action) {
    if (action.type === 'ACTION_CHANGE_VALUE') {
        return Object.assign({}, state, {
            history: action.history,
            xIsNext: action.xIsNext,
            stepNumber: action.stepNumber,
        })
    } else if (action.type === 'ACTION_CHANGE_STEP') {
        return Object.assign({}, state, {
            stepNumber: action.stepNumber,
            xIsNext: action.xIsNext
        })
    } else if(action.type === 'ACTION_END_OF_GAME') {
        return Object.assign({}, state, {
            history: action.history,
        })
    }
    return state;
}