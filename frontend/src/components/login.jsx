import React, { useState } from 'react';
import styles from '../styles/Login.style.js';


export default function Login() {
  const [loginForm, setLoginForm] = useState({ username: '', password: '' });
  const [error, setError] = useState('');

  const handleLogin = (e) => {
    console.log('Login attempt:', e);

    e.preventDefault();
    if (loginForm.username === 'admin' && loginForm.password === '1234') {
      // setIsAuthenticated(true);
      // setCurrentView('products');
      setError('');
    } else {
      setError('Usuario o contraseña incorrectos');
    }
  };
  return (
    <div style={styles.loginContainer}>
      <div style={styles.loginBox}>
        <h2 style={styles.loginTitle}>Iniciar Sesión</h2>
        <div style={styles.formGroup}>
          <input
            type="text"
            placeholder="Usuario"
            value={loginForm.username}
            onChange={(e) => setLoginForm({...loginForm, username: e.target.value})}
            style={styles.input}
          />
        </div>
        <div style={styles.formGroup}>
          <input
            type="password"
            placeholder="Contraseña"
            value={loginForm.password}
            onChange={(e) => setLoginForm({...loginForm, password: e.target.value})}
            style={styles.input}
          />
        </div>
        <button onClick={handleLogin} style={styles.button}>
          Ingresar
        </button>
        {error && <p style={styles.error}>{error}</p>}
        <p style={styles.hint}>Usuario: admin | Contraseña: 1234</p>
      </div>
    </div>
  );
}

