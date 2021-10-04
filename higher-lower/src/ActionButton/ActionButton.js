import './ActionButton.css';

export default function ActionButton(props) {

    return (
        <button onClick={props.handleResult}>{props.action}</button>
    )
}