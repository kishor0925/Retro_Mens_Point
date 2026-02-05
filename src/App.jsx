import React from 'react'
import Navbar from './Home/Navbar/Navbar'
import Courosel from './Home/Courousel/Courosel'
import Shpbycstgry from './Home/ShopBycetgry/Shpbycstgry'
import TrendingNow from './Home/TrendingNow/TrendingNow'
import './index.css'
import Banner from './Home/Banner/Banner'
import LatestCollections from './Home/LatestCollection/LatestCollections'
import CustomerReview from './Home/Testimonials/CustomerReview'
import Footer from './Home/Footer/Footer'

const App = () => {


  return (
    <>
      <Navbar/>
      <Courosel/>
      <Shpbycstgry />
      <TrendingNow/>
      <Banner/>
      <LatestCollections/>  
      <CustomerReview/>   
      <Footer/>
    </>
  )
}

export default App