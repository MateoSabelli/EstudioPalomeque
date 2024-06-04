import React from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'

const Carousel = () => {
  const [emblaRef] = useEmblaCarousel({ loop: true }, [Autoplay()])
  return (
    <div className="embla items-center justify-center w-full h-[600px]  mb-8 " ref={emblaRef}>
      <div className="embla__container ">
        <div className="embla__slide section relative h-[600px]">
          <div className='absolute left-[105px] bottom-[80px]'>
            <h5 className='text-white text-[40px] mb-0 font-bold'>Diseño de procesos</h5>
            <div className='w-[50%] h-[1px] bg-white mb-4 mt-2' />
            <p className='text-white text-xs'>Elaboración y adecuación de políticas y procedimientos para su implementación y cumplimiento normativo. Manuales. Códigos. Lineamientos.</p>
            <a target='_blank' href="https://api.whatsapp.com/send?phone=541133097174&text=Hola%2C%20quer%C3%ADa%20saber%20m%C3%A1s%20acerca%20de%20los%20servicios%20de%20su%20estudio%20jur%C3%ADdico.">
              <button className='flex items-center text-xs justify-center rounded-[5px] mt-4 text-center py-2 w-[90px] h-4 bg-[#C4A66B]'>
                Saber más
              </button>
            </a>
          </div>
        </div>
        <div className="embla__slide relative section2 h-[600px]">
          <div className='absolute left-[105px] bottom-[80px]'>
            <h5 className='text-white text-[40px] mb-0 font-bold'>Auditoría</h5>
            <div className='w-[50%] h-[1px] bg-white mb-4 mt-2' />
            <p className='text-white text-xs'>Revisión detallada de procesos y operaciones para asegurar el cumplimiento de normativas y estándares, identificando áreas de mejora.</p>
            <a target='_blank' href="https://api.whatsapp.com/send?phone=541133097174&text=Hola%2C%20quer%C3%ADa%20saber%20m%C3%A1s%20acerca%20de%20los%20servicios%20de%20su%20estudio%20jur%C3%ADdico.">
              <button className='flex items-center text-xs justify-center rounded-[5px] mt-4 text-center py-2 w-[90px] h-4 bg-[#C4A66B]'>
                Saber más
              </button>
            </a>
          </div>
        </div>
        <div className="embla__slide relative section3 h-[600px]">
          <div className='absolute left-[105px] bottom-[80px]'>
            <h5 className='text-white text-[40px] mb-0 font-bold'>Comite</h5>
            <div className='w-[50%] h-[1px] bg-white mb-4 mt-2' />
            <p className='text-white text-xs'>Establecimiento y gestión de comités especializados para supervisar y guiar áreas clave como cumplimiento normativo, ética y riesgos.</p>
            <a target='_blank' href="https://api.whatsapp.com/send?phone=541133097174&text=Hola%2C%20quer%C3%ADa%20saber%20m%C3%A1s%20acerca%20de%20los%20servicios%20de%20su%20estudio%20jur%C3%ADdico.">
              <button className='flex items-center text-xs justify-center rounded-[5px] mt-4 text-center py-2 w-[90px] h-4 bg-[#C4A66B]'>
                Saber más
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Carousel
