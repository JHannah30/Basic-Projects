import Logo from '../Images/higher-lower-logo.png';
import './StartScreen.css';

function StartPage(props){
    return ( 
        <div className="hl-start-container">
            <section className="hl-start-body">
                <section className="hl-start-item">
                    <img className="hl-logo" src={Logo} alt="higher or lower game logo" />
                </section>
                <section className="hl-start-item">
                    <button className="hl-start-button" onClick={props.startGame}>Play</button>
                </section>
            </section>
        </div>
     );
};
//test
 
export default StartPage;