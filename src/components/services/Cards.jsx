import React from 'react'

const Cards = (title) => {
    return (
        <div className='flex flex-col justify-center items-center bg-[#333333] w-[450px] h-[280px] rounded-3xl pt-[6px] px-[28px] pb-0 max-[993px]:w-[400px] max-[360px]:w-[250px]' >
            <div className='text-start'>
                <h6 className='text-[#C4A66B] mb-4 text-xl max-[993px]:text-lg'>{title.title}</h6>
                <p className='text-[#FFFFFF] text-base w-full mb-7 max-[993px]:text-sm opacity-70'>
                    {title.desc}
                </p>
            </div>
            <button className='flex items-center justify-center rounded-3xl text-center p-2 w-[140px] h-8 bg-[#C4A66B] max-[993px]:h-6'>
                Saber mas
            </button>
        </div>
    )
}

export default Cards