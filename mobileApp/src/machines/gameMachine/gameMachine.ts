import {assign, Machine} from "xstate";

import {IInitState} from "../../redux/reducers";
import {calculateWinner} from "../../utils/calculateWinner";

const initialState: IInitState = {
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

interface GameMachineStateSchema {
    states: {
        idle: {},
        xTurn: {},
        oTurn: {},
    },
}

export const gameMachine = Machine<IInitState, GameMachineStateSchema>({
        id: 'gameMachine',
        initial: 'idle',
        context: initialState,
        states: {
            idle: {
                on: {
                    TRANSITION: {
                        target: 'xTurn',
                        actions:
                            assign((context, event, payload) => {
                                const square = payload._event.data.currentSquare;
                                const winner = calculateWinner(square);
                                return {
                                    history: context.history.concat({squares: square}),
                                    stepNumber: context.stepNumber + 1,
                                    xIsNext: false,
                                    winner,
                                }
                            })
                    }
                },
            },
            xTurn: {
                on: {
                    TRANSITION: {
                        target: 'oTurn',
                        actions: assign((context, event, payload) => {
                            const square = payload._event.data.currentSquare;
                            const winner = calculateWinner(square);
                            const disabled = !!winner;
                            return {
                                history: context.history.concat({squares: square}),
                                stepNumber: context.stepNumber + 1,
                                xIsNext: true,
                                winner,
                                disabled
                            }
                        })
                    },
                    CHANGE_STEP: {
                        actions: assign((context, event, payload) => {
                            const step = payload._event.data.step;
                            return {
                                history: context.history.slice(0, step + 1),
                                stepNumber: step,
                                xIsNext: step % 2 === 0,
                                disabled: false,
                            }
                        })
                    }
                },
            },
            oTurn: {
                on: {
                    TRANSITION: {
                        target: 'xTurn',
                        actions:
                            assign((context, event, payload) => {
                                const square = payload._event.data.currentSquare;
                                const winner = calculateWinner(square);
                                const disabled = !!winner;
                                return {
                                    history: context.history.concat({squares: square}),
                                    stepNumber: context.stepNumber + 1,
                                    xIsNext: false,
                                    winner,
                                    disabled
                                }
                            })
                    },
                    CHANGE_STEP: {
                        actions: assign((context, event, payload) => {
                            const step = payload._event.data.step;
                            return {
                                history: context.history.slice(0, step + 1),
                                stepNumber: step,
                                xIsNext: step % 2 === 0,
                                disabled: false,
                            }
                        })
                    }
                }
            }
        },
    },
);