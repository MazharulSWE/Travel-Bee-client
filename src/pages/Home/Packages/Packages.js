import React, { useEffect, useState } from 'react';
import Package from '../Package/Package';
import './Packages.css';

const Packages = () => {
    const [packages, setPackages] = useState([]);
    useEffect(()=>{
        fetch('https://possessed-witch-51667.herokuapp.com/services')
        .then(res=>res.json())
        .then(data=>setPackages(data))
    },[])
    return (
        <div id="packages">
         <h4>Choose Your Package</h4>
         <h1>Select Your Best Package <br /> For Your Travel</h1>
         <div className="packages-container">
                {
                    packages.map(pack=> <Package
                    key={pack.id}
                    pack = {pack}
                    ></Package>)
                }
            </div>
        </div>
    );
};

export default Packages;