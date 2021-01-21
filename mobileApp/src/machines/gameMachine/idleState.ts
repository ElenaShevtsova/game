import { StateNodeConfig } from 'xstate';
import { GAME_TYPES } from './stateTypes';
import { makeAMove } from './helpers/makeAMove';
import { IInitContext } from './gameMachine';
import { GameEvents, GAMES_EVENTS } from './eventTypes';

export const idleState = () => {
  const idleStateConfig: StateNodeConfig<IInitContext, {}, GameEvents> = {
    id: GAME_TYPES.IDLE,
    on: {
      [GAMES_EVENTS.MAKE_A_MOVE]: {
        actions: makeAMove(),
        target: GAME_TYPES.XTURN,
      },
    },
  };
  return idleStateConfig;
};
