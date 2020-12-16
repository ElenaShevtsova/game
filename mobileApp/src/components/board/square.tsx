import {FC} from 'react';
import {useSelector} from 'react-redux';

import {clickOnSquare} from '../game';
import {IInitState} from '../../redux/reducers';
import {
  Disabled,
  Index,
  SquaresInHistory,
  StepNumber,
  XIsNext,
} from '../../types';
import {
  selectorDisabled,
  selectorHistory,
  selectorStepNumber,
  selectorXIsNext,
} from '../../redux/selectors';
import {SquareViewComponent} from './SquareView';

export type SquareProps = {index: Index};

export const Square: FC<SquareProps> = (prop) => {
  const {index} = prop;
  const history = useSelector<IInitState, SquaresInHistory>(selectorHistory);
  const stepNumber = useSelector<IInitState, StepNumber>(selectorStepNumber);
  const xIsNext = useSelector<IInitState, XIsNext>(selectorXIsNext);
  const disabled = useSelector<IInitState, Disabled>(selectorDisabled);
  //const dispatch = useDispatch();
  const currentSquare = history[stepNumber].squares;
  const click = clickOnSquare(index, xIsNext, currentSquare);
  return SquareViewComponent({disabled, click, currentSquare, index});
};
