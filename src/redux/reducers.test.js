import {rootReducer, initialState} from "./reducers";
//import * as types from './actions';

describe('game reducer', () => {

    it('should return initial state', () => {
        expect(rootReducer(undefined, {})).toEqual(initialState);
    });
    //
    // it('should add value in history', () => {
    //     expect(rootReducer({}, {type: types.ACTION_MAKE_A_MOVE })).toEqual({
    //     });
    // });
});