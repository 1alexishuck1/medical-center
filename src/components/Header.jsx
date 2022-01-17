import React, {useState} from 'react';
import './styles/Header.css';
import userLogo from './assets/user.png';
import MenuDesplegable from './MenuDesplegable';
import logo from './assets/logo.png';
import { Link } from 'react-router-dom';


const Header = () => {

    let [menu, setMenu] = useState(false);
    
    return (
        <>
        <div className="contenedor-header">
            <div className="header-logo">
                <img src={logo} />
            </div>

            <div className="header-links">
                <Link to="/">
                    <a href="#">Inicio</a>
                </Link>
                <Link to="/solicitarTurno">
                    <a href="#">Solicitar turnos</a>
                </Link>
                <Link to="/misTurnos">
                    <a href="#">Mis turnos</a>
                </Link>
            </div>

            <div className="header-user">
                <img src={userLogo} onClick={() => setMenu(menu = !menu)} />  
            </div>
            {menu && <MenuDesplegable />} 
        </div>
        </>
     );
}
 
export default Header;