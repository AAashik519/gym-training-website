 import Home from './pages/home/Home'
 import {BrowserRouter ,Routes, Route} from 'react-router-dom'
 import React from 'react'
import Gallary from './pages/gallary/Gallary'
import About from './pages/about/About'
import Contact from './pages/contact/Contact'
import Plans from './pages/plans/Plans'
import Trainers from './pages/trainers/Trainers'
import NotFound from './pages/notFound/NotFound'
import Navbar from './Components/Navbar/Navbar'
 
 
 
 const App = () => {
   return (
     <BrowserRouter> 
     <Navbar />
      <Home />
      <About />
      <Contact />
      <Gallary/>
      <Plans />
      <Trainers />
      <NotFound />

     </BrowserRouter>
   )
 }
 
 export default App