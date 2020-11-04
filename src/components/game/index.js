import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Board } from '../board';
import { calculateWinner } from '../../utils';
import { jumpTo, handleClick } from '../../redux/actions';
import { StepHistory } from '../stepHistory';


export function Game() {
    const history = useSelector(state => state.history);
    const stepNumber = useSelector(state => state.stepNumber);
    const xIsNext = useSelector(state => state.xIsNext);
    const dispatch = useDispatch();
    const current = history[stepNumber];
    const winner = calculateWinner(current.squares);
    let status;
    if (winner) {
        status = `Выиграл ${winner}`
    } else {
        if (history.length === 10) {
            status = 'Ничья'
        } else {
            status = `Следующий ход: ${xIsNext ? 'X' : 'O'}`
        }
    }
    return (
        <div className={"game"}>
            <div className={"game-board"}>
                <Board squares={current.squares} onClick={(i) => {
                    dispatch(handleClick(i, history, stepNumber, xIsNext));
                }} />
            </div>
            <div className={"game-info"}>
                <div>{status}</div>
                <StepHistory history={history} jumpTo={jumpTo} />
            </div>
        </div>
    );

}

export const WrappedGameComponent = Game;
