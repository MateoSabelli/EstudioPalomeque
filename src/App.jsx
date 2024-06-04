import './App.css'
import Carousel from './components/Carousel'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import Info from './pages/Info/Info'
import Services from './components/services/Services'
import Contacto from './pages/contacto/Contacto'
import { FaWhatsapp } from "react-icons/fa6";

function App() {

  return (
    <div className='flex flex-col relative'>
      <Navbar />
      <Carousel />
      <Info />
      <Services />
      <Contacto />
      <a target='_blank' href="https://api.whatsapp.com/send?phone=541133097174&text=Hola%2C%20quer%C3%ADa%20saber%20m%C3%A1s%20acerca%20de%20los%20servicios%20de%20su%20estudio%20jur%C3%ADdico.">
        <FaWhatsapp color='#25d366' className='fixed size-12 bottom-4 right-4' />
      </a>
      <Footer />
    </div>
  )
}

export default App
