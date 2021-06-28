import {useState} from "react"

export default function EmojiPicker() : JSX.Element {
    const [currentEmoji,setCurrentEmoji] = useState("")
    const [previousEmoji,setPreviousEmoji] = useState("")

    const handleBedEmoji = () => {setCurrentEmoji("🛏️")}
    const handleEggEmoji = () => {setCurrentEmoji("🍳")}
    const handleClockEmoji = () => {setCurrentEmoji("⏰")}
    const handleCutleryEmoji = () => {setCurrentEmoji("🍴")}
    const handleFaceEmoji = () => {setCurrentEmoji("😋")}

    const handleStorePrevious = () => {setPreviousEmoji(currentEmoji)}

    return(
        <>
        <h1>Emoji Picker</h1>
        <p>Previous Emoji: {previousEmoji}</p>
        <p>Chosen Emoji: {currentEmoji}</p>
        <div onClick={handleStorePrevious}>
        <button onClick={handleBedEmoji}>🛏️</button>
        <button onClick={handleEggEmoji}>🍳</button>
        <button onClick={handleClockEmoji}>⏰</button>
        <button onClick={handleCutleryEmoji}>🍴</button>
        <button onClick={handleFaceEmoji}>😋</button>
        </div>
        </>
    )
}