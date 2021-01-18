import {MachineConfig} from 'xstate';
import {GAME_TYPES, GameStates} from './stateTypes';
import {makeAMove} from './helpers/makeAMove';
import {changeStep} from './helpers/changeStep';
import {IInitContext} from "./gameMachine";
import {GameEvents, GAMES_EVENTS} from "./eventTypes";

export const xTurnState = () => {
    const xTurnStateConfig: MachineConfig<IInitContext, GameStates, GameEvents> = {
        id: GAME_TYPES.XTURN,
        on: {
            [GAMES_EVENTS.MAKE_A_MOVE]: {
                actions: makeAMove(),
                target: [GAME_TYPES.OTURN]
            },
            [GAMES_EVENTS.CHANGE_STEP]: {
                actions: changeStep(),
                target: [GAME_TYPES.OTURN]
            }
        }
    }
    return xTurnStateConfig;
}