import Icon from "../icons/Icon";

function Button(props) {
    return (
        <button className={props.className && `${props.className}`} onClick={props.increase || props.decrease || props.add || props.previous || props.next}>
            <Icon src={props.src} id={props.id} alt={props.alt} title={props.title} />
            {props.name && <span className="btn-text">{props.name}</span>}
        </button>
    )
}

export default Button;