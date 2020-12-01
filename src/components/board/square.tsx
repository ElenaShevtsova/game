import React, {FC} from "react";
import {useSelector, useDispatch} from "react-redux";
import {clickOnSquare, SquaresInHistory} from "../game";
import {initState} from "../../redux/reducers";

export type SquareProps = {index: number};

export const Square: FC<SquareProps> = (prop) => {
    const {index} = prop;
    const history = useSelector<initState, SquaresInHistory>((state) => state.history);
    const stepNumber = useSelector<initState, number>((state) => state.stepNumber);
    const xIsNext = useSelector<initState, boolean>((state) => state.xIsNext);
    const disabled = useSelector<initState, boolean>((state) => state.disabled);
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