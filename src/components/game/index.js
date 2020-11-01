import React from 'react';
import { connect } from 'react-redux';
import { Board } from '../board';
import { calculateWinner } from '../../utils';
import { bindActionCreators } from 'redux';
import { jumpTo, handleClick } from '../../redux/actions';

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

const mapStateToProps = (state) => {
    return {
        history: state.history,
        xIsNext: state.xIsNext,
        stepNumber: state.stepNumber
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        jumpTo: bindActionCreators(jumpTo, dispatch),
        handleClick: bindActionCreators(handleClick, dispatch),
    }
}

const WrappedGameComponent = connect(mapStateToProps, mapDispatchToProps)(Game);
export { WrappedGameComponent };