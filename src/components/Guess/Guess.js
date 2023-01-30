import { range } from "../../utils"
import {checkGuess} from "../../game-helpers"

const Guess = ({ guess, answer, setStatusGame }) => {

    if (guess) {
        const checkWord = checkGuess(guess.word, answer);
        if(answer === guess.word){
            setStatusGame('won')
        }
        console.log(checkWord)
        return (
            <p className="guess">
                {range(5).map(cell => (
                    <span key={Math.random()} className={`cell ${checkWord[cell].status}`}>{guess.word[cell]}</span>
                ))}
            </p>
        )
    }else{
        return (
            <p className="guess">
                {range(5).map(cell => (
                    <span key={Math.random()} className="cell"></span>
                ))}
            </p>
        )
    }

}

export default Guess