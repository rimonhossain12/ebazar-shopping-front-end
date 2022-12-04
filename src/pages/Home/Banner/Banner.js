import { Carousel } from "flowbite-react";
import React from "react";
import logo1 from '../../../images/banner/1.jpg'
import logo2 from '../../../images/banner/2.jpg'
import logo3 from '../../../images/banner/3.jpg'

const Banner = () => {
  return (
    <div>
      <div className="h-56 sm:h-64 xl:h-80 2xl:h-96 mb-10">
        <Carousel>
          <img
            src={logo1}
            className="h-full"
            alt="..."
          />
          <img
             src={logo2}
             className="w-full"
            
            alt="..."
          />
          <img
            className="h-full"
            src={logo3}
            alt="..."
          />
        </Carousel>
      </div>
    </div>
  );
};

export default Banner;
