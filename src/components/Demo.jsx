import React from "react";
import { Carousel } from "react-responsive-carousel";
import banner1 from "../assets/one.jpg";
import banner2 from "../assets/two.jpg";
import banner3 from "../assets/three.jpg";
import "react-responsive-carousel/lib/styles/carousel.min.css"; 

const Demo = () => {
  return (
    <Carousel autoPlay={true} infiniteLoop={true} showThumbs={false}>
      <div>
        <img src={banner1} />
       
      </div>
      <div>
        <img src={banner2} />
       
      </div>
      <div>
        <img src={banner3} />
    
      </div>
    </Carousel>
  );
};

export default Demo;
