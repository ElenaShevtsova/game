import { useDispatch } from 'react-redux';

export function StepHistory(props) {
    const { history, jumpTo } = props;
    const dispatch = useDispatch();
    return history.map((_, move) => {
        const desc = move ?
            `Перейти к ходу # ${move}` : 'К началу игры'
        return (
            <p key={move}><button onClick={() => { dispatch(jumpTo(move)) }}>{desc}</button></p>
        )
    })
}