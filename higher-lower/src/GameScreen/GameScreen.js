import ActionButton from '../ActionButton/ActionButton';
import './GameScreen.css';
import HlLogoNav from '../Images/higher-lower-logo-lightMode-small.png';
import upArrow from '../Images/up-arrow-solid.png';
import upArrowHover from '../Images/up-arrow-solid-hover.png';
import downArrow from '../Images/down-arrow-solid.png';
import downArrowHover from '../Images/down-arrow-solid-hover.png';


function StartPage({
    exitGame, 
    score, 
    handleHigher, 
    handleLower, 
    previousNumber, 
    currentNumber, 
    currentCard, 
    previousCard, 
    result, 
    placeholderCard, 
    guessCard 
}){
    
    return ( 
        <div>
            <nav className="hl-game-nav-container">
                <div className="hl-game-nav-item">
                    <button className="hl-exit-game-btn clickable" onClick={exitGame}>Back to menu</button>
                </div>
                <div className="hl-game-nav-item">
                    <img src={HlLogoNav} alt="Higher or Lower logo" />
                </div>
                <div className="hl-game-nav-item hl-game-score-bg">
                    <h4 className="hl-game-score">Score: </h4>
                    <h4 className="hl-game-score-number">{score}</h4>
                </div>
            </nav>
            <main className="hl-game-main">
                <section className="hl-game-main-container">
                    <section className="hl-game-main-item">
                        <ActionButton
                        handleResult={handleHigher}
                        action="Higher"
                        icon={upArrow}
                        iconHover={upArrowHover}
                        />
                    </section>
                    <section className="hl-game-main-item hl-game-playing-cards">
                        {previousNumber === "" ? <img className="hl-card-secondary" src={placeholderCard} alt=""/> : <img className="hl-previous-card hl-card-secondary" src={previousCard} alt={`Playing card showing the current number: ${previousNumber}`}/>}

                        <img className={result === "win" ? "hl-card-win" : result === "lose" ? "hl-card-lose" : "hl-card-primary"} src={currentCard} alt={`Playing card showing the current number: ${currentNumber}`}/>
                    </section>
                    <section className="hl-game-main-item">
                        <ActionButton 
                        handleResult={handleLower}
                        action="Lower"
                        icon={downArrow}
                        iconHover={downArrowHover}
                        />
                    </section>
                </section>
                <section>
                    <p className="hl-game-title">Will it be <span>Higher</span> or <span>Lower</span>?</p>
                    <h1>{result}</h1>
                </section>
            </main>
        </div>
     );
};
 
export default StartPage;