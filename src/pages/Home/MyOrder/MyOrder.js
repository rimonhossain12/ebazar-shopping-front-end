import React, { useEffect, useState } from 'react'

const MyOrder = () => {
  const [item,setItem] = useState([]);

  useEffect(() => {
    const cartData = localStorage.getItem('cart');
    if(cartData){
      setItem(JSON.parse(cartData));
    }
  },[])

  console.log(item);

  return (
    <div className='contianer-lg px-12 my-12 '>
        <h3 className="text-3xl text-gray-500">All the my order : {item.length}</h3>
    </div>
  )
}

export default MyOrder