import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import LogoWeb from '../assets/img/image.png'
import LogoMob from '../assets/img/logo.png'

const Navbar = () => {
    /* const [Navbar, setNavbar] = useState(false)

    if(Navbar === true){
        document.getElementbyId("mobile-menu").classList.remove('hidden')
        console.log("abrirse")
    }


  return (
    <div className='h-[10vh] flex justify-between items-center max-w-[1250px] m-auto relative'>
        <div>
           <img src={LogoWeb} alt="Logo" className='h-[50px] max-sm:hidden' />
           <img src={LogoMob} alt="Logo" className='h-[50px] min-[768px]:hidden'/>
        </div>

        <div>
            <button onClick={()=> setNavbar(!Navbar)} className='max-sm:block min-[768px]:hidden'>
                <svg xmlns="http://www.w3.org/2000/svg" className='h-6 w-6 text-[#C4A66B]' fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
            </button>
            <button className='min-[768px]:hidden'>
                <svg xmlns="http://www.w3.org/2000/svg" className='h-6 w-6 text-[#C4A66B]' fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
            </button>
        </div>


        <div className=' w-full h-[80vh] flex flex-col justify-center items-center min-[768px]:hidden ' id='mobile-menu'>
            <nav>
                <ul className=' text-[#C4A66B] text-base'>
                    <li>
                        <Link to='/' className=' p-6'>Inicio</Link>
                    </li>
                    <li>
                        <Link to='/about' className=' p-6'>Areas de practica</Link>
                    </li>
                    <li>
                        <Link to='/contact' className=' p-6'>Contacto</Link>
                    </li>
                </ul>
            </nav>
        </div>
        
        
        <nav className='max-sm:hidden' id='navMobile' >
            <ul className='flex justify-between text-[#C4A66B] text-base'>
                <li>
                    <Link to='/' className=' p-6'>Inicio</Link>
                </li>
                <li>
                    <Link to='/about' className=' p-6'>Areas de practica</Link>
                </li>
                <li>
                    <Link to='/contact' className=' p-6'>Contacto</Link>
                </li>
            </ul>
        </nav>
    </div>
  ) */
  
  const [button, setButton] =useState(true)

  const menu = () => {
    setButton(!button) 
  };

const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
const [productsDropdownOpen, setProductsDropdownOpen] = useState(false);

const toggleServicesDropdown = () => setServicesDropdownOpen(!servicesDropdownOpen);
const toggleProductsDropdown = () => setProductsDropdownOpen(!productsDropdownOpen);

  return (
    <div className='fixed w-full '>
          <div className='h-[10vh] flex justify-between items-center '>
            {/* Logos */}
            <div className='w-1/2 '>
              <img src={LogoWeb} alt="Logo" className='h-[50px] block mx-auto max-[768px]:hidden' />
              <img src={LogoMob} alt="Logo" className='h-[50px] block mx-auto min-[768px]:hidden'/>
            </div>
            {/* Menu Web */}
              <nav className={button ? 'max-md:hidden block mx-auto' : 'hidden'}>
                  <ul className='flex gap-5 italic text-[#333333]'>
                      <li className='hover:text-sky-500'><a href="">Inicio</a></li>

              <li className='block'
              onMouseEnter={toggleServicesDropdown} onMouseLeave={toggleServicesDropdown}>
              <a href="" className='hover:text-[#C4A66B]'>Areas de practicas</a>
              
              {servicesDropdownOpen && (
                <div className="absolute flex flex-col justify-center items-center py-2 w-1/12 border-t-[#C4A66B] border-t-2 border-gray-300 border-2">
                  <a href="#">Inicio</a>
                  <a href="#">Areas de practica</a>
                  <a href="#">Contacto</a>
                </div>
              )}
            </li>
            <li onMouseEnter={toggleProductsDropdown} onMouseLeave={toggleProductsDropdown}>
              <a href="" className='hover:text-[#C4A66B]'>Contacto</a>
            </li>
                  </ul>
              </nav>
              
              <button className={button ? 'w-1/2 md:hidden flex justify-center' : 'hidden w-1/2 '} onClick={menu}>
              <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-menu-2" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#000000" fill="none" stroke-linecap="round" stroke-linejoin="round">
              <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
              <path d="M4 6l16 0" />
              <path d="M4 12l16 0" />
              <path d="M4 18l16 0" />
              </svg>
              </button>

              <button className={button ? 'hidden w-1/2' : ''} onClick={menu}>
                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-x" className='text-center' width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#000000" fill="none" stroke-linecap="round" stroke-linejoin="round">
                      <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                      <path d="M18 6l-12 12" />
                      <path d="M6 6l12 12" />
                </svg>
              </button>
          </div>
          <div className={button ? 'hidden' : ''} id='nav-mobile' >
            <div className='h-[100vh] gap-16 justify-center items-center bg-[#F5F5DC]'>
                  <ul className='flex flex-col justify-center items-center h-full gap-2'>
                    <li><a href="">Inicio</a></li>
                    <li><a href="">Areas de practica</a></li>
                    <li><a href="">Contacto</a></li>
                  </ul>
            </div>

          </div>
    </div>
  )
}

export default Navbar