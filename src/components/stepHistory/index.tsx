import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { jumpTo } from "../../redux/actions";
import {IInitState} from "../../redux/reducers";
import {SquaresInHistory} from "../game";

export function StepHistory() {
  const history = useSelector<IInitState,SquaresInHistory>((state) => state.history);
  const dispatch = useDispatch();
  return <>{history.map((_, move) => {
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
  })}</>;
}