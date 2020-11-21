import React from "react";
import { useSelector } from "react-redux";
import { Board } from "../board";
import { StepHistory } from "../stepHistory";
import { actionMakeAMove, actionChangeDisabled } from "../../redux/actions";

export const clickOnSquare = (i, xIsNext, currentSquares) => {
  const squares = currentSquares.slice();
  if (squares[i]) {
    return actionChangeDisabled();
  } else {
    squares[i] = xIsNext ? "X" : "O";
    console.log(squares);
    return actionMakeAMove(squares);
  }
};

export function Game() {
  const history = useSelector((state) => state.history);
  const xIsNext = useSelector((state) => state.xIsNext);
  const winner = useSelector((state) => state.winner);
  let status;
  if (winner) {
    status = `Выиграл ${winner}`;
  } else {
    if (history.length === 10) {
      status = "Ничья";
    } else {
      status = `Следующий ход: ${xIsNext ? "X" : "O"}`;
    }
  }
  return (
    <div className={"game"}>
      <Board />
      <div className={"game-info"}>
        <div>{status}</div>
        <StepHistory />
      </div>
    </div>
  );
}
