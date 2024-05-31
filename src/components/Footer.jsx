import React from 'react'
import { MdOutlinePlace } from "react-icons/md";
import { MdMailOutline } from "react-icons/md";
import { MdCopyright } from "react-icons/md";

const Footer = () => {
    return (
        <footer>
            <div className='flex flex-col items-center justify-between w-full h-auto gap-4 bg-[#1E1E1E] max-sm:gap-y-5 py-10'>
                <div className='flex gap-[80px] mt-10 max-sm:gap-0 max-sm:gap-y-5 max-sm:flex-col '>
                    <div className='flex flex-row gap-1'>
                        <MdOutlinePlace size={20} color='#FFF'/>
                        <p className='text-white text-xs'>Ciudad Autonoma de Buenos Aires</p>
                    </div>
                    <div className='flex flex-row gap-1'>
                        <MdMailOutline size={20} color='#FFF'/>
                        <p className='text-white text-xs'>estudiojuridicopalomeque@gmail.com</p>
                    </div>
                </div>
                <div className='flex flex-row gap-1 text-center mb-4 max-sm:px-20'>
                    <MdCopyright size={14} color='#FFF'/>
                    <p className='text-white text-xs'><strong>2024</strong> Estudio Palomeque | <strong>Code and Design</strong> by: Santiago Oldani and Mateo Sabelli</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer