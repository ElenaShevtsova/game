import React from "react";
import {Square} from "./square";

export function Board() {
    const squares = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
    ];

    return (
        <div className={"game-board"}>
            {squares.map((row) => {
                return (
                    <div className={"board-row"} key={`Row ${row}`}>
                        {row.map((i) => {
                            return <Square index={i} key={`Index ${i}`}/>;
                        })}
                    </div>
                );
            })}
        </div>
    );
}
