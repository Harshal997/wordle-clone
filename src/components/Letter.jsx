import React, {useContext, useEffect} from 'react'
import { AppContext } from '../App';

function Letter({letterPos, attemptVal}) {
    const { board, correctWord, currAttempt, disabledLetters, setDisabledLetters, almostLetters, setAlmostLetters, correctLetters, setCorrectLetters } = useContext(AppContext);
    const letter = board[attemptVal][letterPos];

    const correct = correctWord[letterPos] === letter;
    const almost = !correct && letter !== "" && correctWord.includes(letter);

    const letterState =
    currAttempt.attempt > attemptVal &&
    (correct ? 'correct' : almost ? 'almost' :'error');

    useEffect(() => {
      if(letter !== "" && !correct && !almost) {
        setDisabledLetters((prev) => [...prev, letter]);
      }
      if(almost) {
        setAlmostLetters((prev) => [...prev, letter]);
      }
      if(correct) {
        setCorrectLetters((prev) => [...prev, letter]);
      }
    },[currAttempt.attempt])

  return (
    <div className='letter' id={letterState}>{letter}</div>
  )
}

export default Letter
