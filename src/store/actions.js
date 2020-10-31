import calculateWinner from '../utils';

const ACTION_CHANGE_VALUE = 'ACTION_CHANGE_VALUE';
const ACTION_CHANGE_STEP = 'ACTION_CHANGE_STEP';
const ACTION_END_OF_GAME = 'ACTION_END_OF_GAME';

export const jumpTo = (step) => {
    return {
        type: ACTION_CHANGE_STEP,
        stepNumber: step,
        xIsNext: (step % 2) === 0,
    }
}

export const handleClick = (i, props) => {
    const history = props.history.slice(0, props.stepNumber + 1);
    const current = history[history.length - 1];
    const squares = current.squares.slice();
    if (calculateWinner(squares) || squares[i]) {
        return {
            type: ACTION_END_OF_GAME,
            history: props.history,
        }
    } else {
        squares[i] = props.xIsNext ? 'X' : 'O';
        return {
            type: ACTION_CHANGE_VALUE,
            history: history.concat([{
                squares: squares
            }]),
            xIsNext: !props.xIsNext,
            stepNumber: history.length,
        }
    }
}