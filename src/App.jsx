import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import Home from './components/Home/Home'
import { BrowserRouter } from 'react-router-dom';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Home />
      {/* <BrowserRouter>      
      <Routes>
      <Route path='*' element = {<Home />} />
      <Route path='/home' element = {<HomePage />} />
      <Route path='/about' element = {<AdminLogin />} />
      <Route path='/contact' element = {<AdminLogin />} />

        <Route path='/adminLogin' element = {<AdminLogin />} />
        <Route path='/adminDashboard' element = {<AdminDashboard />} />
      </Routes>
        </BrowserRouter> */}
    </div>
  )
}

export default App
