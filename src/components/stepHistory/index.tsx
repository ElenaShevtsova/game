import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { jumpTo } from "../../redux/actions";
import {initState} from "../../redux/reducers";

export function StepHistory() {
  const history = useSelector((state:initState) => state.history);
  const dispatch = useDispatch();
  return history.map((_:any, move:number) => {
    const desc = move ? `Перейти к ходу # ${move}` : "К началу игры";
    return (
      <div key={move}>
        <button
          onClick={() => {
            dispatch(jumpTo(move));
          }}
        >
          {desc}
        </button>
      </div>
    );
  });
}