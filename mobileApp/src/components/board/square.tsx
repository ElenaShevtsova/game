import {FC} from 'react';
import {useSelector} from 'react-redux';

import {clickOnSquare} from '../game';
import {CurrentSquare, Index} from '../../types';
import {
  disabledSelector,
  historySelector,
  stepNumberSelector,
  xIsNextSelector,
} from '../../redux/selectors';
import {SquareViewComponent} from './SquareView';

export type SquareProps = {index: Index};
export const Square: FC<SquareProps> = (prop) => {
  const {index} = prop;
  const history = useSelector(historySelector);
  const xIsNext = useSelector(xIsNextSelector);
  const stepNumber = useSelector(stepNumberSelector);
  const disabled = useSelector(disabledSelector);
  const currentSquare: CurrentSquare = history[stepNumber].squares;
  const click = clickOnSquare(index, xIsNext, currentSquare);
  return SquareViewComponent({disabled, click, currentSquare, index});
};
