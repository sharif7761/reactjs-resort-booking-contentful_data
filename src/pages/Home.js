import React, { Fragment } from 'react';
import Hero from '../components/Hero';
import Banner from '../components/Banner';
import { Link } from 'react-router-dom';

import Services from '../components/Services';
import FeaturedRooms from '../components/FeaturedRooms'


const Home = () => {
    return (
    <Fragment>
    <Hero>
        <Banner title="luxurious rooms" subtitle="deluxe rooms starts at $200">
            <Link to="/rooms" className="btn-primary" >
                our rooms
            </Link>
            
        </Banner>
    </Hero> 
     
    <Services></Services>
    
    <FeaturedRooms></FeaturedRooms>

    
    </Fragment>
    );
    
};

export default Home;