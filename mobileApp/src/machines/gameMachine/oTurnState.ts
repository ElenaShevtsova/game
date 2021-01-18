import {MachineConfig} from 'xstate';
import {GAME_TYPES, GameStates} from './stateTypes';
import {makeAMove} from './helpers/makeAMove';
import {changeStep} from './helpers/changeStep';
import {IInitContext} from "./gameMachine";
import {GameEvents, GAMES_EVENTS} from "./eventTypes";

export const oTurnState = () => {
    const oTurnStateConfig: MachineConfig<IInitContext, GameStates, GameEvents> = {
        id: GAME_TYPES.OTURN,
        on: {
            [GAMES_EVENTS.MAKE_A_MOVE]: {
                actions: makeAMove(),
                target: [GAME_TYPES.XTURN]
            },
            [GAMES_EVENTS.CHANGE_STEP]: {
                actions: changeStep(),
                target: [GAME_TYPES.XTURN]
            }
        },
    }
    return oTurnStateConfig;
}