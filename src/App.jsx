import './App.css'
import Carousel from './components/Carousel'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import Services from './components/services/Services'
import { FaWhatsapp } from "react-icons/fa6";

function App() {

  return (
    <div className='flex flex-col relative'>
      <Navbar/>
      <Carousel/> 
      <Services/>
      <FaWhatsapp className='absolute bottom-4 right-4'/>
      <Footer/>
    </div>
  )
}

export default App
