import React from "react";
import TrendingNowLayout from "./TrendingNowLayoutpage";
import Navbar from "../../Home/Navbar/Navbar";
import Footer from "../../Home/Footer/Footer";
// images

import BackPrintedhoodies from "./Images/BackPrintedhoodies.webp";
import BlackPant from "./Images/BlackPant.webp";
import Blackshirt from "./Images/Blackshirt.webp";
import bluedenimpant from "./Images/bluedenimpant.webp";
import BlueShirt from "./Images/BlueShirt.webp";
import BrownHoddie from "./Images/BrownHoddie.webp";
import Doublepocket from "./Images/Doublepocket.webp";
import GreenShirt from "./Images/GreenShirt.webp";
import Gurkhapant from "./Images/Gurkhapant.webp";
import jeanspant from "./Images/jeanspant.webp";
import linenshirt from "./Images/linenshirt.webp";
import LinenTrousers from "./Images/LinenTrousers.webp";
import PinkShirt from "./Images/PinkShirt.webp";
import PrintedShirt from "./Images/PrintedShirt.webp";
import whitehoodie from "./Images/whitehoodie.webp";
import oversizedhoodies from "./Images/oversizedhoodies.webp";

const TrendingNow = () => {
  const products = [
    {
      id: 1,
      brand: "Jump Cuts",
      title: "Men Solid Black Track Pant",
      name: "PoloFit Pant - Black",
      image: BlackPant,
      rating: 3.7,
      ratingCount: 880,
      oldPrice: 1299,
      price: 699,
      discount: 46,
      expressDelivery: true,
    },
    {
      id: 2,
      brand: "Levis",
      title: "Men Slim Fit Denim",
      name: "Slim Jeans - Blue",
      image: bluedenimpant,
      rating: 4.3,
      ratingCount: 2450,
      oldPrice: 2999,
      price: 1799,
      discount: 40,
      expressDelivery: true,
    },
    {
      id: 3,
      brand: "Roadster",
      title: "Men Casual Denim",
      name: "Everyday Jeans",
      image: jeanspant,
      rating: 4.1,
      ratingCount: 1120,
      oldPrice: 2499,
      price: 1499,
      discount: 40,
      expressDelivery: false,
    },
    {
      id: 4,
      brand: "H&M",
      title: "Men Black Shirt",
      name: "Classic Black Shirt",
      image: Blackshirt,
      rating: 4.0,
      ratingCount: 960,
      oldPrice: 1499,
      price: 799,
      discount: 47,
      expressDelivery: true,
    },
    {
      id: 5,
      brand: "H&M",
      title: "Men Blue Shirt",
      name: "Casual Blue Shirt",
      image: BlueShirt,
      rating: 3.9,
      ratingCount: 780,
      oldPrice: 1499,
      price: 899,
      discount: 40,
      expressDelivery: false,
    },
    {
      id: 6,
      brand: "U.S. Polo",
      title: "Men Green Shirt",
      name: "Formal Green Shirt",
      image: GreenShirt,
      rating: 4.2,
      ratingCount: 1340,
      oldPrice: 2199,
      price: 1299,
      discount: 41,
      expressDelivery: true,
    },
    {
      id: 7,
      brand: "Dennis Lingo",
      title: "Men Pink Shirt",
      name: "Slim Fit Pink Shirt",
      image: PinkShirt,
      rating: 3.8,
      ratingCount: 520,
      oldPrice: 1999,
      price: 999,
      discount: 50,
      expressDelivery: false,
    },
    {
      id: 8,
      brand: "HERE&NOW",
      title: "Men Linen Shirt",
      name: "Linen Casual Shirt",
      image: linenshirt,
      rating: 4.4,
      ratingCount: 890,
      oldPrice: 2499,
      price: 1499,
      discount: 40,
      expressDelivery: true,
    },
    {
      id: 9,
      brand: "HERE&NOW",
      title: "Men Linen Trouser",
      name: "Relaxed Fit Trouser",
      image: LinenTrousers,
      rating: 4.1,
      ratingCount: 640,
      oldPrice: 2799,
      price: 1699,
      discount: 39,
      expressDelivery: false,
    },
    {
      id: 10,
      brand: "Snitch",
      title: "Men Gurkha Pant",
      name: "Korean Gurkha Pant",
      image: Gurkhapant,
      rating: 4.5,
      ratingCount: 760,
      oldPrice: 3499,
      price: 2199,
      discount: 37,
      expressDelivery: true,
    },
    {
      id: 11,
      brand: "HRX",
      title: "Men Printed Hoodie",
      name: "Back Printed Hoodie",
      image: BackPrintedhoodies,
      rating: 4.3,
      ratingCount: 2100,
      oldPrice: 2599,
      price: 1599,
      discount: 38,
      expressDelivery: true,
    },
    {
      id: 12,
      brand: "Urban Monkey",
      title: "Men Oversized Hoodie",
      name: "Oversized Hoodie",
      image: oversizedhoodies,
      rating: 4.0,
      ratingCount: 980,
      oldPrice: 2999,
      price: 1799,
      discount: 40,
      expressDelivery: false,
    },
    {
      id: 13,
      brand: "H&M",
      title: "Men Brown Hoodie",
      name: "Pullover Hoodie",
      image: BrownHoddie,
      rating: 4.2,
      ratingCount: 1240,
      oldPrice: 3199,
      price: 1899,
      discount: 41,
      expressDelivery: true,
    },
    {
      id: 14,
      brand: "H&M",
      title: "Men White Hoodie",
      name: "Basic Hoodie",
      image: whitehoodie,
      rating: 4.1,
      ratingCount: 1100,
      oldPrice: 2499,
      price: 1499,
      discount: 40,
      expressDelivery: false,
    },
    {
      id: 15,
      brand: "Roadster",
      title: "Men Printed Shirt",
      name: "Printed Casual Shirt",
      image: PrintedShirt,
      rating: 4.0,
      ratingCount: 870,
      oldPrice: 1999,
      price: 1199,
      discount: 40,
      expressDelivery: true,
    },
    {
      id: 16,
      brand: "Snitch",
      title: "Men Double Pocket Shirt",
      name: "Utility Pocket Shirt",
      image: Doublepocket,
      rating: 4.3,
      ratingCount: 690,
      oldPrice: 2299,
      price: 1399,
      discount: 39,
      expressDelivery: true,
    },
  ];

  return (
    <>
      <Navbar />
      <div className="container">
        <h1 className="shpbyctgrheading m-5 text-center">
          Trending Now
        </h1>
        <div className="row">
          {products.map((item) => (
            <TrendingNowLayout key={item.id} product={item} />
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default TrendingNow;
