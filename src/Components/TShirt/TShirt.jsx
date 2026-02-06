import React from 'react'
import Navbar from '../../Home/Navbar/Navbar.jsx';
import Footer from '../../Home/Footer/Footer.jsx';
import TShirt1 from "./Images/TShirt1.webp";
import TShirt2 from "./Images/TShirt2.webp";
import TShirt3 from "./Images/TShirt3.webp";
import TShirt4 from "./Images/TShirt4.webp";
import TShirt5 from "./Images/TShirt5.webp";
import TShirt6 from "./Images/TShirt6.webp";
import TShirt7 from "./Images/TShirt7.webp";
import TShirt8 from "./Images/TShirt8.webp";
import TShirt9 from "./Images/TShirt9.webp";
import TShirt10 from "./Images/TShirt10.webp";
import TShirt11 from "./Images/TShirt11.webp";
import TShirt12 from "./Images/TShirt12.webp";
import TShirtLayout from './TShirtLayout.jsx';

const TShirt = () => {

  const products = [
  {
    id: 1,
    brand: "Jump Cuts",
    title: "Solid Black Cotton T-Shirt",
    name: "PoloFit Tee - Black",
    image: TShirt1,
    rating: 4.2,
    ratingCount: 980,
    oldPrice: 999,
    price: 599,
    discount: 40,
    expressDelivery: true,
    tag: "#EverydayWear"
  },
  {
    id: 2,
    brand: "UrbanX",
    title: "Printed Street Style T-Shirt",
    name: "StreetCore Tee",
    image: TShirt2,
    rating: 4.4,
    ratingCount: 1240,
    oldPrice: 1199,
    price: 699,
    discount: 42,
    expressDelivery: true,
    tag: "#StreetStyle"
  },
  {
    id: 3,
    brand: "NightMode",
    title: "Minimal White T-Shirt",
    name: "CleanFit Tee - White",
    image: TShirt3,
    rating: 4.1,
    ratingCount: 860,
    oldPrice: 899,
    price: 549,
    discount: 39,
    expressDelivery: false,
    tag: "#Minimal"
  },
  {
    id: 4,
    brand: "Blaze Wear",
    title: "Bold Graphic T-Shirt",
    name: "Blaze Graphic Tee",
    image: TShirt4,
    rating: 4.5,
    ratingCount: 1430,
    oldPrice: 1299,
    price: 799,
    discount: 38,
    expressDelivery: true,
    tag: "#GraphicWear"
  },
  {
    id: 5,
    brand: "EarthMode",
    title: "Brown Oversized T-Shirt",
    name: "EarthTone Tee",
    image: TShirt5,
    rating: 4.0,
    ratingCount: 640,
    oldPrice: 1099,
    price: 649,
    discount: 41,
    expressDelivery: false,
    tag: "#Oversized"
  },
  {
    id: 6,
    brand: "Cyber Wear",
    title: "Cyber Punk Printed T-Shirt",
    name: "NeoTech Tee",
    image: TShirt6,
    rating: 4.6,
    ratingCount: 720,
    oldPrice: 1399,
    price: 899,
    discount: 36,
    expressDelivery: true,
    tag: "#CyberPunk"
  },
  {
    id: 7,
    brand: "PureWear",
    title: "Solid Pastel T-Shirt",
    name: "SoftTone Tee",
    image: TShirt7,
    rating: 4.3,
    ratingCount: 910,
    oldPrice: 999,
    price: 599,
    discount: 40,
    expressDelivery: true,
    tag: "#PastelVibes"
  },
  {
    id: 8,
    brand: "StreetMode",
    title: "Classic Street T-Shirt",
    name: "Street Essential Tee",
    image: TShirt8,
    rating: 4.1,
    ratingCount: 780,
    oldPrice: 1099,
    price: 649,
    discount: 41,
    expressDelivery: true,
    tag: "#StreetDaily"
  },
  {
    id: 9,
    brand: "FlashWear",
    title: "Typography Print T-Shirt",
    name: "Flash Text Tee",
    image: TShirt9,
    rating: 4.4,
    ratingCount: 690,
    oldPrice: 1199,
    price: 749,
    discount: 38,
    expressDelivery: false,
    tag: "#Typography"
  },
  {
    id: 10,
    brand: "RebelWear",
    title: "Statement Graphic T-Shirt",
    name: "Rebel Tee",
    image: TShirt10,
    rating: 4.2,
    ratingCount: 830,
    oldPrice: 1299,
    price: 799,
    discount: 38,
    expressDelivery: true,
    tag: "#RebelStyle"
  },
  {
    id: 11,
    brand: "UrbanX",
    title: "Oversized Drop-Shoulder T-Shirt",
    name: "LooseFit Tee",
    image: TShirt11,
    rating: 4.5,
    ratingCount: 1020,
    oldPrice: 1499,
    price: 899,
    discount: 40,
    expressDelivery: true,
    tag: "#OversizedFit"
  },
  {
    id: 12,
    brand: "WorkInProgress",
    title: "Limited Edition T-Shirt",
    name: "WIP Drop Tee",
    image: TShirt12,
    rating: 3.9,
    ratingCount: 410,
    oldPrice: 1199,
    price: 699,
    discount: 42,
    expressDelivery: false,
    tag: "#LimitedDrop"
  }
];


  return (
    <>
      <Navbar />
      <div className="container">
        <h1 className="shpbyctgrheading m-5 text-center">
          T-Shits
        </h1>
        <div className="row">
          {products.map((item) => (
            <TShirtLayout key={item.id} product={item} />
          ))}
        </div>
      </div>
      <Footer />
    </>
  )
}

export default TShirt