export default function GameBoard({onSelectSquare, board}) {
  
    // const [gameBoard, setUpdatedBoard] = useState(initialGameBoard)

    // function handleSelectSquare(rowIndex, colIndex) {
    //     setUpdatedBoard((prevBoard) => {
    //         const updatedGameBoard = [...prevBoard.map((innerArray) => [...innerArray])]
    //         updatedGameBoard[rowIndex][colIndex] = activePlayerSymbol
    //         return updatedGameBoard
    //     } )
    //     onSelectSquare()

    // }

    return (
        <ol id="game-board">
            {board?.map((row, rowIndex) => <li key={rowIndex}>
                <ol>
                    {row.map((userSymbol, colIndex) => <li key={colIndex}>
                        <button 
                        onClick={() => onSelectSquare(rowIndex, colIndex)}
                        disabled={userSymbol !== null ? true : false}>
                            {userSymbol}
                        </button>
                    </li>)}
                </ol>
            </li>)}
        </ol>
    )
}