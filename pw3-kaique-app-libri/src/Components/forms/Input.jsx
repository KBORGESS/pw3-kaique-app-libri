import styles from './Input.module.css'
function Input ({type, text, name, placeHolder}){
    return
    (
        <div className={styles.from_crontrol}>
            <label htmlFor={name}>{text}</label>
            <Input
             type={type}
             name={name}
             id={name}
             placeHolder={placeHolder} />
             
        </div>
    )
}

export default Input