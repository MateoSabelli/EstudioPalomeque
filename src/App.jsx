import './App.css'
import Carousel from './components/Carousel'
import Navbar from './components/Navbar'
import Services from './components/services/Services'

function App() {

  return (
    <div className='flex flex-col'>
      <Navbar/>
      <Carousel/> 
      <Services/>
    </div>
  )
}

export default App
