import React from 'react'
import Banner from '../Banner/Banner'
import Products from '../Products/Products'
import ShowFeature from '../showFeature/ShowFeature'
const Home = () => {

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