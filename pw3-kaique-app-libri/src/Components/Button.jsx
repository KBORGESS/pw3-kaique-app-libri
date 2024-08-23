import style from './Button.modules.css'

const Button = ({label})=> {
    return(
        <div>
            <Button className= {style.buttonContainer}>{label}</Button>
            
        </div>
    )
}

export default Button;