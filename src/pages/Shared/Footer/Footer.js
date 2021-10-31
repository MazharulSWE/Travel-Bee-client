import React from 'react';
import './Footer.css';

const Footer = () => { 
    return (
        <div id="footer" collapseOnSelect expand="lg">
            <h2>JOIN OUR FREE NEWSLETTER</h2>
            <p>Have a safe tour with travelBee</p>
            <input type="text" placeholder="Email" />
            <button>Subscribe</button>
            <p>Copyright © 2021 TravelBee All Rights Reserved.</p>
        </div>
    );
};

export default Footer;