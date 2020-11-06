import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { handleClick } from "../../redux/actions";

export function Square(prop) {
  const { index } = prop;
  const history = useSelector((state) => state.history);
  const stepNumber = useSelector((state) => state.stepNumber);
  const xIsNext = useSelector((state) => state.xIsNext);
  const dispatch = useDispatch();
  const currentSquare = history[stepNumber].squares;

  return (
    <button
      className={"square"}
      onClick={() => {
        dispatch(handleClick(index, history, stepNumber, xIsNext));
      }}
    >
      {currentSquare[index]}
    </button>
  );
}