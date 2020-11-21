import {rootReducer, initialState} from "./reducers";

function createInitialHistory() {
    return [{
        squares:
            [null, null, null, null, null, null, null, null, null]
    }, {
        squares:
            ['X', null, null, null, null, null, null, null, null]
    }, {
        squares:
            ['X', 'O', null, null, null, null, null, null, null]
    }, {
        squares:
            ['X', 'O', "X", null, null, null, null, null, null]
    }];
}

function historyAfterChangeStep() {
    return [{
        squares:
            [null, null, null, null, null, null, null, null, null]
    }, {
        squares:
            ['X', null, null, null, null, null, null, null, null]
    }
    ];
}

function historyAfterMakeAMove(){
    return [{
        squares:
            [null, null, null, null, null, null, null, null, null]
    }, {
        squares:
            ['X', null, null, null, null, null, null, null, null]
    }, {
        squares:
            ['X', 'O', null, null, null, null, null, null, null]
    }, {
        squares:
            ['X', 'O', "X", null, null, null, null, null, null]
    },{
        squares:
            ['X', 'O', "X", "O", null, null, null, null, null]
    }];
}

describe('game reducer', () => {

    it('should return initial state', () => {
        expect(rootReducer(undefined, {})).toEqual(initialState);
    });

    it('should handle action ACTION_CHANGE_STEP', () => {
        expect(rootReducer({
                history: createInitialHistory(),
                stepNumber: 3,
                xIsNext: false,
                disabled: false,
            }, {
                type: 'ACTION_CHANGE_STEP', payload: {
                    stepNumber: 1,
                    xIsNext: false,
                }
            }
        )).toEqual({
            history: historyAfterChangeStep(),
            xIsNext: false,
            stepNumber: 1,
            disabled: false,
        });
    });

    it('should handle action ACTION_MAKE_A_MOVE', () => {
        expect(rootReducer({
            history: createInitialHistory(),
            stepNumber: 3,
            xIsNext: false,
            disabled: false,
        },{
            type: 'ACTION_MAKE_A_MOVE',
            payload: {
                squares: ['X', 'O', "X", "O", null, null, null, null, null]
            }
        })).toEqual({
            history: historyAfterMakeAMove(),
            xIsNext: true,
            stepNumber: 4,
            disabled: false,
            winner: undefined,
        });
    });
});