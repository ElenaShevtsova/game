import React from "react";
import {useSelector} from "react-redux";
import {Board} from "../board";
import {StepHistory} from "../stepHistory";
import {actionMakeAMove, actionChangeDisabled} from "../../redux/actions";
import {initState} from "../../redux/reducers";

export const clickOnSquare = (i: number, xIsNext: boolean, currentSquares: any) => {
    const squares = currentSquares.slice();
    if (squares[i]) {
        return actionChangeDisabled();
    } else {
        squares[i] = xIsNext ? "X" : "O";
        return actionMakeAMove(squares);
    }
};

export function Game() {
    const history = useSelector((state: initState) => state.history);
    const xIsNext = useSelector((state: initState) => state.xIsNext);
    const winner = useSelector((state: initState) => state.winner);
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
            <Board/>
            <div className={"game-info"}>
                <div>{status}</div>
                <StepHistory/>
            </div>
        </div>
    );
}
