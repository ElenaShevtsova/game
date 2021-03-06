export type Winner = string | null;
export type XIsNext = boolean;
export type StepNumber = number;
export type Disabled = boolean;
export type SquaresInHistory = { squares: (string | null)[] }[];
export type Squares = (string | null)[];
export type Step = number;
export type Index = number;
export type Status = string;
export type CurrentSquare = (string | null)[];
export type Move = number;
export type State = {
  context: {
    history: SquaresInHistory;
    xIsNext: XIsNext;
    winner: Winner;
    disabled: Disabled;
    stepNumber: StepNumber;
  };
};
export type Square = { squares: (string | null)[] };
