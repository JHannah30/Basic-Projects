import { useState } from 'react';
import './App.css';
import StartScreen from '../StartScreen/StartScreen';
import GameScreen from '../GameScreen/GameScreen';

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

  // Logic to determine which screen should be displayed
  const [hideGameScreen, setHideGameScreen] = useState(true);

  // 
  const [screenTransition, setScreenTransition] = useState(false);

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
    win: "Correct.",
    lose: "Wrong.",
    draw: "Try again.",
  }
  
  const handleScreenTransition = () => {
    setScreenTransition(true);
  }

  // When the 'start' button is clicked, the start screen begins to fade out and the game screen fades in. A random number is also generated.
  const handleGameStart = () => {
    handleScreenTransition();
    setTimeout(() => {
      setHideGameScreen(false)
    }, 1500);
    setCurrentNumber(getRandomNumber());
  }

  const getRandomNumber = () => {
    return Math.floor( Math.random() * 10 ) + 1;
  }
  
  function handleHigher() {
    setNewNumber(getRandomNumber());
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

  function handleLower(){
    setNewNumber(getRandomNumber());
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
    <div className={screenTransition === true? "fadeOutAndIn" : null}>
      {hideGameScreen === true ? 
      <StartScreen startGame={handleGameStart} /> :
      <GameScreen 
        currentNumber={currentNumber}
        result={result}
        handleHigher={handleHigher}
        handleLower={handleLower}
      />}
    </div>
  );
}

export default App;