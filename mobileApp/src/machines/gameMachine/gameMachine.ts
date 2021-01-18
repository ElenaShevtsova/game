import {assign, interpret, Machine} from 'xstate';

import {calculateWinner} from '../../utils/calculateWinner';
import {Disabled, SquaresInHistory, StepNumber, Winner, XIsNext} from '../../types';
import {GAME_TYPES, GameStates} from './stateTypes';
import {makeAMove} from "./helpers/makeAMove";
import {xTurnState} from './xTurnState';
import {oTurnState} from './oTurnState';
import {idleState} from './idleState';
import {GameEvents} from './eventTypes';

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

// export const gameMachine = Machine<IInitContext, GameStates>({
//         id: 'gameMachine',
//         initial: GAME_TYPES.IDLE,
//         context: initialContext,
//         states: {
//             idle: {
//                 on: {
//                     MAKE_A_MOVE: {
//                         target: 'xTurn',
//                         actions: 'makeAMove'
//                     }
//                 },
//             },
//             xTurn: {
//                 on: {
//                     MAKE_A_MOVE: {
//                         target: 'oTurn',
//                         actions: 'makeAMove'
//                     },
//                     CHANGE_STEP: {
//                         actions: 'changeStep'
//                     }
//                 },
//             },
//             oTurn: {
//                 on: {
//                     MAKE_A_MOVE: {
//                         target: 'xTurn',
//                         actions: 'makeAMove'
//                     },
//                     CHANGE_STEP: {
//                         actions: 'changeStep'
//                     }
//                 }
//             }
//         },
//     },
//     {
//         actions: {
//             makeAMove: assign((context, event, payload) => {
//                 const square = payload._event.data.currentSquare;
//                 const winner = calculateWinner(square);
//                 const xIsNext = payload._event.data.xIsNext;
//                 const disabled = !!winner;
//                 return {
//                     history: context.history.concat({squares: square}),
//                     stepNumber: context.stepNumber + 1,
//                     xIsNext: xIsNext,
//                     winner,
//                     disabled
//                 }
//             }),
//             changeStep: assign((context, event, payload) => {
//                 const step = payload._event.data.step;
//                 return {
//                     history: context.history.slice(0, step + 1),
//                     stepNumber: step,
//                     xIsNext: step % 2 === 0,
//                     disabled: false,
//                 }
//             })
//         }
//     }
// );

export const gameMachine = Machine<IInitContext, {}, GameEvents>({
        id: 'gameMachine',
        initial: GAME_TYPES.IDLE,
        context: initialContext,
        states: {
            [GAME_TYPES.IDLE]: idleState(),
            [GAME_TYPES.XTURN]: xTurnState(),
            [GAME_TYPES.OTURN]: oTurnState()
        },
    }
);

export const service = interpret(gameMachine).start();