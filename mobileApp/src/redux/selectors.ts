import {IInitState} from './reducers';

export const historySelector = (state: IInitState) => state.history;
export const xIsNextSelector = (state: IInitState) => state.xIsNext;
export const winnerSelector = (state: IInitState) => state.winner;
export const stepNumberSelector = (state: IInitState) => state.stepNumber;
export const disabledSelector = (state: IInitState) => state.disabled;
