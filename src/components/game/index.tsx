import React from "react";
import {useSelector} from "react-redux";
import {Board} from "../board";
import {StepHistory} from "../stepHistory";
import {actionMakeAMove, actionChangeDisabled, actionTypes} from "../../redux/actions";
import {IInitState} from "../../redux/reducers";
import {Winner, XIsNext, SquaresInHistory, Squares, Index} from "../../types";


export const clickOnSquare = (i: Index, xIsNext: XIsNext, currentSquares: Squares):actionTypes => {
    const squares = currentSquares.slice();
    if (squares[i]) {
        return actionChangeDisabled();
    } else {
        squares[i] = xIsNext ? "X" : "O";
        return actionMakeAMove(squares);
    }
};

export const Game = () => {
    const history = useSelector<IInitState, SquaresInHistory>((state) => state.history);
    const xIsNext = useSelector<IInitState, XIsNext>((state) => state.xIsNext);
    const winner = useSelector<IInitState, Winner>((state) => state.winner);
    let status:string;
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
