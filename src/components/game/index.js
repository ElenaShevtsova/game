import React from "react";
import { useSelector } from "react-redux";
import { Board } from "../board";
import { calculateWinner } from "../../utils";
import { StepHistory } from "../stepHistory";

export function Game() {
  const history = useSelector((state) => state.history);
  const stepNumber = useSelector((state) => state.stepNumber);
  const xIsNext = useSelector((state) => state.xIsNext);
  const current = history[stepNumber];
  const winner = calculateWinner(current.squares);
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
