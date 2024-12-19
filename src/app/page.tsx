'use client';
import styles from './styles/page.module.css';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function Home() {
  const [user, setUser] = useState(true); 
  const route = useRouter();
  

  if (user) {
    return (
      <div className={styles.container}>
        <div className={styles.page}>
          <main className={styles.main}>
          <h1>Restaurante Pé na Chapa</h1>
            <h2>acesse seu perfil:</h2>
            <div className={styles.buttonGroup}>
              <button
                className={styles.loginButton}
                onClick={() => setUser(false)}  
>
                Usuario
              </button>
            </div>
          </main>
        </div>
      </div>
    );
  } else {
    return (
      <div className={styles.container}>
        <div className={styles.page}>
          <main className={styles.main}>
          <h1>Restaurante Pé na Chapa</h1>
            <div className={styles.buttonGroup}>
              <button
                className={styles.loginButton}
                onClick={() => setUser(true)}>
                Voltar
              </button>
              <button
                className={styles.loginButton}
                onClick={() => route.push('/login')}>
                Perfil
              </button>
            </div>
          </main>
        </div>
      </div>
    );
  }
}
