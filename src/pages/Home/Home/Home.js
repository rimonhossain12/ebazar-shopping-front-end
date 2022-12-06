import React from 'react'
// import UseCartContext from '../../../context1/UseContext'
import Banner from '../Banner/Banner'
import Products from '../Products/Products'
import ShowFeature from '../showFeature/ShowFeature'
const Home = () => {
  // const {name} = useCartContext();
  // console.log(name);
  return (
    <div>
       <Banner />
       <div className='text-red-500 text-center text-3xl font-mongo'>
       </div>
       <ShowFeature />
       <Products />
    </div>
  )
}

export default Home