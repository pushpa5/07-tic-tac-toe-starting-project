import { useState } from "react"

export default function Player({ name, symbol, isActive, onSave }) {
    const [playerName, setPlayerName] = useState(name)
    const [isEditing, setIsEditing] = useState(false)

    function handleOnChange(event) {
        setPlayerName(event.target.value)
        if(isEditing) {
            onSave(symbol, playerName)
        }
    }

    return (
        <li className={isActive ? 'active' : ''}>
            <span className="player">
                {isEditing ?
                    <input
                        type="text"
                        required
                        value={playerName}
                        onChange={handleOnChange}
                    /> :
                    <span className="player-name">{playerName}</span>}
                <span className="player-symbol">{symbol}</span>
            </span>
            <button onClick={() => setIsEditing((wasEditing) => !wasEditing)}>{isEditing ? 'Save' : 'Edit'}</button>
        </li>
    )
}