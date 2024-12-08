import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";

import './Login.css';

const container = document.getElementById('container');

export default function Login() {
  const navigate = useNavigate();
  const [validate, setValidate] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    const regex = /\S+@\S+\.\S+/;
    const magicNumber = 6;
    if (regex.test(email) && password.length > magicNumber) {
      setValidate(false);
    } else {
      setValidate(true);
    }
  }, [email, password]);

  const saveUser = () => {
    localStorage.setItem("user", JSON.stringify({ email }));
    navigate('/dashboard');
  };

  return (
    <section className='login-page'>
      <div class="container" id="container">
        <div class="form-container sign-up">
          <form>
            <h1>Crie Uma Conta</h1>
            <span>Ou use seu email para registrar</span>
            <input type="text" placeholder="Nome" />
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Senha" />
            <button>Registrar</button>
          </form>
        </div>
        <div class="form-container sign-in">
          <form>
            <h1>Entrar</h1>
            <span>Ou use sua conta de email e senha</span>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={({ target }) => setEmail(target.value)}
            />
            <input
              type="password"
              placeholder="Senha"
              value={password}
              onChange={({ target }) => setPassword(target.value)}
            />
            <a href="#">Esqueceu sua senha?</a>
            <button
              type='submit'
              disabled={validate}
              onClick={saveUser}
            >
              Entrar
            </button>
          </form>
        </div>
        <div class="toggle-container">
          <div class="toggle">
            <div class="toggle-panel toggle-left">
              <h1>Bem Vindo De Volta</h1>
              <p>Insira seus dados para utilizar nosso site</p>
              <button
                class="hidden"
                id="login"
                onClick={() => container.classList.remove('active')}
              >
                Entrar
              </button>
            </div>
            <div class="toggle-panel toggle-right">
              <h1>Ola, Amigo!</h1>
              <p>Registre seus dados para utilizar nosso site</p>
              <button
                class="hidden"
                id="register"
                onClick={() => container.classList.add('active')}
              >Registrar
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
