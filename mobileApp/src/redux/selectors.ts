import {createSelector} from 'reselect';
import {IInitState} from './reducers';

const initState = (state: IInitState) => state;

export const selectorHistory = createSelector(
  initState,
  (state) => state.history,
);
export const selectorXIsNext = createSelector(
  initState,
  (state) => state.xIsNext,
);
export const selectorWinner = createSelector(
  initState,
  (state) => state.winner,
);
export const selectorStepNumber = createSelector(
  initState,
  (state) => state.stepNumber,
);
export const selectorDisabled = createSelector(
  initState,
  (state) => state.disabled,
);
