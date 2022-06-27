import './App.css';

function App() {

  const userChoosesRock = () => {
    window.userChoice = "rock";
    console.log("You chose Rock");
  }

  const userChoosesPaper = () => {
    window.userChoice = "paper";
    console.log("You chose Paper");
  }

  const userChoosesScissors = () => {
    window.userChoice = "scissors";
    console.log("You chose Scissors");
  }

  return (
    <div className="App">
      <main className="App-body centre">
        <div id="rock" className="clickable-option centre" onClick={userChoosesRock}>Rock</div>
        <div id="paper" className="clickable-option centre" onClick={userChoosesPaper}>Paper</div>
        <div id="scissors" className="clickable-option centre" onClick={userChoosesScissors}>Scissors</div>
      </main>
    </div>
  );
}

export default App;
