import ActionButton from '../ActionButton/ActionButton';
import './GameScreen.css';


function StartPage(props){
    
    return ( 
        <div>
            <nav className="hl-exit" onClick={props.exitGame}>
                <button className="hl-exit-game-button">Back</button>
            </nav>
            <section className="hl-game-container">
                <section className="hl-game-body">
                    <h2>{props.currentNumber}</h2>
                    {props.previousNumber === "" ? null : <img className="hl-previous-card" src={props.previousCard} alt="Playing card showing the previous number"/>}
                    <img className="hl-current-card" src={props.currentCard} alt="Playing card showing the current number"/>
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