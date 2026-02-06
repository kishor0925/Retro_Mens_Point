import React from "react";
import TrendingNowCard from "./TrendingNowCard";
import './TrendingNow.css'
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import BlackDrpShoulder from "./TrendingNowImages/DropshoulderShirt1.webp";
import WhiteDrpShoulder from "./TrendingNowImages/img1.webp";
import LinenBlendShirt from "./TrendingNowImages/LinenBlendShirt.webp";
import oversizedshirt from "./TrendingNowImages/OversizedShirt.webp";
import printedBlue from "./TrendingNowImages/PrintedBlueShirt.webp";
import printedRed from "./TrendingNowImages/PrintedRedShirt.webp";
import { Link } from "react-router-dom";


const TrendingNow = () => {
    const TrendingImages = [
        {
            img: BlackDrpShoulder,
            title: "Bare Branch Embroidery Dropshoulder Shirt Black",
            price: 799,
            discount: 49,
        },
        {
            img: WhiteDrpShoulder,
            title: "Bare Branch Embroidery Dropshoulder Shirt White",
            price: 799,
            discount: 49,
        },
        {
            img: LinenBlendShirt,
            title: "Bare Branch Embroidery Dropshoulder Shirt White",
            price: 799,
            discount: 49,
        },
        {
            img: oversizedshirt,
            title: "Pastane Oversized Casual Shirt White Green",
            price: 799,
            discount: 49,
        },
        {
            img: printedBlue,
            title: "Vintage Rose Garden Printed Shirt Blue",
            price: 799,
            discount: 49,
        },
        {
            img: printedRed,
            title: "Vintage Rose Garden Printed Shirt Brick",
            price: 799,
            discount: 49,
        },
        {
            img: printedRed,
            title: "Vintage Rose Garden Printed Shirt Brick",
            price: 799,
            discount: 49,
        },
        {
            img: printedRed,
            title: "Vintage Rose Garden Printed Shirt Brick",
            price: 799,
            discount: 49,
        },
    ];


    return (
        <div className="trending-wrapper ">
            <div className="container" >
                <h1 className="text-center trendnowhed fw-bold">Trending Now</h1>
                <p className="text-center trendnowp text-muted">Explore the newest additions to our collection
                    crafted for the modern man who loves to stay ahead in fashion.</p>
                <Swiper
                    modules={[Navigation]}
                    navigation
                    spaceBetween={10}
                    slidesPerView={5}
                    className="trending-swiper"
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
                    {TrendingImages.map((product, index) => (
                        <SwiperSlide key={index}>
                            <TrendingNowCard product={product} />
                        </SwiperSlide>
                    ))}

                    <div className="text-center">
                        <Link to="/newarrival" className="btn btn-danger px-4 py-2">
                            Shop More
                        </Link>
                    </div>
                </Swiper>
            </div>
        </div>


    );
};

export default TrendingNow;
