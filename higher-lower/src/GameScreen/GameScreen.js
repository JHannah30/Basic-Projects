import ActionButton from '../ActionButton/ActionButton';

function StartPage(props){
    return ( 
        <div>
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
        </div>
     );
};
 
export default StartPage;