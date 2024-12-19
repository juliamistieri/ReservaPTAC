'use client'
import styles from "../styles/cadastrar.module.css"
import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import Usuario from "../interfaces/usuario";
import { ftruncate } from "fs";
import { ApiURL } from "../config";


export default function Cadastrar() {

const [usuario, setUsuario] = useState<Usuario>({
  nome: '',
  email: '',
  password: '',
  tipo: "cliente"
})

const router = useRouter();

const alterarNome = (novoNome: string) => {
  setUsuario((valoresAnteriores) => ({
    ...valoresAnteriores,
    nome: novoNome
  }))
}

const alterarEmail = (novoEmail: string) => {
  setUsuario((valoresAnteriores) => ({
    ...valoresAnteriores,
    email: novoEmail
     
  }))
}

const alterarSenha = (novoPassword: string) => {
  setUsuario((valoresAnteriores) => ({
    ...valoresAnteriores,
    password: novoPassword
     
  }))
}

async function handleSubmit(e : FormEvent){
  e.preventDefault()
  console.log(usuario)
  const response = await fetch(`${ApiURL}/auth/cadastro`, {
    method: "POST",
    body: JSON.stringify(usuario)
  })  

  if(response){
    const data = await response.json()
    console.log(data)
  }
}

//const handleLoginClick = () => {
//  router.push('/login');
//};

return (
  <div className={styles.container}>
    <form className={styles.formulario} onSubmit={handleSubmit}>
      <div className={styles.formGroup}>
        <label htmlFor="nome" className={styles.label}>Nome:</label>
        <input
          type="text"
          id="nome"
          value={usuario.nome}
          onChange={(e) => alterarNome(e.target.value)}
          required
          className={styles.input}
        />
      </div>

      <div className={styles.formGroup}>
        <label htmlFor="email" className={styles.label}>Email:</label>
        <input
          type="email"
          id="email"
          value={usuario.email}
          onChange={(e) => alterarEmail(e.target.value)}
          required
          className={styles.input}
        />
      </div>

      <div className={styles.formGroup}>
        <label htmlFor="senha" className={styles.label}>Senha:</label>
        <input
          type="password"
          id="senha"
          value={usuario.password}
          onChange={(e) => alterarSenha(e.target.value)}
          required
          className={styles.input}
        />
      </div>

      <button type="submit" className={styles.submitButton}>Cadastrar</button>

      <div className={styles.formGroup}>
            <a href="/login" className={styles.link}>Já possui uma conta? Faça login</a>
          </div>
    </form>
  </div>
);


}