import React from 'react';
import { Square } from '../square';


export class Board extends React.Component {
    renderSquare(i) {
        const { squares, onClick } = this.props
        return (
            <Square value={squares[i]} onClick={() => { onClick(i) }} />
        );
    }

    renderContainer(array) {
        return (
            array.map((item) => {
                return(
                <div className={"board-row"}>{
                    item.map((i) => {
                        return this.renderSquare(i)
                    })
                }
                </div>
                );
            })
        )
    }

    render() {
        return (
            <div>
                {this.renderContainer([[0, 1, 2], [3, 4, 5], [6, 7, 8]])}
            </div>
        );
    }
}