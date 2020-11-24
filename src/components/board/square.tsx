import React from "react";
import {useSelector, useDispatch} from "react-redux";
import {clickOnSquare} from "../game";
import {initState} from "../../redux/reducers";

export function Square(prop:any) {
    const {index} = prop;
    const history = useSelector((state: initState) => state.history);
    const stepNumber = useSelector((state: initState) => state.stepNumber);
    const xIsNext = useSelector((state: initState) => state.xIsNext);
    const disabled = useSelector((state: initState) => state.disabled);
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
}