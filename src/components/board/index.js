import React from 'react';
import { Square } from '../square';


export function Board(props) {
    const renderSquare = (i, key) => {
        const { squares, onClick } = props
        return (
            <Square value={squares[i]} key={key} onClick={() => { onClick(i) }} />
        );
    }

    const renderContainer = (object) => {
        return (
            Object.entries(object).map(([key, array]) => {
                return (
                    <div className={"board-row"} key={`${key}${array}`}>{
                        array.map((index) => {
                            return renderSquare(index, `${key}${index}`)
                        })
                    }
                    </div>
                );
            })
        )
    }

    return (
        <>
            {renderContainer({ firstRow: [0, 1, 2], secondRow: [3, 4, 5], thirdRow: [6, 7, 8] })}
        </>
    );

}