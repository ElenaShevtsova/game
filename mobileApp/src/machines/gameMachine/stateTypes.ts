export enum GAME_TYPES {
  IDLE = 'IDLE',
  XTURN = 'XTURN',
  OTURN = 'OTURN',
}

export type GameStates = {
  states: {
    [GAME_TYPES.IDLE]: {};
    [GAME_TYPES.XTURN]: {};
    [GAME_TYPES.OTURN]: {};
  };
};
