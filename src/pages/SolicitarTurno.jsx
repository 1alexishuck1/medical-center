import React, {useState} from 'react';
import Calendario from '../components/Calendario';
import Footer from '../components/Footer';
import HeaderFuncional from '../components/HeaderFuncional';


const SolicitarTurno = () => {

    return ( 
        <>
            <HeaderFuncional />
            <br/><br/><br/><br/><br/><br/>
            <Calendario />
            <br/><br/><br/><br/><br/><br/>
            <Footer />
        </>
    );
}
 
export default SolicitarTurno;