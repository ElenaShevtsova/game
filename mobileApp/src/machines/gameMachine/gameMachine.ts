import { interpret, Machine } from 'xstate';

import { Disabled, SquaresInHistory, StepNumber, Winner, XIsNext } from '../../types';
import { GAME_TYPES, GameStates } from './stateTypes';
import { xTurnState } from './xTurnState';
import { oTurnState } from './oTurnState';
import { idleState } from './idleState';
import { GameEvents } from './eventTypes';

export interface IInitContext {
  history: SquaresInHistory;
  xIsNext: XIsNext;
  stepNumber: StepNumber;
  winner: Winner;
  disabled: Disabled;
}

export const initialContext: IInitContext = {
  history: [
    {
      squares: Array(9).fill(null),
    },
  ],
  xIsNext: true,
  stepNumber: 0,
  winner: null,
  disabled: false,
};

export const gameMachine = Machine<IInitContext, GameStates, GameEvents>({
  id: 'gameMachine',
  initial: GAME_TYPES.IDLE,
  context: initialContext,
  states: {
    [GAME_TYPES.IDLE]: idleState(),
    [GAME_TYPES.XTURN]: xTurnState(),
    [GAME_TYPES.OTURN]: oTurnState(),
  },
});

export const service = interpret(gameMachine).start();
