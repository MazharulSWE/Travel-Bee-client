import React, { useEffect, useState } from 'react';
import { Spinner } from 'react-bootstrap';
import { useParams } from 'react-router';
import useAuth from '../../hooks/useAuth';
import './Booking.css';

const Booking = () => {
    const [details, setDetails] = useState([]);
    const {serviceId} = useParams();
    const {isLoading,user} = useAuth();

   useEffect(()=>{
       fetch('https://possessed-witch-51667.herokuapp.com/services')
       .then(res=> res.json())
       .then(data =>setDetails(data))
   },[]);

   const findDetail = details.find((detail)=> detail._id == serviceId);
   console.log(findDetail);
   if (isLoading) {
       return <Spinner animation="border" variant="dark" />
   }
    return (
       <div className="d-flex booking">
         <div className="service pb-3 m-5">
            <img src={findDetail?.img} alt="" />
            <h1>{findDetail?.name}</h1>
            <h3>${findDetail?.price}</h3>
            <p>{findDetail?.description}</p>
        </div>
        <div className="table">
            <h1>Place Your Order</h1>
            <input type="text"  placeholder="Name" value={user.displayName}/>
            <br />
            <input type="text"  placeholder="Email" value={user.email}/>
            <br />
            <input type="text"  placeholder="Address"/>
            <br />
            <button  className="btn btn-primary">Send</button>
        </div>
       </div>
    );
};

export default Booking;