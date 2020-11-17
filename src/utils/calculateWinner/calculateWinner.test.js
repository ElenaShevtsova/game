import {calculateWinner} from "./index";

test('winner X', () => {
    expect(calculateWinner(["X", "O", "O", null, "X", null, null, null, "X"])).toBe('X');
});

test('winner O', () => {
    expect(calculateWinner(["X", "X", "O", "X", "O", null, "O", null, null])).toBe('O');
});

test('draw', () => {
    expect(calculateWinner(["X", "O", "O", "O", "X", "X", "X", "X", "O"])).toBe(undefined);
});
