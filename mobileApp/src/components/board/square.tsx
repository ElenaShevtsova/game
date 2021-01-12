import {FC} from 'react';

import {clickOnSquare} from '../game';
import {CurrentSquare, Index, Squares, State} from '../../types';
import {SquareViewComponent} from './SquareView';

export type SquareProps = { index: Index, saveCurrentSquare(currentSquare: Squares): void, state: State };
export const Square: FC<SquareProps> = (prop) => {
    const {index, saveCurrentSquare, state} = prop;
    const history = state.context.history;
    const xIsNext = state.context.xIsNext;
    const stepNumber = state.context.stepNumber;
    const disabled = state.context.disabled;
    const currentSquare: CurrentSquare = history[stepNumber].squares;
    const onClick = () => {
        clickOnSquare(index, xIsNext, currentSquare, saveCurrentSquare);
    }
    return SquareViewComponent({disabled, currentSquare, index, onClick});
};
