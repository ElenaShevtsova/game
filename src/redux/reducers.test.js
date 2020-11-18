import {rootReducer, initialState} from "./reducers";
//import {ACTION_CHANGE_STEP} from "./actions";
//import * as types from './actions';

describe('game reducer', () => {

    it('should return initial state', () => {
        expect(rootReducer(undefined, {})).toEqual(initialState);
    });

    it('should handle action ACTION_CHANGE_STEP', () => {
        expect(rootReducer({
                history: [{
                    squares:
                        [null, null, null, null, null, null, null, null, null]
                }, {
                    squares:
                        ['X', null, null, null, null, null, null, null, null]
                }, {
                    squares:
                        ['X', 'O', null, null, null, null, null, null, null]
                },{
                    squares:
                        ['X', 'O', "X", null, null, null, null, null, null]
                }],
                stepNumber:3,
                xIsNext: false,
                disabled: false,
            }, {type: 'ACTION_CHANGE_STEP', payload:{ stepNumber: 1,
                xIsNext: false,}}
            )).toEqual(   {
            history: [{
                squares:
                    [null, null, null, null, null, null, null, null, null]
            }, {
                squares:
                    ['X', null, null, null, null, null, null, null, null]
            }],
            xIsNext: false,
            stepNumber: 1,
            disabled: false,
        });
    });
});