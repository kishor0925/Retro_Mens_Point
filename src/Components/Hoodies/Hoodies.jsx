import React from 'react'
import Navbar from '../../Home/Navbar/Navbar';
import Footer from '../../Home/Footer/Footer';
import HoodiesLayout from './HoodiesLayout.jsx';
import BabyPinkHoodie from "./Images/BabyPinkHoodie.webp";
import BackPrintHoodie from "./Images/BackPrintHoodie.webp";
import BlackHoodie from "./Images/BlackHoodie.webp";
import BlackPrintedHoodie from "./Images/BlackPrintedHoodie.webp";
import BlazeHoodie from "./Images/BlazeHoodie.webp";
import BoneHoodie from "./Images/BoneHoodie.webp";
import BrownHoodie from "./Images/BrownHoodie.webp";
import CyberPunkHoodie from "./Images/CyberPunkHoodie.webp";
import FlowerPuffHoodie from "./Images/FlowerPuffHoodie.webp";
import LightningHoodie from "./Images/LightningHoodie.webp";
import NikeHoodie from "./Images/NikeHoodie.webp";
import OversizeHoodie from "./Images/OversizeHoodie.webp";
import ProhibitedHoodie from "./Images/ProhibitedHoodie.webp";
import StreetHoodie from "./Images/StreetHoodie.webp";
import WhiteHoodie from "./Images/WhiteHoodie.webp";
import WipHoodie from "./Images/wip-hoodie.webp";

const Hoodies = () => {
    const products = [
        {
            id: 1,
            brand: "Jump Cuts",
            title: "Baby Pink Oversized Hoodie",
            name: "UrbanFit Hoodie - Pink",
            image: BabyPinkHoodie,
            rating: 4.3,
            ratingCount: 1240,
            oldPrice: 1999,
            price: 1199,
            discount: 40,
            expressDelivery: true,
            tag: "#PastelVibes"
        },
        {
            id: 2,
            brand: "Blaze Wears",
            title: "Back Print Street Hoodie",
            name: "StreetCore Hoodie - Black",
            image: BackPrintHoodie,
            rating: 4.5,
            ratingCount: 980,
            oldPrice: 2499,
            price: 1499,
            discount: 40,
            expressDelivery: true,
            tag: "#StreetStyle"
        },
        {
            id: 3,
            brand: "NightMode",
            title: "Solid Black Hoodie",
            name: "Essential Hoodie - Black",
            image: BlackHoodie,
            rating: 4.1,
            ratingCount: 1560,
            oldPrice: 1799,
            price: 999,
            discount: 44,
            expressDelivery: false,
            tag: "#DailyWear"
        },
        {
            id: 4,
            brand: "NightMode",
            title: "Printed Black Hoodie",
            name: "Graphic Hoodie - Black",
            image: BlackPrintedHoodie,
            rating: 4.2,
            ratingCount: 860,
            oldPrice: 2199,
            price: 1299,
            discount: 41,
            expressDelivery: true,
            tag: "#GraphicWear"
        },
        {
            id: 5,
            brand: "Blaze Wear",
            title: "Blaze Signature Hoodie",
            name: "Blaze Hoodie",
            image: BlazeHoodie,
            rating: 4.4,
            ratingCount: 730,
            oldPrice: 2399,
            price: 1599,
            discount: 33,
            expressDelivery: true,
            tag: "#PremiumStreet"
        },
        {
            id: 6,
            brand: "Bone Street",
            title: "Minimal Bone Hoodie",
            name: "BoneFit Hoodie",
            image: BoneHoodie,
            rating: 4.0,
            ratingCount: 540,
            oldPrice: 1899,
            price: 1099,
            discount: 42,
            expressDelivery: false,
            tag: "#MinimalWear"
        },
        {
            id: 7,
            brand: "EarthMode",
            title: "Brown Solid Hoodie",
            name: "EarthTone Hoodie",
            image: BrownHoodie,
            rating: 4.2,
            ratingCount: 690,
            oldPrice: 2099,
            price: 1299,
            discount: 38,
            expressDelivery: true,
            tag: "#EarthTones"
        },
        {
            id: 8,
            brand: "Cyber Wear",
            title: "Cyber Punk Graphic Hoodie",
            name: "NeoTech Hoodie",
            image: CyberPunkHoodie,
            rating: 4.6,
            ratingCount: 740,
            oldPrice: 2899,
            price: 1899,
            discount: 34,
            expressDelivery: true,
            tag: "#CyberPunk"
        },
        {
            id: 9,
            brand: "Flora",
            title: "Floral Puff Print Hoodie",
            name: "Bloom Hoodie",
            image: FlowerPuffHoodie,
            rating: 4.5,
            ratingCount: 820,
            oldPrice: 2599,
            price: 1699,
            discount: 35,
            expressDelivery: true,
            tag: "#FloralStreet"
        },
        {
            id: 10,
            brand: "FlashWear",
            title: "Lightning Graphic Hoodie",
            name: "Volt Hoodie",
            image: LightningHoodie,
            rating: 4.4,
            ratingCount: 670,
            oldPrice: 2399,
            price: 1599,
            discount: 33,
            expressDelivery: false,
            tag: "#BoldLooks"
        },
        {
            id: 11,
            brand: "Nike",
            title: "Nike Sports Hoodie",
            name: "Nike Essential Hoodie",
            image: NikeHoodie,
            rating: 4.7,
            ratingCount: 3240,
            oldPrice: 3499,
            price: 2799,
            discount: 20,
            expressDelivery: true,
            tag: "#SportsWear"
        },
        {
            id: 12,
            brand: "UrbanX",
            title: "Oversized Street Hoodie",
            name: "LooseFit Hoodie",
            image: OversizeHoodie,
            rating: 4.3,
            ratingCount: 1120,
            oldPrice: 2199,
            price: 1399,
            discount: 36,
            expressDelivery: true,
            tag: "#Oversized"
        },
        {
            id: 13,
            brand: "RebelWear",
            title: "Prohibited Graphic Hoodie",
            name: "Rebel Hoodie",
            image: ProhibitedHoodie,
            rating: 4.1,
            ratingCount: 610,
            oldPrice: 2299,
            price: 1499,
            discount: 35,
            expressDelivery: false,
            tag: "#RebelStyle"
        },
        {
            id: 14,
            brand: "StreetMode",
            title: "Classic Street Hoodie",
            name: "Street Essential Hoodie",
            image: StreetHoodie,
            rating: 4.0,
            ratingCount: 890,
            oldPrice: 1999,
            price: 1199,
            discount: 40,
            expressDelivery: true,
            tag: "#StreetDaily"
        },
        {
            id: 15,
            brand: "PureWear",
            title: "Solid White Hoodie",
            name: "CleanFit Hoodie - White",
            image: WhiteHoodie,
            rating: 4.2,
            ratingCount: 760,
            oldPrice: 1899,
            price: 1099,
            discount: 42,
            expressDelivery: true,
            tag: "#CleanLook"
        },
        {
            id: 16,
            brand: "WorkInProgress",
            title: "WIP Limited Hoodie",
            name: "WIP Drop Hoodie",
            image: WipHoodie,
            rating: 3.9,
            ratingCount: 420,
            oldPrice: 2099,
            price: 1299,
            discount: 38,
            expressDelivery: false,
            tag: "#LimitedDrop"
        }
    ];
    return (
        <>
            <Navbar />
            <div className="container">
                <h1 className='shpbyctgrheading m-5 text-center'>Hoodies</h1>
                <div className="row">
                    {products.map( item => (   
                        <HoodiesLayout product={item} key={item.id}/>
                    ))}
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Hoodies