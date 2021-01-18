import {Squares, Step, XIsNext} from '../../types';

export enum GAMES_EVENTS {
    MAKE_A_MOVE = 'MAKE_A_MOVE',
    CHANGE_STEP = 'CHANGE_STEP'
}

export type MakeAMove = {
    type: GAMES_EVENTS.MAKE_A_MOVE;
    payload: { currentSquare: Squares, xIsNext: XIsNext };
}
export type ChangeStep = {
    type: GAMES_EVENTS.CHANGE_STEP;
    payload: { step: Step };
}

export type GameEvents = | MakeAMove | ChangeStep;