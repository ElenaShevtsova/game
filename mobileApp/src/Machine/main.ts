import { createMachine } from 'xstate';
// @ts-ignore
export const gameMachine = createMachine(
  {
    id: 'game',
    initial: 'startGame',
    states: {
      startGame: {
        on: {
          TRANSITION: 'xTurn',
        }
      },
      xTurn: {
        on: {
          TRANSITION: 'yTurn',
          GOTOENDGAME: 'endGame',
        }
      },
      yTurn: {
        on: {
          TRANSITION: 'xTurn',
          GOTOENDGAME: 'endGame',
        }
      },
      endGame: {
        on: {
          TOSTART: 'startGame',
        },
      }
    }
  }
)


