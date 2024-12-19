'use client';
import { FormEvent, ReactElement, useEffect, useState } from "react";
import styles from "../styles/login.module.css";
import { useRouter } from "next/navigation";
import { parseCookies, setCookie } from "nookies";
import { ApiURL } from "../config";

export default function Login(): ReactElement {

  const router = useRouter();
  useEffect(() => {
    const { 'restaurant-token': token } = parseCookies();
    if (token) {
      router.push('/login');
    }
  }, []);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [erro, setError] = useState('');

  interface ResponseSignin {
    erro: boolean;
    mensagem: string;
    token?: string;
  }


  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch(`${ApiURL}/auth/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      if (response) {
        const data: ResponseSignin = await response.json();
        const { erro, mensagem, token = '' } = data;

        if (erro) {
          setError(mensagem); 
        } else {
          setCookie(undefined, 'restaurant-token', token, {
            maxAge: 60 * 60 * 1, 
          });
        }
      }
    } catch (error) {
      console.error('Erro na requisição', error);
    }
  };

  return (
    <>
      <div className={styles.container}>
        <form className={styles.loginForm} onSubmit={handleSubmit}>
          <h1 className={styles.titulo}>ACESSE SUA CONTA</h1>

          {erro && <div className={styles.error}>{erro}</div>}

          <div className={styles.formGroup}>
            <label htmlFor="email" className={styles.titulo2}>Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={styles.input}
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="password" className={styles.titulo2}>Senha</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className={styles.input}
            />
          </div>

          <div className={styles.formGroup}>
            <button type="submit" className={styles.submitButton}>Acessar Conta</button>
          </div>

          <div className={styles.formGroup}>
            <a href="/" className={styles.link}>Esqueceu a password?</a>
          </div>

          <div className={styles.formGroup}>
            <button 
              type="button" 
              className={styles.cadastroButton}
              onClick={() => router.push('/cadastrar')}
            >
              Não tem conta? Cadastre-se!
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
