import React from 'react';

import Cards from '../components/Cards';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Slider from '../components/slider/Slider';

const Home = () => {

    return ( 
        <>
        <Header />
        <Slider />
        <Cards />
        <Footer />
        </>
    );
}
 
export default Home;