import {FC} from 'react';
import {useSelector, useDispatch} from 'react-redux';

import {clickOnSquare} from '../game';
import {CurrentSquare, Index} from '../../types';
import {
    disabledSelector,
    historySelector,
    stepNumberSelector,
    xIsNextSelector,
} from '../../redux/selectors/selectors';
import {SquareViewComponent} from './SquareView';

export type SquareProps = { index: Index };
export const Square: FC<SquareProps> = (prop) => {
    const {index} = prop;
    const history = useSelector(historySelector);
    const xIsNext = useSelector(xIsNextSelector);
    const stepNumber = useSelector(stepNumberSelector);
    const disabled = useSelector(disabledSelector);
    const currentSquare: CurrentSquare = history[stepNumber].squares;
    const dispatch = useDispatch();
    const onClick = ():void => {
        dispatch(clickOnSquare(index, xIsNext, currentSquare));
    }
    return SquareViewComponent({disabled, onClick, currentSquare, index});
};
