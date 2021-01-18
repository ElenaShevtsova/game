import {assign} from 'xstate';
import {calculateWinner} from '../../../utils/calculateWinner';
import {IInitContext} from '../gameMachine';
import {MakeAMove} from '../eventTypes';

export const makeAMove = () => {
    return assign((context: IInitContext, event: MakeAMove ) => {
        const square = event.payload.currentSquare;
        const winner = calculateWinner(square);
        const xIsNext = event.payload.xIsNext;
        const disabled = !!winner;
        return {
            history: context.history.concat({squares: square}),
            stepNumber: context.stepNumber + 1,
            xIsNext: xIsNext,
            winner,
            disabled
        }
    })
}