import React, {FC} from "react";
import {useSelector, useDispatch} from "react-redux";
import {clickOnSquare, SquaresInHistory} from "../game";
import {IInitState} from "../../redux/reducers";

export type SquareProps = {index: number};

export const Square: FC<SquareProps> = (prop) => {
    const {index} = prop;
    const history = useSelector<IInitState, SquaresInHistory>((state) => state.history);
    const stepNumber = useSelector<IInitState, number>((state) => state.stepNumber);
    const xIsNext = useSelector<IInitState, boolean>((state) => state.xIsNext);
    const disabled = useSelector<IInitState, boolean>((state) => state.disabled);
    const dispatch = useDispatch();
    const currentSquare = history[stepNumber].squares;
    const click = () => {
        dispatch(clickOnSquare(index, xIsNext, currentSquare));
    };
    return (
        <button className={"square"} onClick={click} disabled={disabled}>
            {currentSquare[index]}
        </button>
    );
};