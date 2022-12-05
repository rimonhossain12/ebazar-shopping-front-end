import React from "react";
import Feature from "./Feature";
import cloth from '../../../images/feature/cloth.jpg';
import laptop from '../../../images/feature/laptop.jpg';
import perfume from '../../../images/feature/perfume.jpg';
import phone from '../../../images/feature/phone.jpg';
import shari from '../../../images/feature/shari.jpg';


const featureProducts = [
  {
    _id:1,
    name:'shari',
    images:shari
  },
  
  {
    _id:2,
    name:'cloth',
    images:cloth
  },
  {
    _id:3,
    name:'phone',
    images:phone
  },
  {
    _id:4,
    name:'perfum',
    images:perfume
  },
  {
    _id:5,
    name:'laptop',
    images:laptop
  },

]


const ShowFeature = () => {

  return (
    <div className="container-lg my-12">
          <div className="grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 px-12 mx-auto">
            {
              featureProducts.map((feature) => <Feature  key={feature._id} feature={feature} />)
            }
          </div>
    </div>
  );
};

export default ShowFeature;
