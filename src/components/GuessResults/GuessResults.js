import { range } from './../../utils'
import { NUM_OF_GUESSES_ALLOWED } from '../../constants'
import Guess from '../Guess/Guess'

const GuessResults = ({ listGuess, answer, setStatusGame }) => {
    
    return (
        <>
            {listGuess &&
                <div className="guess-results">
                    {range(NUM_OF_GUESSES_ALLOWED).map(row => (
                        <Guess key={Math.random()} setStatusGame={setStatusGame} guess={listGuess[row]} answer={answer}/>
                    ))}
                </div>
            }
        </>
    )
}

export default GuessResults