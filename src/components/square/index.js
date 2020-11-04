export function Square(props) {
    const { value, onClick } = props;
    return (
        <button className={"square"} onClick={onClick}>{value}</button>
    )
}