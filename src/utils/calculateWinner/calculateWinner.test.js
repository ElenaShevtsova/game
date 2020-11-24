import {calculateWinner} from "./index";

describe('testing function calculateWinner', () => {
    it('player X wins', () => {
        expect(calculateWinner(["X", "O", "O", null, "X", null, null, null, "X"])).toBe('X');
    });

    it('player O wins', () => {
        expect(calculateWinner(["X", "X", "O", "X", "O", null, "O", null, null])).toBe('O');
    });

    it('no player won', () => {
        expect(calculateWinner(["X", "O", "O", "O", "X", "X", "X", "X", "O"])).toBe(undefined);
    });
});
