import React from 'react';
import { Link } from "react-router-dom";

import './styles/Login.css';
import logo from './assets/logo.png';
import logoGmail from './assets/logoGmail.png';
import logoTwitter from './assets/logoTwitter.png';
import logoFacebook from './assets/logoFacebook.png';

const Login = () => {
    return ( 
        <>
            <div className="fondo">
            </div>
            <div className="logo">
                <img src={logo} alt="logo" />
            </div>
            <div className="container-login">
                <h2>Iniciar sesión</h2>
                <form className="login-inputs">
                    <input type="email" placeholder="Correo electrónico" required/>
                    <input type="password" placeholder="Contraseña" required/>
                    
                    <Link to="/recuperarContraseña">
                        <a href="#">¿Olvidó su contraseña?</a>
                    </Link>
                    
                    <Link to="/">
                        <button type="submit">Iniciar</button>
                    </Link>

                    
                    <p>¿No tienes cuenta?
                        <Link to="/registro">
                            <a href="#">Registrate aquí</a>
                        </Link>
                    </p>
                    <hr />
                </form>
                <div className="login-redes">
                    <img src={logoGmail} alt="Gmail" />
                    <img src={logoTwitter} alt="Twitter" />
                    <img src={logoFacebook} alt="Facebook" />

                </div>
            </div>
        </>
    );
}
 
export default Login;