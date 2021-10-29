import ActionButton from '../ActionButton/ActionButton';
import './GameScreen.css';
import HlLogoNav from '../Images/higher-lower-logo-lightMode-small.png';

function StartPage(props){

    let buttonText = "Back to menu";
    
    return ( 
        <div>
            <nav className="hl-game-nav-container">
                <div className="hl-game-nav-item">
                    <button className="hl-exit-game-button" onClick={props.exitGame}>{buttonText}</button>
                </div>
                <div className="hl-game-nav-item">
                    <img src={HlLogoNav} alt="Higher or Lower logo" />
                </div>
                <div className="hl-game-nav-item hl-game-score-bg">
                    <h4 className="hl-game-score">Score:</h4>
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