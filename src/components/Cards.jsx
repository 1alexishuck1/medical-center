import React from 'react';
import './styles/Cards.css';

const Cards = () => {
    return ( 
        <div className="contenedor-cards">
                
            <div className="cards">
                <a href="#">
                    <h3>Profesionales</h3>
                </a>
            </div>
        
            <div className="cards">
                <a href="#">
                    <h3>Noticias e Info</h3>
                </a>
            </div>

            <div className="cards">
                <a href="#">
                    <h3>Contacto</h3>
                </a>
            </div>

            <div className="cards">
                <a href="#">
                    <h3>Historia Clínica</h3>
                </a>
            </div>

            <br/>
            <br/>
            <br/>
        </div>
    );
}
 
export default Cards;