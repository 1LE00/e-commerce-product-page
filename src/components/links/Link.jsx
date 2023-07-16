function Link(props){
    return (
        <a href={props.href} id={props.id}>{props.name}</a>
    )
}

export default Link;