import {FC} from 'react';

import {clickOnSquare} from '../game';
import {CurrentSquare, Index} from '../../types';
import {SquareViewComponent} from './SquareView';

export type SquareProps = { index: Index, saveCurrentSquare: any, current: any};
export const Square: FC<SquareProps> = (prop) => {
    const {index, saveCurrentSquare, current} = prop;
    const history = current.context.history;
    const xIsNext = current.context.xIsNext;
    const stepNumber = current.context.stepNumber;
    const disabled = current.context.disabled;
    const currentSquare: CurrentSquare = history[stepNumber].squares;
    const onClick = () => {
       clickOnSquare(index, xIsNext, currentSquare, saveCurrentSquare);
    }
    return SquareViewComponent({disabled, currentSquare, index, onClick});
};
