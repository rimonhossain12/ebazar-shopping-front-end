import React from 'react'
import { useTextContext } from '../../../tryContext/useTestContext'
// import UseCartContext from '../../../context1/UseContext'
import Banner from '../Banner/Banner'
import Products from '../Products/Products'
import ShowFeature from '../showFeature/ShowFeature'
const Home = () => {
  const {test} = useTextContext();

  return (
    <div>
       <Banner />
       <div className='text-red-500 text-center text-3xl font-mongo'>
        <h2 className="text-3xl text-red">{test}</h2>
       </div>
       <ShowFeature />
       <Products />
    </div>
  )
}

export default Home