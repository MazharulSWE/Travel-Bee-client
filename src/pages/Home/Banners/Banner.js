import React from 'react';
import { Carousel } from 'react-bootstrap';
import banner1 from '../../../images/Banner/banner1.png';
import banner2 from '../../../images/Banner/banner2.png';
import banner3 from '../../../images/Banner/banner3.png';

const Banner = () => {
    return (
        <>
        <Carousel>
<Carousel.Item>
  <img
    className="d-block w-100"
    src={banner1}
    alt="First slide"
  />
  <Carousel.Caption>
    <h2 className="text-white">✈️We Are TravelBee Travels&Tour Agency✈️</h2>
    <h5 className="text-white">A Reliable Travels and Tour Agency Provide smooth and hustle free Services in Malaysia and other Countries as well.</h5>
  </Carousel.Caption>
</Carousel.Item>
<Carousel.Item>
  <img
    className="d-block w-100"
    src={banner2}
    alt="Second slide"
  />

  <Carousel.Caption>
    <h2 className="text-white">🚢People Trust Us🚢</h2>
    <h5 className="text-white">Because We Provide all the facilities what our customer wish to have.</h5>
  </Carousel.Caption>
</Carousel.Item>
<Carousel.Item>
  <img
    className="d-block w-100"
    src={banner3}
    alt="Third slide"
  />

  <Carousel.Caption>
    <h2 className="text-white">🌨️Book Our Packages🌨️</h2>
    <h5 className="text-white">Our Travel packages are cheap in price and highly secured.We Provide high security to our customers.</h5>
  </Carousel.Caption>
</Carousel.Item>
</Carousel>  
      </>
    );
};

export default Banner;
