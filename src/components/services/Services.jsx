import React from "react";
import Cards from "./Cards";
import { motion, useMotionValueEvent, useScroll } from "framer-motion"

const Services = () => {
  return (
    <motion.section

      className="flex flex-col py-[100px] text-center items-center"
      id="practice">
      <motion.div /* transition={{ duration: 1 }} viewport={{ amount: 'all' }} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} */ className="flex flex-col w-full h-[200px] bg-black text-center justify-evenly">
        <h4 className="text-[#C4A66B] font-bold text-[24px]">
          Areas de especialización
        </h4>
        <h3 className="text-[30px] font-light text-neutral-100 max-md:px-16">
          Conocé las áreas donde podemos ayudarte
        </h3>
      </motion.div>

      <div className="bg-neutral-100 w-full d-flex justify-center items-center py-[80px]">
        <div className="grid grid-cols-2 grid-rows-3 gap-y-[60px] gap-x-[100px] max-[993px]:gap-x-[50px] max-[849px]:grid-cols-1 ">
          <Cards
            direction={'left'}
            title={"Diseño de procesos"}
            desc={
              "Planificación y estructuración de procedimientos internos para mejorar la eficiencia y el cumplimiento de normativas, analizando y optimizando flujos de trabajo."
            }
          />
          <Cards
             direction={'left'}
            title={"Reingeniería de Procesos (REI)"}
            desc={
              "Revisión y rediseño de procesos de negocio existentes para lograr mejoras significativas en costos, calidad y rapidez, eliminando ineficiencias."
            }
          />
          <Cards
            
            title={"Capacitacion"}
            desc={
              "Desarrollo de programas formativos y talleres para mejorar las habilidades y conocimientos del personal, asegurando un rendimiento óptimo y actualizado."
            }
          />
          <Cards
            
            title={"Auditoria"}
            desc={
              "Revisión detallada de procesos y operaciones para asegurar el cumplimiento de normativas y estándares, identificando áreas de mejora."
            }
          />
          <Cards
             direction={'left'}
            title={"Comite"}
            desc={
              "Establecimiento y gestión de comités especializados para supervisar y guiar áreas clave como cumplimiento normativo, ética y riesgos."
            }
          />
          <Cards
            direction={'left'}
            title={"Requerimientos"}
            desc={
              "Identificación, documentación y seguimiento de necesidades legales y operativas, asegurando su gestión eficiente y el cumplimiento normativo."
            }
          />
        </div>
      </div>
    </motion.section>
  );
};

export default Services;
