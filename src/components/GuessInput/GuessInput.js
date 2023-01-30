import { useState } from "react"

const GuessInput = ({ listGuess, setListGuess, attempts, setAttempts }) => {
    const [guessWord, setGuessWord] = useState('')

    const handleSubmit = (event) => {
        event.preventDefault();
        if(guessWord.length < 5){
            window.alert('La palabra debe ser de 5 letras')
            return
        }
        console.log(guessWord)
        
        const newWord = {
            word: guessWord,
            id: Math.random()
        }
        const nextListGuess = [...listGuess, newWord]

        setListGuess(nextListGuess)
        setAttempts(attempts + 1)
        setGuessWord('')
    }
    return (
        <form
            className="guess-input-wrapper"
            onSubmit={handleSubmit}
            disabled
        >
        
            <label htmlFor="guess-input">Enter guess: </label>
            <input
                type="text"
                id="guess-input"
                value={guessWord}
                minLength={5}
                maxLength={5}
                onChange={
                    event => setGuessWord(event.target.value.toUpperCase())
                }
                disabled={attempts === 6 ? true : false}
            />
        </form>
    )
}

export default GuessInput