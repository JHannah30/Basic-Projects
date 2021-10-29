import ActionButton from '../ActionButton/ActionButton';
import './GameScreen.css';

function StartPage(props){
    
    return ( 
        <div>
            <nav className="hl-game-nav-container" onClick={props.exitGame}>
                <div className="hl-game-nav-item">
                    <button className="hl-exit-game-button">Back</button>
                </div>
                <div className="hl-game-nav-item">
                    <h4>Score: {props.score}</h4>
                </div>
            </nav>
            <section className="hl-game-container">
                <section className="hl-game-body">
                    <h2>{props.currentNumber}</h2>
                    {props.previousNumber === "" ? null : <img className="hl-previous-card hl-card-secondary" src={props.previousCard} alt={`Playing card showing the current number: ${props.previousNumber}`}/>}
                    <img className={props.result === "win" ? "hl-card-win" : props.result === "lose" ? "hl-card-lose" : "hl-card-primary"} src={props.currentCard} alt={`Playing card showing the current number: ${props.currentNumber}`}/>
                    <img className="hl-next-card hl-card-secondary" src={props.nextCard} alt="Playing card showing the current number"/>
                    <span>{props.result}</span>
                    <div>
                        <ActionButton 
                        handleResult={props.handleHigher}
                        action="Higher"
                        />
                        <ActionButton 
                        handleResult={props.handleLower}
                        action= "Lower"
                        />
                    </div>
                </section>
            </section>
        </div>
     );
};
 
export default StartPage;