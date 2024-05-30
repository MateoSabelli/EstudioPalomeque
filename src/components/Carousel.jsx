import React from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'

const Carousel = () => {
  const [emblaRef] = useEmblaCarousel({ loop: true }, [Autoplay()])
  return (
      <div className="embla items-center justify-center w-full h-[500px]  mb-8 " ref={emblaRef}>
      <div className="embla__container ">
        <div className="embla__slide section relative h-[550px]">
          <div className='absolute left-5 bottom-[120px]'>
            <h5 className='text-white text-[40px] mb-0 font-bold'>Diseño de procesos</h5>
            <div className='w-[50%] h-[1px] bg-white mb-4 mt-2'/>
            <p className='text-white text-xs'>Elaboración y adecuación de políticas y procedimientos para su implementación y cumplimiento normativo. Manuales. Códigos. Lineamientos.</p>
            <button className='flex items-center text-xs justify-center rounded-[5px] mt-4 text-center py-2 w-[90px] h-4 bg-[#C4A66B]'>
                Saber mas
            </button>
          </div>
        </div>
        <div className="embla__slide relative section2 h-[550px]">
        <div className='absolute left-5 bottom-[120px]'>
            <h5 className='text-white text-[40px] mb-0 font-bold'>Auditoría</h5>
            <div className='w-[50%] h-[1px] bg-white mb-4 mt-2'/>
            <p className='text-white text-xs'>Revisión detallada de procesos y operaciones para asegurar el cumplimiento de normativas y estándares, identificando áreas de mejora.</p>
            <button className='flex items-center text-xs justify-center rounded-[5px] mt-4 text-center py-2 w-[90px] h-4 bg-[#C4A66B]'>
                Saber mas
            </button>
          </div>
        </div>
        <div className="embla__slide relative section3 h-[550px]">
        <div className='absolute left-5 bottom-[120px]'>
            <h5 className='text-white text-[40px] mb-0 font-bold'>Comite</h5>
            <div className='w-[50%] h-[1px] bg-white mb-4 mt-2'/>
            <p className='text-white text-xs'>Establecimiento y gestión de comités especializados para supervisar y guiar áreas clave como cumplimiento normativo, ética y riesgos.</p>
            <button className='flex items-center text-xs justify-center rounded-[5px] mt-4 text-center py-2 w-[90px] h-4 bg-[#C4A66B]'>
                Saber mas
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Carousel
