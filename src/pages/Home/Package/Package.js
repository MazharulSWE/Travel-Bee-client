import React from 'react';
import { Link } from 'react-router-dom';
// import { useParams } from 'react-router';
import './Package.css';

const Package = ({pack}) => {
    const { _id, name, description, img, price} = pack;
    // const {serviceId} = useParams();
    return (
    <div className="package pb-3">
        <img src={img} alt="" />
        <h1>{name}</h1>
        <h3>${price}</h3>
        <p>{description}</p>
        <Link to={`/details/${_id}`}>
        <button>Book Now 🧳</button>
        </Link>
        
    </div>
            
        
    );
};

export default Package;