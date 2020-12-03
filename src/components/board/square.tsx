import React, {FC} from "react";
import {useSelector, useDispatch} from "react-redux";
import {clickOnSquare} from "../game";
import {IInitState} from "../../redux/reducers";
import {Disabled, Index, SquaresInHistory, StepNumber, XIsNext} from "../../types";

export type SquareProps = {index: Index};

export const Square: FC<SquareProps> = (prop) => {
    const {index} = prop;
    const history = useSelector<IInitState, SquaresInHistory>((state) => state.history);
    const stepNumber = useSelector<IInitState, StepNumber>((state) => state.stepNumber);
    const xIsNext = useSelector<IInitState, XIsNext>((state) => state.xIsNext);
    const disabled = useSelector<IInitState, Disabled>((state) => state.disabled);
    const dispatch = useDispatch();
    console.log(history[stepNumber]);
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