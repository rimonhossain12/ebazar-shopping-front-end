import { Card } from 'flowbite-react';
import React, { useEffect, useState } from 'react'

const MyOrder = () => {
  const [items,setItems] = useState([]);

  useEffect(() => {
    const cartData = localStorage.getItem('cart');
    if(cartData){
      setItems(JSON.parse(cartData));
    }
  },[])

  console.log(items.qty);

  return (
    <div className='contianer-lg px-12 my-12 '>
        <h3 className="text-3xl text-gray-500">All the my order : {items.length}</h3>
        <div className='grid grid-cols-1 mb-5'>
          {
            items.map((item) => (
              <div className="max-w-sm">
              <Card
                horizontal={true}
                imgSrc={item?.image}
              >
                <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  Noteworthy technology acquisitions 2021
                </h5>
                <p className="font-normal text-gray-700 dark:text-gray-400">
                  Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
                </p>
              </Card>
            </div>
            ))
          }
        </div>
    </div>
  )
}

export default MyOrder