import React from 'react';
import { Link } from "react-router-dom";

import logo from './assets/logo.png';
import './styles/RecuperarContraseña.css';

const RecuperarContraseña = () => {
    return ( 
        <>
            <div className="fondo">
            </div>
            <div className="logo">
                <img src={logo} alt="logo" />
            </div>

            <div className="button-volver">
                <Link to="/login">
                    <button><i class="fas fa-chevron-left"></i> Volver</button>
                </Link>
            </div>

            <div className="container-recuperar">
                <h2>Recuperar contraseña</h2>
                <form className="recuperar-inputs">
                    <input type="email" placeholder="Correo electrónico" required/>
                
                    <Link to="codigoRecuperar">
                        <button type="submit">Siguiente</button>
                    </Link>

                </form>
            </div>
        </>
    );
}
 
export default RecuperarContraseña;