import styles from "../styles/login.module.css"

type ButtonProp = {
    button : string,
    funcao: () => void /* uma função sem retorno */
}
const Button: React.FC<ButtonProp> = ({button, funcao}) => {
    return (
    <button className={styles.funcao} onClick={funcao}> {button} </button>
    )
};
export default Button;