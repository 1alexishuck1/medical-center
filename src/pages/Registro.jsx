import React from 'react';
import './styles/Registro.css';
import logo from './assets/logo.png';

const Registro = () => {
    return (
        <>
            <div className="fondo">
            </div> 
            <div className="logo">
                <img src={logo} />
            </div>
            <div className="container-registro">
                <h2>Registro</h2>
                <form className="registro-inputs">
                    <input type="text" placeholder="Nombre" required/>
                    <input type="text" placeholder="Apellido" required/>
                    <input type="email" placeholder="Correo electrónico" required/>
                    <input type="password" placeholder="Contraseña" required/>
                    <input type="password" placeholder="Repetir contraseña" required/>
                    <select>
                        <option>Género</option>
                        <option>Masculino</option>
                        <option>Femenino</option>
                        <option>Otro</option>
                    </select>
                    <input type="date" />
                    <input type="text" placeholder="D.N.I." />
                    <input type="tel" placeholder="Teléfono" />
                    <input type="text" placeholder="Factor sanguíneo" />

                    <button type="submit">Crear cuenta</button>
                </form>
            </div>
        </>
    );
}
 
export default Registro;