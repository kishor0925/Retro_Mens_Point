import React, { useEffect, useState } from 'react'
import Navbar from '../../Home/Navbar/Navbar.jsx';
import Footer from '../../Home/Footer/Footer.jsx';
import TShirtLayout from './TShirtLayout.jsx';

const TShirt = () => {

  const [products , setProducts] = useState([])

  useEffect(() => {
    fetch('http://localhost:5444/products?category=tshirts')
    .then(res => res.json())
    .then(data => setProducts(data))
    .catch(err => console.log(err))
  },[])
  return (
    <>
      <Navbar />
      <div className="container">
        <h1 className="shpbyctgrheading m-5 text-center">
          T-Shits
        </h1>
        <div className="row">
          {products.map((item) => (
            <TShirtLayout key={item._id} product={item} />
          ))}
        </div>
      </div>
      <Footer />
    </>
  )
}

export default TShirt