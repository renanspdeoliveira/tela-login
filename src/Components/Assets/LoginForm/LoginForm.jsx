import React from 'react';
import './LoginForm.css';
import { FaUser, FaLock } from "react-icons/fa";


const LoginForm = () => {
    return (
        <div className='wrapper'>
            <form action="">
                <h1>Login</h1>
                <div className="input-box">
                    <input type="text" placeholder='Usuário:' required />
                    <FaUser className='icon' />
                </div>
                <div className="input-box">
                    <input type="password" placeholder='Senha' required />
                    <FaLock className='icon' />
                </div>

                <div className="remember-forgot">
                    <label><input type="checkbox" />Lembrar-me</label>
                    <a href="#">Esqueci minha senha</a>
                </div>

              <a href="work.jsx"> <button type="submit">Login  </button> </a>

                <div className="register-link">
                    <p>Não tem conta? <a href="">Registrar-se</a></p>
                </div>


            </form>
        </div>
    )
}

export default LoginForm
