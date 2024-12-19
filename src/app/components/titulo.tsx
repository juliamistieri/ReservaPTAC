type TituloProp = {
    titulo: string,
    numero: number,
    funcao: () => void
}
const Titulo: React.FC<TituloProp> = ({titulo, numero}) => {
    return (<h1>{titulo}{numero - 2}</h1>)
}
export default Titulo;