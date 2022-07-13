import React, { useContext } from 'react'
import { AppContext } from '../App'


function GameOver() {
    const {gameOver, currAttempt, correctWord} = useContext(AppContext);
  return (
    <div className='gameOver'>
        <h3>{gameOver.guessedWord ? "You Guessed it!" : "You failed to guess the word!"}</h3>
        <h1>Correct word: {correctWord}</h1>
        {gameOver.guessedWord && (<h3>No. of attemps: {currAttempt.attempt}</h3>)}
    </div>
  )
}

export default GameOver