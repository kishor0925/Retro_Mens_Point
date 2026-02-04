import React from 'react'
import img1 from './Images/Casual.webp'
import img2 from './Images/Hoodies.webp'
import img3 from './Images/Shirt.webp'
import img4 from './Images/T-shirt.webp'
import './Shpbycstgry.css'
const shpbycstgry = () => {
  return (
    <div className='container my-5 shp'>
        <h1 className='text-center fw-bold mb-2 shpbyctgrheading'>Shop by Categories</h1>
        <p className='text-center  text-muted mb-4'>Explore our refined categories for a seamless shopping experience.</p>

        <div className='row justify-content-center'>
            {
                [
                    {img : img1, title : "Casual Collections"},
                    {img : img2, title : "Hoodies Collections"},
                    {img : img3, title : "Shirts Collections"},
                    {img : img4, title : "T-Shirts"},
                ].map((item, index) => (
                    <div className='col col-12 col-md-6 col-lg-3 text-center' key={index}>
                        <img src={item.img} 
                            className='category-img'
                        />
                        <p className='fw-bold mx-2 my-2'>{item.title}</p>

                    </div>
                ))
            }
        </div>
        
        
    </div>
  )
}

export default shpbycstgry