export default function GameOver({winner, onRestart}) {
    return (
        <div id="game-over">
            <h2>Game over</h2>
            {winner && <p>{winner} won the match</p> }
            {!winner && <p>it's a draw</p>}
            <p><button onClick={onRestart}>rematch!</button></p>
        </div>
    )
}