import './Button.css'
const Button = (props) =>{
    return (
        <button>{props.title} <img src={props.link}/></button>
    )
}

export default Button;