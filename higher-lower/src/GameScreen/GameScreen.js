import ActionButton from '../ActionButton/ActionButton';
import './GameScreen.css';
import HlLogoNav from '../Images/higher-lower-logo-lightMode-small.png';
import upArrow from '../Images/up-arrow-solid.png';
import upArrowHover from '../Images/up-arrow-solid-hover.png';
import downArrow from '../Images/down-arrow-solid.png';
import downArrowHover from '../Images/down-arrow-solid-hover.png';


function StartPage(props){
    
    return ( 
        <div>
            <nav className="hl-game-nav-container">
                <div className="hl-game-nav-item">
                    <button className="hl-exit-game-btn clickable" onClick={props.exitGame}>Back to menu</button>
                </div>
                <div className="hl-game-nav-item">
                    <img src={HlLogoNav} alt="Higher or Lower logo" />
                </div>
                <div className="hl-game-nav-item hl-game-score-bg">
                    <h4 className="hl-game-score">Score: </h4>
                    <h4 className="hl-game-score-number">{props.score}</h4>
                </div>
            </nav>
            <main className="hl-game-main">
                <section className="hl-game-main-container">
                    <section className="hl-game-main-item">
                        <ActionButton
                        handleResult={props.handleHigher}
                        action="Higher"
                        icon={upArrow}
                        iconHover={upArrowHover}
                        />
                    </section>
                    <section className="hl-game-main-item hl-game-playing-cards">
                        {props.previousNumber === "" ? <img className="hl-card-secondary" src={props.placeholderCard} alt=""/> : <img className="hl-previous-card hl-card-secondary" src={props.previousCard} alt={`Playing card showing the current number: ${props.previousNumber}`}/>}
                        <img className={props.result === "win" ? "hl-card-win" : props.result === "lose" ? "hl-card-lose" : "hl-card-primary"} src={props.currentCard} alt={`Playing card showing the current number: ${props.currentNumber}`}/>
                        <img className="hl-next-card hl-card-secondary" src={props.guessCard} alt="Playing card showing the current number"/>
                    </section>
                    <section className="hl-game-main-item">
                        <ActionButton 
                        handleResult={props.handleLower}
                        action= "Lower"
                        icon={downArrow}
                        iconHover={downArrowHover}
                        />
                    </section>
                </section>
                <section>
                    <p className="hl-game-title">Will it be <span>Higher</span> or <span>Lower</span>?</p>
                </section>
            </main>
        </div>
     );
};
 
export default StartPage;