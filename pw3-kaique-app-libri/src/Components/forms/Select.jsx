import styles from './Select.module.css'

function Select(type,Text, name) {

    return(

        <div className={styles.form_control}>

        <label htmlFor={name}> {Text}</label>
        <select name={name} id={name}>
            <Option>Selecione uma categoria</Option>
            <Option>Ficção cientifca</Option>
            <Option>Fantasia Heóica</Option>
            <Option>Suspense</Option>
            <Option>Terror</Option>

        </select>
        </div>
    )
}

export default Select
