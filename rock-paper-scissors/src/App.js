import logo from './logo.svg';
import './App.css';

function App() {

  const setWindowVar = () => {
    window.windowVarSet = true;
  }





  return (
    <div className="App">
      <main className="App-body centre">
        <div id="rock" className="clickable-option centre" onClick={setWindowVar}>Rock</div>
        <div id="paper" className="clickable-option centre" onClick={setWindowVar}>Paper</div>
        <div id="scissors" className="clickable-option centre" onClick={setWindowVar}>Scissors</div>
      </main>
    </div>
  );
}

export default App;
