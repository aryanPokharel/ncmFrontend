import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import Home from './components/Home/Home';
import Services from './components/Services/Services'
import AboutUs from './components/AboutUs/AboutUs'

import Contact from './components/Contact/Contact'
import NewsMedia from './components/NewsMedia/NewsMedia'

import Location from './components/Location/Location'

import { BrowserRouter } from 'react-router-dom';
import { Route, Routes, useNavigate } from "react-router-dom";
import GetInTouch from './components/GetInTouch/GetInTouch';
function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path='*' element={<Home />} />
          <Route path='/about' element={<AboutUs />} />
          <Route path='/services' element={<Services />} />
          <Route path='/contact' element={<Contact />} />

          <Route path='/newsMedia' element={<NewsMedia />} />
          <Route path='/locations' element={<Location />} />
        </Routes>
      </BrowserRouter>
      <GetInTouch />
      <Footer />
    </div>
  )
}

export default App
