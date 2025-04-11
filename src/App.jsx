import { useState } from "react"
import GameBoard from "./components/GameBoard"
import Player from "./components/Player"
import Logs from "./components/Logs"
import { WINNING_COMBINATIONS } from "./winning-combination"
import GameOver from "./components/GameOver"

const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null]
]

function deriveCurrentActivePlayer(gameTurns) {
  let currentPlayer = 'X'

  if(gameTurns.length && gameTurns[0].player === 'X') {
    currentPlayer = 'O'
  }

  return currentPlayer;
}

function App() {
  const [gameTurns, setGameTurns] = useState([])
  const [player, setPlayerName] = useState({X: 'player 1', O: 'player 2'})
  const currentActivePlayer =  deriveCurrentActivePlayer(gameTurns)

  let gameBoard = [...initialGameBoard].map((array) => [...array]);

  for (const turn of gameTurns) {
      const { square, player } = turn
      const { row, col } = square
      gameBoard[row][col] = player
  }
  let winner;

  for (const combination of WINNING_COMBINATIONS) {
    const firstSquareSymbol = gameBoard[combination[0].row][combination[0].column]
    const secondSquareSymbol = gameBoard[combination[1].row][combination[1].column]
    const thirdSquareSymbol = gameBoard[combination[2].row][combination[2].column]
     if (firstSquareSymbol && 
      firstSquareSymbol === secondSquareSymbol &&
      firstSquareSymbol === thirdSquareSymbol ) {
        winner = player[firstSquareSymbol]
      }
  }

  const hasDraw = gameTurns.length === 9 && !winner

  function handleSelectActivePlayer(rowIndex, colIndex) {
    setGameTurns((prevTurn) => {
      
      const currentPlayer = deriveCurrentActivePlayer(prevTurn)

      const updatedTurns = [{square: {row: rowIndex, col: colIndex}, player: currentPlayer}, ...prevTurn]

      return updatedTurns
    })
  }

  function handleRestart() {
    setGameTurns([])
  }

  function onPlayerNameChange(symbol, name) {
    setPlayerName((prevName) => ({...prevName, [symbol]: name}))
  }

  return (
    <main>
      <div id="game-container"> 
        <ol id="players" className="highlight-player">
          <Player name="player 1" symbol="X" isActive={currentActivePlayer === 'X'} onSave={onPlayerNameChange} />
          <Player name="player 2" symbol="O" isActive={currentActivePlayer === 'O'} onSave={onPlayerNameChange} />
        </ol>
        {(winner || hasDraw) && <GameOver winner={winner} onRestart={handleRestart}/>}   
        <GameBoard onSelectSquare = {handleSelectActivePlayer} board={gameBoard}/>
      </div>
      <Logs turns={gameTurns}/>
    </main>
  )
}

export default App
