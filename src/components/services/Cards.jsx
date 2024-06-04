import React from 'react'
import { motion } from 'framer-motion'

const Cards = (title) => {
    return (
        <motion.div transition={{duration: 1}} initial={{x: -300}} whileInView={{x: 0}} whileHover={{scale: 1.1}} className='flex flex-col justify-center items-center bg-[#333333] w-[450px] h-[280px] rounded-3xl pt-[6px] px-[28px] pb-0 max-[993px]:w-[400px] max-[360px]:w-[250px]' >
            <div className='text-start'>
                <h6 className='text-[#C4A66B] mb-4 text-xl max-[993px]:text-lg'>{title.title}</h6>
                <p className='text-[#FFFFFF] text-base w-full mb-7 max-[993px]:text-sm opacity-70'>
                    {title.desc}
                </p>
            </div>
            <a target='_blank' href="https://api.whatsapp.com/send?phone=541133097174&text=Hola%2C%20quer%C3%ADa%20saber%20m%C3%A1s%20acerca%20de%20los%20servicios%20de%20su%20estudio%20jur%C3%ADdico.">
                <button className='flex items-center justify-center rounded-3xl text-center p-2 w-[140px] h-8 bg-[#C4A66B] max-[993px]:h-6'>
                    Saber más
                </button></a>
        </motion.div>
    )
}

export default Cards