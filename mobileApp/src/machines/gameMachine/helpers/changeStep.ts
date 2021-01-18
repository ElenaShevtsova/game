import {assign} from 'xstate';
import {IInitContext} from '../gameMachine';
import {ChangeStep} from '../eventTypes';

export const changeStep = () => {
    return assign((context:IInitContext, event: ChangeStep) => {
        const step= event.payload.step;
        return {
            history: context.history.slice(0, step + 1),
            stepNumber: step,
            xIsNext: step % 2 === 0,
            disabled: false,
        }
    })
}