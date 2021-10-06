import { useState, useReducer } from 'react';
import './App.css';
import ActionButton from '../ActionButton/ActionButton';

function App() {
  
  // Game structure:
  //   - player starts game by pressing start button
  //     - button generates random number on click and stores value in a variable
  //     - that variable value is displayed on the screen 

  //   - player can now decide if they want to go higher or lower 
  //     - lower button generates another random number 
  //       - if the new value is lower than the current value, player wins/continues
  //       - if the new number is higher than the current value, player loses and game ends
  //       - if the number is the same, try again
  //     - higher button generates another random number 
  //       - if the new value is higher than the current value, player wins/continues
  //       - if the new number is lower than the current value, player loses and game ends
  //       - if the number is the same, try again
  //     - game ends 
  //       - player can click button to play again 
  //         - game begins again 
  //         - resets all variables except for the high score 


  // Page structure:
  //   - Title
  //   - Game start button (disappear after clicked)
  //   - Number being displayed 
  //   - Higher/Lower buttons
  //   - Win/Lose announcement 
  //   - Winning streak/High score displayed
  //   - Previous numbers displayed 


  // Current number being displayed
  const [currentNumber, setCurrentNumber] = useState("");

  // New number being displayed
  const [newNumber, setNewNumber] = useState("");

  // Winning streak of current game
  const [winStreak, setWinStreak] = useState(0);

  // All previous numbers of the current game
  const [previousNumbers, setPreviousNumbers] = useState([]);
  
  // Result announcement after each round
  const [result, setResult] = useState("");

  const outcome = {
    win: "You win!",
    lose: "You lose!",
    draw: "It's a tie!",
  }


  const beginGame = () => {
    setCurrentNumber(Math.floor( Math.random() * 10 ) + 1);
  }

  const handleHigher = () => {
    setNewNumber(Math.floor( Math.random() * 10 ) + 1);
    if(newNumber > currentNumber){
      setResult(outcome.win)
      setWinStreak(winStreak => winStreak + 1);
      setCurrentNumber(newNumber);
    } else if (newNumber === currentNumber){
      setResult(outcome.draw)
      setCurrentNumber(newNumber);
    } else {
      setResult(outcome.lose)
      setCurrentNumber(newNumber);
    }
  }

  const handleLower = () => {
    setNewNumber(Math.floor( Math.random() * 10 ) + 1);
    if(newNumber < currentNumber){
      setResult(outcome.win)
      setWinStreak(winStreak => winStreak + 1);
      setCurrentNumber(newNumber);
    } else if (newNumber === currentNumber){
      setResult(outcome.draw);
      setCurrentNumber(newNumber);
    } else {
      setResult(outcome.lose)
      setCurrentNumber(newNumber);
    }
  }
  
  return (
    <div>
      <h1>Let's play Higher or Lower!</h1>
      <button onClick={beginGame}>Let's start!</button>
      <h1>{currentNumber}</h1>
      <h2>{result}</h2>
      <div>
        <ActionButton 
          handleResult={handleHigher}
          action="Higher"
        />
        <ActionButton 
          handleResult={handleLower}
          action= "Lower"
        />
      </div>
    </div>
  );
}

export default App;
