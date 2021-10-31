import React from 'react';
import './Popular.css';

const Popular = () => {
    return (
        <div id="popular">
           <p className="mt-5">Feature Tours</p> 
           <h1>See Our Best Popular <br /> Destinations</h1>
          <div className="d-flex justify-content-evenly bg-all">
          <div className="d-flex justify-content-start bg-card">
               <div className="popular-image">
                   <img src="https://www.planetware.com/wpimages/2019/10/malaysia-top-attractions-langkawi-skycab.jpg" alt="" />
               </div>
               <div className="write">
                   <h2>Beautiful Sky View</h2>
                   <h2>Ganting Highland</h2>
                   <h4>⭐7k+ Rating</h4>
                   <p>$300</p>
               </div>
           </div>
          <div className="d-flex justify-content-end bg-card">
               <div className="popular-image">
                   <img src="https://wander-lush.org/wp-content/uploads/2020/07/Where-to-go-in-Malaysia-Kuching.jpg" alt="" />
               </div>
               <div className="write">
                   <h2>Museum Negara</h2>
                   <h2>Kelantan</h2>
                   <h4>⭐9k+ Rating</h4>
                   <p>$200</p>
               </div>
           </div>
          </div>
        </div>
    );
};

export default Popular;