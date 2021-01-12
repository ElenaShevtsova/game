import {useService} from '@xstate/react';

import {XIsNext, Squares, Index, Status, Step} from '../../types';
import {GameComponent} from './game';
import {service} from '../../machines/gameMachine/gameMachine';

export const clickOnSquare = (
    i: Index,
    xIsNext: XIsNext,
    currentSquares: Squares,
    saveCurrentSquare: any
) => {
    const squares = currentSquares.slice();
    if (!squares[i]) {
        squares[i] = xIsNext ? 'X' : 'O';
        saveCurrentSquare(squares);
    }
};

export const Game = () => {
    const [state, send] = useService(service);
    const history = state.context.history;
    const xIsNext = state.context.xIsNext;
    const winner = state.context.winner;

    const saveCurrentSquare = (currentSquare: Squares) => {
        send({type: 'MAKE_A_MOVE', currentSquare: currentSquare, xIsNext: !xIsNext});
    }
    const jumpToMove = (step: Step) => {
        send({type: 'CHANGE_STEP', step: step});
    };

    let status: Status;
    if (winner) {
        status = `Выиграл ${winner}`;
    } else {
        if (history.length === 10) {
            status = 'Ничья';
        } else {
            status = `Следующий ход: ${xIsNext ? 'X' : 'O'}`;
        }
    }

    return GameComponent({status, saveCurrentSquare, state, jumpToMove});
};
