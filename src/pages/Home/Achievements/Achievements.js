import React from 'react';
import './Achievements.css';

const Achievements = () => {
    return (
        <div id="achievements">
            <h1 className="my-5">📜Our Achievements📜</h1>
           <div className="achievements-container d-flex justify-content-between">
           <div>
                <h1>40+</h1>
                <h3>Professional Tour Guides</h3>
            </div>
            <div>
                <h1>100%</h1>
                <h3>Trusted Travel Agency</h3>
            </div>
            <div>
                <h1>10+</h1>
                <h3>Years Of Experience</h3>
            </div>
            <div>
                <h1>90k+</h1>
                <h3>Happy Customers</h3>
            </div>
           </div>
        </div>
    );
};

export default Achievements;