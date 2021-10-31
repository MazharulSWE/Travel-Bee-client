import React from 'react';
import Achievements from '../Achievements/Achievements';
import Banner from '../Banners/Banner';
import Packages from '../Packages/Packages';
import Popular from '../Popular/Popular';

const Home = () => {
    return (
        <div id="home">
            <Banner></Banner>
            <Packages></Packages>
            <Achievements></Achievements>
            <Popular></Popular>
        </div>
    );
};

export default Home;