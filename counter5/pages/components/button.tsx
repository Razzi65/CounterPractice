
type ButtonType = {
    name:string,
    increment:()=>void
}


const Button = (props:ButtonType) => {
    return (
        <button onClick={props.increment}> {props.name} </button>
        )
}

export default Button