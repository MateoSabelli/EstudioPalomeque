import React from 'react'
import Cards from './Cards'

const Services = () => {
  return (
    <section className='flex flex-col text-center items-center gap-[70px]'>
      <h4 className='text-[#C4A66B] font-bold text-[24px]'>Areas de especializacion</h4>
      <h3 className='text-[30px] font-light text-[#333333] max-md:px-16'>Conoce las areas donde podemos ayudarte</h3>
      <div className='grid grid-cols-2 grid-rows-3 gap-y-[60px] gap-x-[100px] max-[993px]:gap-x-[50px] max-[849px]:grid-cols-1'>
        <Cards
          title={"Diseño de procesos"}
          desc={"Planificación y estructuración de procedimientos internos para mejorar la eficiencia y el cumplimiento de normativas, analizando y optimizando flujos de trabajo."}
        />
        <Cards
          title={"Reingeniería de Procesos (REI)"}
          desc={"Revisión y rediseño de procesos de negocio existentes para lograr mejoras significativas en costos, calidad y rapidez, eliminando ineficiencias."}
        />
        <Cards
          title={"Capacitacion"}
          desc={"Desarrollo de programas formativos y talleres para mejorar las habilidades y conocimientos del personal, asegurando un rendimiento óptimo y actualizado."}
        />
        <Cards
          title={"Auditoria"}
          desc={"Revisión detallada de procesos y operaciones para asegurar el cumplimiento de normativas y estándares, identificando áreas de mejora."}
        />
        <Cards
          title={"Comite"}
          desc={"Establecimiento y gestión de comités especializados para supervisar y guiar áreas clave como cumplimiento normativo, ética y riesgos."}
        />
        <Cards
          title={"Requerimientos"}
          desc={"Identificación, documentación y seguimiento de necesidades legales y operativas, asegurando su gestión eficiente y el cumplimiento normativo."}
        />
      </div>
    </section>
  )
}

export default Services