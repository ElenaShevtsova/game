import React from "react";
import { useSelector } from "react-redux";
import { Board } from "../board";
import { calculateWinner } from "../../utils";
import { StepHistory } from "../stepHistory";
import { actionMakeAMove, actionEndOfGame } from "../../redux/actions";

export const clickOnSquare = (i, propsHistory, stepNumber, xIsNext) => {
  const history = propsHistory.slice(0, stepNumber + 1);
  const current = history[history.length - 1];
  const squares = current.squares.slice();
  if (calculateWinner(squares) || squares[i]) {
    return actionEndOfGame(history);
  } else {
    squares[i] = xIsNext ? "X" : "O";
    return actionMakeAMove(history, xIsNext, squares);
  }
};

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
