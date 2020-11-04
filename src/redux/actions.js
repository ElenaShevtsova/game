import { calculateWinner } from '../utils';
const ACTION_CHANGE_VALUE = 'ACTION_CHANGE_VALUE';
const ACTION_CHANGE_STEP = 'ACTION_CHANGE_STEP';
const ACTION_END_OF_GAME = 'ACTION_END_OF_GAME';

export const jumpTo = (step) => {
    return {
        type: ACTION_CHANGE_STEP,
        payload: {
            stepNumber: step,
            xIsNext: (step % 2) === 0,
        }
    }
}

export const handleClick = (i, propsHistory, stepNumber, xIsNext) => {
    const history = propsHistory.slice(0, stepNumber + 1);
    const current = history[history.length - 1];
    const squares = current.squares.slice();
    if (calculateWinner(squares) || squares[i]) {
        return {
            type: ACTION_END_OF_GAME,
            payload: {
                history: history,
            }
        }
    } else {
        squares[i] = xIsNext ? 'X' : 'O';
        return {
            type: ACTION_CHANGE_VALUE,
            payload: {
                history: history.concat([{
                    squares: squares
                }]),
                xIsNext: !xIsNext,
                stepNumber: history.length,
            }
        }
    }
}