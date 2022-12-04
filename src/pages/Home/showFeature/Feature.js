import React from "react";

const feature = ({feature}) => {
  const {productName,productImage} = feature?.data;
  console.log(productImage);
  return (
    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
        <img className="rounded-t-lg" src={`productImage`}  alt="not response" />
        {/* <img id="img-style" src={productImage} className='img-fluid' style={{ width: '100%' }} alt="" /> */}
      <div className="p-5">
          <h5 className="mb-2 text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
           {productName}
          </h5>
      </div>
    </div>
  );
};

export default feature;
