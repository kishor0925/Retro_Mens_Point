import React from 'react'
import NewArrivalLayout from './NewArrivalLayout'
import BackPrintedhoodies from './Images/BackPrintedhoodies.webp'
import BlackPant from './Images/BlackPant.webp'
import Blackshirt from './Images/Blackshirt.webp'
import bluedenimpant from './Images/bluedenimpant.webp'
import BlueShirt from './Images/BlueShirt.webp'
import BrownHoddie from './Images/BrownHoddie.webp'
import Doublepocket from './Images/Doublepocket.webp'
import GreenShirt from './Images/GreenShirt.webp'
import Gurkhapant from './Images/Gurkhapant.webp'
import jeanspant from './Images/jeanspant.webp'
import linenshirt from './Images/linenshirt.webp'
import LinenTrousers from './Images/LinenTrousers.webp'
import PinkShirt from './Images/PinkShirt.webp'
import PrintedShirt from './Images/PrintedShirt.webp'
import whitehoodie from './Images/whitehoodie.webp'
import oversizedhoodies from './Images/oversizedhoodies.webp'
import Navbar from '../../Home/Navbar/Navbar'
import Footer from '../../Home/Footer/Footer'

const NewArrival = () => {
  const products = [
  {
    id: 1,
    brand: "Jump Cuts",
    title: "Men Colorblock Black Track Pant",
    name: "PoloFit Pant - Black",
    image: BlackPant,
    rating: 3.7,
    ratingCount: 880,
    oldPrice: 1299,
    price: 699,
    discount: 46,
    expressDelivery: true,
    tag: "#SmartJoggers"
  },
  {
    id: 2,
    brand: "Jump Cuts",
    title: "Back Printed Hoodie",
    name: "Back Printed Hoodie - Navy",
    image: BackPrintedhoodies,
    rating: 4.2,
    ratingCount: 1240,
    oldPrice: 1599,
    price: 799,
    discount: 50,
    expressDelivery: true,
    tag: "#StreetWear"
  },
  {
    id: 3,
    brand: "Urban Stitch",
    title: "Designer Embroidery Shirt",
    name: "Designer Embroidery Shirt - Black",
    image: Blackshirt,
    rating: 4.0,
    ratingCount: 540,
    oldPrice: 1055,
    price: 950,
    discount: 10,
    expressDelivery: false,
    tag: "#FormalLook"
  },
  {
    id: 4,
    brand: "Urban Stitch",
    title: "Designer Embroidery Shirt",
    name: "Designer Embroidery Shirt - Blue",
    image: BlueShirt,
    rating: 4.1,
    ratingCount: 610,
    oldPrice: 1055,
    price: 950,
    discount: 10,
    expressDelivery: false,
    tag: "#OfficeWear"
  },
  {
    id: 5,
    brand: "Hoodie Lab",
    title: "Oversized Printed Hoodie",
    name: "Lightning Oversize Hoodie",
    image: oversizedhoodies,
    rating: 4.5,
    ratingCount: 2100,
    oldPrice: 1699,
    price: 899,
    discount: 47,
    expressDelivery: true,
    tag: "#Oversized"
  },
  {
    id: 6,
    brand: "Denim Co",
    title: "Slim Fit Blue Denim Jeans",
    name: "Blue Denim Jeans",
    image: bluedenimpant,
    rating: 4.3,
    ratingCount: 1320,
    oldPrice: 1499,
    price: 899,
    discount: 40,
    expressDelivery: true,
    tag: "#Denim"
  },
  {
    id: 7,
    brand: "Denim Co",
    title: "Momfit Raw Denim Jeans",
    name: "Momfit Raw Denim - Charcoal Grey",
    image: jeanspant,
    rating: 4.1,
    ratingCount: 760,
    oldPrice: 1399,
    price: 849,
    discount: 39,
    expressDelivery: false,
    tag: "#CasualWear"
  },
  {
    id: 8,
    brand: "Linen Club",
    title: "Relax Fit Linen Trousers",
    name: "Linen Relaxfit Beach Trousers - White",
    image: LinenTrousers,
    rating: 4.4,
    ratingCount: 980,
    oldPrice: 1299,
    price: 699,
    discount: 46,
    expressDelivery: true,
    tag: "#SummerWear"
  },
  {
    id: 9,
    brand: "Linen Club",
    title: "Striped Linen Casual Shirt",
    name: "Floral Striped Linen Shirt - Grey",
    image: linenshirt,
    rating: 4.2,
    ratingCount: 690,
    oldPrice: 1299,
    price: 749,
    discount: 42,
    expressDelivery: false,
    tag: "#Breathable"
  },
  {
    id: 10,
    brand: "Hoodie Lab",
    title: "Solid Pullover Hoodie",
    name: "Brown Solid Hoodie",
    image: BrownHoddie,
    rating: 4.4,
    ratingCount: 1500,
    oldPrice: 1499,
    price: 799,
    discount: 47,
    expressDelivery: true,
    tag: "#WinterWear"
  },
  {
    id: 11,
    brand: "Urban Basics",
    title: "Solid Casual Shirt",
    name: "Green Casual Shirt",
    image: GreenShirt,
    rating: 4.0,
    ratingCount: 420,
    oldPrice: 999,
    price: 599,
    discount: 40,
    expressDelivery: false,
    tag: "#DailyWear"
  },
  {
    id: 12,
    brand: "Urban Basics",
    title: "Double Pocket Casual Shirt",
    name: "Double Pocket Casual Shirt",
    image: Doublepocket,
    rating: 4.3,
    ratingCount: 860,
    oldPrice: 1399,
    price: 799,
    discount: 43,
    expressDelivery: true,
    tag: "#UtilityStyle"
  },
  {
    id: 13,
    brand: "Urban Basics",
    title: "Slim Fit Casual Shirt",
    name: "Pink Slim Fit Shirt",
    image: PinkShirt,
    rating: 4.1,
    ratingCount: 510,
    oldPrice: 999,
    price: 599,
    discount: 40,
    expressDelivery: false,
    tag: "#SlimFit"
  },
  {
    id: 14,
    brand: "Urban Basics",
    title: "Printed Casual Shirt",
    name: "Printed Casual Shirt",
    image: PrintedShirt,
    rating: 4.2,
    ratingCount: 740,
    oldPrice: 1299,
    price: 799,
    discount: 38,
    expressDelivery: true,
    tag: "#Printed"
  },
  {
    id: 15,
    brand: "Hoodie Lab",
    title: "Puff Print Hoodie",
    name: "You Are Loved Puff Print Hoodie",
    image: whitehoodie,
    rating: 4.6,
    ratingCount: 2600,
    oldPrice: 1699,
    price: 899,
    discount: 47,
    expressDelivery: true,
    tag: "#Trending"
  },
  {
    id: 16,
    brand: "Formal Edge",
    title: "Gurkha Style Formal Pants",
    name: "Gurkha Style Formal Pants",
    image: Gurkhapant,
    rating: 4.4,
    ratingCount: 920,
    oldPrice: 1599,
    price: 899,
    discount: 44,
    expressDelivery: false,
    tag: "#FormalWear"
  }
]


  return (
    <>
    <Navbar/>
    <div className="container">
      <h1 className='shpbyctgrheading m-5 text-center'>New Arrivals</h1>  
      <div className="row">
        {products.map(product => (
          <NewArrivalLayout product={product} key={product.id} />
        ))}
      </div>
    </div>
    <Footer/>
    </>
    
  )
}

export default NewArrival
