import React from 'react'
import { MdOutlinePlace } from "react-icons/md";
import { MdMailOutline } from "react-icons/md";
import { MdCopyright } from "react-icons/md";

const Footer = () => {
    return (
        <footer>
            <div className='flex flex-col items-center justify-between w-full h-[150px] mt-9 bg-[#1E1E1E]'>
                <div className='flex flex-row gap-[120px] mt-10'>
                    <div className='flex flex-row gap-1'>
                        <MdOutlinePlace size={20} color='#FFF'/>
                        <p className='text-white text-xs'>Ciudad Autonoma de Buenos Aires</p>
                    </div>
                    <div className='flex flex-row gap-1'>
                        <MdMailOutline size={20} color='#FFF'/>
                        <p className='text-white text-xs'>estudiojuridicopalomeque@gmail.com</p>
                    </div>
                </div>
                <div className='flex flex-row gap-1 text-center mb-4'>
                    <MdCopyright size={14} color='#FFF'/>
                    <p className='text-white text-xs'><strong>2024</strong> Estudio Palomeque | <strong>Code and Design</strong> by: Santiago Oldani and Mateo Sabelli</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer