
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Collection from './pages/Collection'
import Contact from './pages/Contact'
import About from './pages/About'
import Product from './pages/Product'
import Cart from './pages/Cart'
import Orders from './pages/Orders'
import Login from './pages/Login'
import Placeorder from './pages/Placeorder'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import SearchBar from './components/SearchBar'
import { ToastContainer, toast } from 'react-toastify';




function App() {
  return (
    <div className='px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]'>
      <Navbar />
   <SearchBar/>
   <ToastContainer/>
  
      
      <Routes>
        <Route path='/' element={<Home/>} >
        </Route>
        <Route path='/Collection' element={<Collection/>} >
        </Route>
        <Route path='/Contact' element={<Contact/>} >
        </Route>
        <Route path='/About' element={<About/>} >
        </Route>
        <Route path='/Product/:productId' element={<Product/>} >
        </Route>
        <Route path='/Cart' element={<Cart/>} >
        </Route>
        <Route path='/Orders' element={<Orders/>} >
        </Route>
        <Route path='/Login' element={<Login/>} >
        </Route>
        <Route path='/Placeorder' element={<Placeorder/>} >
        </Route>
        </Routes>
        <Footer/>
    
    </div>
  )
}

export default App
