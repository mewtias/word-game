import React, { useState } from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';

import GuessInput from '../GuessInput';
import GuessResults from '../GuessResults';
import WonBanner from '../WonBanner/WonBanner';
import LoseBanner from '../LoseBanner';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [statusGame, setStatusGame] = useState('running')
  const [attempts, setAttempts] = useState(0)
  const [listGuess, setListGuess] = useState([

  ])

  return (
    <>
      <GuessResults listGuess={listGuess} answer={answer} setStatusGame={setStatusGame} />
      <GuessInput attempts={attempts} setAttempts={setAttempts} listGuess={listGuess} setListGuess={setListGuess} />
      {statusGame === 'won' && (
        <WonBanner attempts={attempts}/>
      )}
      {statusGame === 'lost' && (
        <LoseBanner answer={answer} />
      )}
    </>
  )
}

export default Game;
