import React from 'react'

const Cards = (title) => {
    return (
        <div className='flex flex-col justify-center items-center bg-[#333333] w-[445px] h-[280px] rounded-3xl pt-[6px] px-[28px] pb-0'>
            <div className='text-start'>
                <h6 className='text-[#C4A66B] mb-7 text-[24px]'>{title.title}</h6>
                <p className='text-[#FFFFFF] w-full mb-7'>
                    {title.desc}
                </p>
            </div>
            <button className='flex items-center justify-center rounded-3xl text-center p-4 w-[140px] h-4 bg-[#C4A66B]'>
                Saber mas
            </button>
        </div>
    )
}

export default Cards