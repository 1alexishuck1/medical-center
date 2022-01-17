import React from 'react';
import logo from './assets/logo.png';
import './styles/CodigoRecuperar.css';
import { Link } from "react-router-dom";

const CodigoRecuperar = () => {
    return ( 
        <>
            <div className="fondo">
            </div>
            <div className="logo">
                <img src={logo} alt="logo" />
            </div>

            <div className="button-volver">
                <Link to="/recuperarContraseña">
                    <button><i class="fas fa-chevron-left"></i> Volver</button>
                </Link>
            </div>

            <div className="container-recuperar">
                <h2>Recuperar contraseña</h2>
                <form className="recuperar-inputs">
                    <input type="text" placeholder="Código" required/>
                
                    <a href="#">Reenviar código</a>
                    <a href="#">Modificar correo electrónico</a>

                    <button type="submit">Siguiente</button>

                </form>
            </div>
        </>
    );
}
 
export default CodigoRecuperar;