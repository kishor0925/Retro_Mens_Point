import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import blackshirt from './Images/BalckImages.webp'
import blackpant from './Images/Blackpant.webp'
import blueshirt from './Images/BlueShirt.webp'
import Maroon from './Images/MaroonShirt.webp'
import white from './Images/WhiteShirt.webp'
import whitepant from './Images/MomFit.webp'
import { Navigation } from 'swiper/modules'
import './Latestcollection.css'
import { Link } from 'react-router-dom'

const LatestCollections = () => {

    const LastestCollection = [
        {
            img: blackshirt,
            title: "Oversized casual black shirt",
            price: "₹899-₹999",
            discount: "49% OFF"

        },
        {
            img: blackpant,
            title: "Black Momfit Pant",
            price: "₹899-₹999",
            discount: "49% OFF"

        },
        {
            img: whitepant,
            title: "white Momfit Pant",
            price: "₹899-₹999",
            discount: "49% OFF"

        },
        {
            img: white,
            title: "Shaked White shirt",
            price: "₹899-₹999",
            discount: "49% OFF"

        },
        {
            img: blueshirt,
            title: "Poly  Oversized Shirt",
            price: "₹899-₹999",
            discount: "49% OFF"

        },
        {
            img: Maroon,
            title: "Poly Oversized Shirt",
            price: "₹899-₹999",
            discount: "49% OFF"

        },

    ]
    return (
        <div className='container latestcollection'>
            <h2 className='text-center trendnowhed'>Latest Collection</h2>
            <p className='text-muted text-center'>Explore our newest arrivals featuring trendy shirts, jeans, and T-shirts crafted for comfort and confidence.
                Step into the season with style that sets you apart.</p>

            <Swiper
                modules={[Navigation]}
                navigation
                spaceBetween={10}
                slidesPerView={5}
                className='trending-swiper'
                breakpoints={{
                    0: {
                        slidesPerView: 2,
                    },
                    768: {
                        slidesPerView: 3,
                    },
                    1024: {
                        slidesPerView: 4,
                    },
                    1280: {
                        slidesPerView: 5,
                    },
                }}
            >
                {LastestCollection.map((product, index) => (
                    <SwiperSlide key={index}>
                        <div className='container p-4 mx-4'>
                            <div className='images position-relative'>
                                <span className='badge bg-danger position-absolute top-0 start-0 m-2'>
                                    {product.discount}
                                </span>
                                <img src={product.img}
                                    className='img-fluid'
                                />
                                <div className="product-text mt-2">
                                    <p className="text-muted mb-1 text-center">{product.title}</p>
                                    <p className="text-danger text-center fw-bold">{product.price}</p>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}

                <div className="d-flex justify-content-center mb-5">
                    <Link to="/newarrival" className="btn btn-danger">
                        Shop More
                    </Link>
                </div>

            </Swiper>

        </div>
    )
}

export default LatestCollections