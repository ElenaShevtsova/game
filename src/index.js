import React from 'react';
import ReactDOM from 'react-dom';
import { connect, Provider } from 'react-redux';
import { createStore, bindActionCreators } from 'redux';
import './index.css';

const initialState = {
    history: [{
        squares: Array(9).fill(null),
    }],
    xIsNext: true,
    stepNumber: 0,
}
const ACTION_CHANGE_VALUE = 'ACTION_CHANGE_VALUE';
const ACTION_CHANGE_STEP = 'ACTION_CHANGE_STEP';
const ACTION_END_OF_GAME = 'ACTION_END_OF_GAME';
const store = createStore(rootReducer);

function rootReducer(state = initialState, action) {
    if (action.type === 'ACTION_CHANGE_VALUE') {
        return Object.assign({}, state, {
            history: action.history,
            xIsNext: action.xIsNext,
            stepNumber: action.stepNumber,
        })
    } else if (action.type === 'ACTION_CHANGE_STEP') {
        return Object.assign({}, state, {
            stepNumber: action.stepNumber,
            xIsNext: action.xIsNext
        })
    } else if(action.type === 'ACTION_END_OF_GAME') {
        return Object.assign({}, state, {
            history: action.history,
        })
    }
    return state;
}

function Square(props) {
    return (
        <button className="square" onClick={props.onClick}>{props.value}</button>
    )
}

class Board extends React.Component {
    renderSquare(i) {
        return (
            <Square value={this.props.squares[i]} onClick={() => { this.props.onClick(i) }} />
        );
    }

    render() {
        return (
            <div>
                <div className="board-row">
                    {this.renderSquare(0)}
                    {this.renderSquare(1)}
                    {this.renderSquare(2)}
                </div>
                <div className="board-row">
                    {this.renderSquare(3)}
                    {this.renderSquare(4)}
                    {this.renderSquare(5)}
                </div>
                <div className="board-row">
                    {this.renderSquare(6)}
                    {this.renderSquare(7)}
                    {this.renderSquare(8)}
                </div>
            </div>
        );
    }
}

const jumpTo = (step) => {
    return {
        type: ACTION_CHANGE_STEP,
        stepNumber: step,
        xIsNext: (step % 2) === 0,
    }
}

const handleClick = (i, props) => {
    const history = props.history.slice(0, props.stepNumber + 1);
    const current = history[history.length - 1];
    const squares = current.squares.slice();
    if (calculateWinner(squares) || squares[i]) {
        return {
            type: ACTION_END_OF_GAME,
            history: props.history,
        }
    } else {
        squares[i] = props.xIsNext ? 'X' : 'O';
        return {
            type: ACTION_CHANGE_VALUE,
            history: history.concat([{
                squares: squares
            }]),
            xIsNext: !props.xIsNext,
            stepNumber: history.length,
        }
    }
}

class Game extends React.Component {
    render() {
        const history = this.props.history;
        const current = history[this.props.stepNumber];
        const winner = calculateWinner(current.squares);
        const moves = history.map((step, move) => {
            const desc = move ?
                `Перейти к ходу # ${move}` : `К началу игры`
            return (
                <li key={move}>
                    <button onClick={() => this.props.jumpTo(move)}>{desc}</button>
                </li>
            )
        })
        let status;
        if (winner) {
            status = `Выиграл ${winner}`
        } else {
            if (this.props.history.length === 10) {
                status = `Ничья`
            } else {
                status = `Следующий ход: ${this.props.xIsNext ? 'X' : 'O'}`
            }
        }
        return (
            <div className="game">
                <div className="game-board">
                    <Board squares={current.squares} onClick={(i) => {
                        this.props.handleClick(i, this.props);
                    }} />
                </div>
                <div className="game-info">
                    <div>{status}</div>
                    <ol>{moves}</ol>
                </div>
            </div>
        );
    }
}

function calculateWinner(squares) {
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            return squares[a];
        }
    }
    return null;
}


const putStateToProps = (state) => {
    return {
        history: state.history,
        xIsNext: state.xIsNext,
        stepNumber: state.stepNumber
    }
}

const putActionsToProps = (dispatch) => {
    return {
        jumpTo: bindActionCreators(jumpTo, dispatch),
        handleClick: bindActionCreators(handleClick, dispatch),
    }
}

const WrappedGameComponent = connect(putStateToProps, putActionsToProps)(Game)

ReactDOM.render(
    <Provider store={store}>
        <WrappedGameComponent />
    </Provider>,
    document.getElementById('root')
);
