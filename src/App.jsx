import React from 'react'
import './index.css'
import Home from './Home'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NewArrival from './Components/NewArrival/NewArrival'

const App = () => {


  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
       <Route path='/newarrival' element={<NewArrival />} />
      </Routes>
    </BrowserRouter>

  )
}

export default App