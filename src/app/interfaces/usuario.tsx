interface Usuario {
    id?: number,
    nome: string,
    email?: string,
    password: string,
    tipo: string
}

/* const PerfilUsuario: React.FC<{ usuario: Usuario }>
= ({ usuario }) => {
    return (
        <div>
            <h1>Perfil Usuário</h1>
            <p>Nome: {usuario.nome}</p>
            <p>Idade: {usuario.idade}</p>
            {usuario.email && <p>Email: {usuario.email}</p>}
        </div>
    )
}; 

export default PerfilUsuario; */

export default Usuario;