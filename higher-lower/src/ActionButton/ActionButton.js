import './ActionButton.css';

export default function ActionButton(props) {

    return (
            <button className={`${props.action} hl-game-action-button`} onClick={props.handleResult}>
                <img className="hl-game-button-arrow clickable" src={props.icon} alt={`Arrow placed within the ${props.action} button`}/>
                {props.action}
            </button>
    )
}