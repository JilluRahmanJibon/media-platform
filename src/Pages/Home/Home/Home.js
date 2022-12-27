import React from 'react';
import Teams from '../../Teams/Teams';
import Banner from '../Banner/Banner';

const Home = () => {
    return (
        <div className='mt-8'>
            <Banner />
            <Teams/>
        </div>
    );
};

export default Home;