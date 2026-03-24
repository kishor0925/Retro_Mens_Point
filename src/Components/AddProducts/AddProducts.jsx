import React from 'react'
import Navbar from '../../Home/Navbar/Navbar'
import Footer from '../../Home/Footer/Footer'
const AddProducts = () => {
  return (
    <>
      <Navbar/>
      <form >
        <h1>Add Product Form</h1>

        <input type="text" name='brand' className='form-control' placeholder='Brand' />
        <input type="text" name='title' className='form-control' placeholder='title' />
        <input type="text" name='name' className='form-control' placeholder='name' />
        <input type="text" name='img' className='form-control' placeholder='image url' />
        <input type="number"name='rating'  className='form-control' placeholder='rating' />
        <input type="text" name='ratingcount' className='form-control' placeholder='ratingCount' />
        <input type="text" name='oldprice' className='form-control' placeholder='Oldprice' />
        <input type="text" name='price' className='form-control' placeholder='Price' />
        <input type="text" name= 'discount' className='form-control' placeholder='discount' />
        <input type="text" name='expressdelivery' className='form-control' placeholder='expressdelivery' />
        <input type="text" name='tag' className='form-control' placeholder='tag' />


            





      </form>
       <Footer/>
    </>
  )
}

export default AddProducts
