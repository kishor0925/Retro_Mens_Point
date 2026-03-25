import React, { useEffect, useState } from 'react'
import NewArrivalLayout from './NewArrivalLayout'
import Navbar from '../../Home/Navbar/Navbar'
import Footer from '../../Home/Footer/Footer'

const NewArrival = () => {
  


  const[products , setProducts] = useState([]);

  useEffect(() => {

    fetch('http://localhost:5444/products?isNewArrival=true')
    .then(res => res.json())
    .then(data => setProducts(data))
    .catch(err => console.log(err))
  
  }, [])

  return (
    <>
    <Navbar/>
    <div className="container">
      <h1 className='shpbyctgrheading m-5 text-center'>New Arrivals</h1>  
      <div className="row">
        {products.map(product => (
          <NewArrivalLayout product={product} key={product._id} />
        ))}
      </div>
    </div>
    <Footer/>
    </>
    
  )
}

export default NewArrival
