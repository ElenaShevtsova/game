import React from "react";
import {useSelector} from "react-redux";
import {Board} from "../board";
import {StepHistory} from "../stepHistory";
import {actionMakeAMove, actionChangeDisabled} from "../../redux/actions";
import {initState} from "../../redux/reducers";

export type SquaresInHistory = {squares:string[]}[];
export type Winner =  null | undefined;

export const clickOnSquare = (i: number, xIsNext: boolean, currentSquares: string[]) => {
    const squares = currentSquares.slice();
    if (squares[i]) {
        return actionChangeDisabled();
    } else {
        squares[i] = xIsNext ? "X" : "O";
        return actionMakeAMove(squares);
    }
};

export function Game(){
    const history = useSelector<initState, SquaresInHistory>((state) => state.history);
    const xIsNext = useSelector<initState,boolean>((state) => state.xIsNext);
    const winner = useSelector<initState, Winner>((state) => state.winner);
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
