import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { jumpTo } from "../../redux/actions";

export function StepHistory() {
  const history = useSelector((state) => state.history);
  const dispatch = useDispatch();
  return history.map((_, move) => {
    const desc = move ? `Перейти к ходу # ${move}` : "К началу игры";
    return (
      <p key={move}>
        <button
          onClick={() => {
            dispatch(jumpTo(move));
          }}
        >
          {desc}
        </button>
      </p>
    );
  });
}
