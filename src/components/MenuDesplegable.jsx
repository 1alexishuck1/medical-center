import React from 'react';
import './styles/MenuDesplegable.css';

const MenuDesplegable = () => {
    return (
        <>
            <div className="container-menuDesplegable">
                <ul>
                    <li><a href="#">Cuenta</a></li>
                    <li><a href="#">Ayuda</a></li>
                    <li><a href="#">Cerrar sesión</a></li>
                </ul>
            </div>
            <div className="fondo-desplegable"></div>
        </>
    );
}
 
export default MenuDesplegable;