export default function Logs({turns}) {
    return (
        <ol id="log">
            {turns.map((turn) => (
                <li key={`${turn.square.row}${turn.square.col}`}>{turn.player} selects {turn.square.row}, {turn.square.col} </li>
            ) )}
        </ol>
    )
}