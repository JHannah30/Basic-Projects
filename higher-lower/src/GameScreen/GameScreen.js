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