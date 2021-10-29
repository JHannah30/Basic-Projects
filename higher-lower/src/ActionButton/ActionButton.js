import './ActionButton.css';

export default function ActionButton(props) {

    return (
        <button className={props.action} onClick={props.handleResult}>{props.action}</button>
    )
}