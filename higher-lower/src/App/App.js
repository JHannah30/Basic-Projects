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

  // Hide/Show game screen
  const [hideGameScreen, setHideGameScreen] = useState(true);

  // Triggers CSS transitioning to move between pages
  const [screenTransition, setScreenTransition] = useState(false);

  const [currentNumber, setCurrentNumber] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [previousNumbers, setPreviousNumbers] = useState([]);
  const [winStreak, setWinStreak] = useState(0);
  
  // Result announcement after each round
  const [result, setResult] = useState("");
  const outcome = {
    win: "Correct.",
    lose: "Wrong.",
    draw: "Try again.",
  }
  
  // Triggers CSS transitioning to move between pages
  const handleScreenTransition = () => {
    setScreenTransition(true);
  }


  const handleGameReset = () => {
    setCurrentNumber("");
    setNewNumber("");
    setPreviousNumbers("");
    setWinStreak("");
  }

  // When the 'start' button is clicked, the start screen begins to fade out and the game screen fades in. A random number is also generated.
  const handleGameStart = () => {
    handleScreenTransition();
    setTimeout(() => {
      setHideGameScreen(false)
    }, 1500);
    setCurrentNumber(getRandomNumber());
  }

  // When user exits the game by clicking the 'back' button, the game screen fades out, the game is reset and the start screen is visible again
  const handleGameExit = () => {
    handleScreenTransition();
    setTimeout(() => {
      setHideGameScreen(true)
    }, 1500);
    handleGameReset();
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
        exitGame={handleGameExit}
      />}
    </div>
  );
}

export default App;