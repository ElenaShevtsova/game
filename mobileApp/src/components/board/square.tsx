import {FC} from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {clickOnSquare} from '../game';
import {CurrentSquare, Index} from '../../types';
import {
  disabledSelector,
  historySelector,
  stepNumberSelector,
  xIsNextSelector,
} from '../../redux/selectors';
import {SquareViewComponent} from './SquareView';
import { useMachine } from '@xstate/react';
import { gameMachine } from '../../Machine/main';

export type SquareProps = {index: Index};
export const Square: FC<SquareProps> = (prop) => {
  const dispatch = useDispatch();
  const {index, makeTransition, current} = prop;
  const history = useSelector(historySelector);
  const stepNumber = useSelector(stepNumberSelector);
  const disabled = useSelector(disabledSelector);
  const currentSquare: CurrentSquare = history[stepNumber].squares;

  const onClick = () => {
    makeTransition()
    dispatch(clickOnSquare(index, current.value === 'xTurn', currentSquare));
  }

  return SquareViewComponent({disabled, currentSquare, index, onClick});
};
