const StartPage = (props) => {
    return ( 
        <div>
            <header>
                <h1>Higher or Lower</h1>
            </header>
            <section>
                <button onClick={props.startGame}>Play</button>
            </section>
        </div>
     );
};
 
export default StartPage;