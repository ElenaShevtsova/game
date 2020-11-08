import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { clickOnSquare } from "../game";

export function Square(prop) {
  const { index } = prop;
  const history = useSelector((state) => state.history);
  const stepNumber = useSelector((state) => state.stepNumber);
  const xIsNext = useSelector((state) => state.xIsNext);
  const dispatch = useDispatch();
  const currentSquare = history[stepNumber].squares;

  const click = () => {
    dispatch(clickOnSquare(index, history, stepNumber, xIsNext));
  };

  return (
    <button className={"square"} onClick={click}>
      {currentSquare[index]}
    </button>
  );
}
