import { useState } from 'react'

import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import 'bootstrap/dist/css/bootstrap.min.css'

import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Services from './pages/Services'
import {Routes,Route} from 'react-router-dom'
import AdminLogin from './pages/AdminLogin'
import AdminHome from './pages/AdminHome'
import Register from './pages/Register'
import Login from './pages/login'

function App() {
  return ( 
    <div>
    <Header/>
    <Routes>
      <Route path="/" element={<Home></Home>}></Route>
      <Route path="/about" element={<About></About>}></Route>
      <Route path="/contact" element={<Contact></Contact>}></Route>
      <Route path="/services" elememt={<Services></Services>}></Route>
      <Route path="/Adminlogin" element={<AdminLogin></AdminLogin>}></Route>
      <Route path="/AdminHome" element={<AdminHome></AdminHome>}></Route>
      <Route path="/Register" element={<Register></Register>}></Route>
      <Route path="/Login" element={<Login></Login>}></Route>
    </Routes>
    <Footer/>
    </div>
  )
}
export default App
 