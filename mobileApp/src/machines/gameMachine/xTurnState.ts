import {StateNodeConfig} from 'xstate';
import {GAME_TYPES} from './stateTypes';
import {makeAMove} from './helpers/makeAMove';
import {changeStep} from './helpers/changeStep';
import {IInitContext} from './gameMachine';
import {GameEvents, GAMES_EVENTS} from './eventTypes';

export const xTurnState = () => {
    const xTurnStateConfig: StateNodeConfig<IInitContext, {}, GameEvents> = {
        id: GAME_TYPES.XTURN,
        on: {
            [GAMES_EVENTS.MAKE_A_MOVE]: {
                actions: makeAMove(),
                target: GAME_TYPES.OTURN
            },
            [GAMES_EVENTS.CHANGE_STEP]: {
                actions: changeStep(),
                target: GAME_TYPES.OTURN
            }
        }
    }
    return xTurnStateConfig;
}