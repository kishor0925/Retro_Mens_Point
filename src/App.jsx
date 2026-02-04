import React from 'react'
import Navbar from './Home/Navbar/Navbar'
import Courosel from './Home/Courousel/Courosel'
import Shpbycstgry from './Home/ShopBycetgry/Shpbycstgry'
import TrendingNow from './Home/TrendingNow/TrendingNow'


const App = () => {


  return (
    <>
      <Navbar/>
      <Courosel/>
      <Shpbycstgry />
      <TrendingNow/>
    </>
  )
}

export default App