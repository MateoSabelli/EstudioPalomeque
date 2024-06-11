import React from "react";
import Logochiquito from "../../assets/img/logo.png";
import { motion, useScroll } from "framer-motion"
import eugenia from '../../assets/img/Foto.png'

const Info = () => {
  return (
    <motion.div transition={{ duration: 0.5 }}  viewport={{ amount: 'all' }} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="px-[100px] pb- pt-[80px] max-lg:py-15 ">
      <div className="container h-auto d-flex flex-col items-start justify-center max-lg:flex-col max-lg:px-10 ">
        <div className=" flex justify-start items-center gap-3 h-auto w-[50%] max-lg:w-full">
          <img src={Logochiquito} alt="" className="h-[70px] " />
          <h2 className="text-[26px] w-[75%] pl-6 ">
            Estudio Juridico Palomeque & Asociados
          </h2>
        </div>
        <div className="w-[50%] max-lg:w-full max-lg:pt-16">
          <p className=" py-10 pb-3 text-[20px] font-light ">
            Estudio Jurídico especializado en Prevención del Lavado de Activos y
            la Financiación del Terrorismo. Revisor Externo Independiente,
            acreditada ante la Unidad de Información Financiera (UIF)
          </p>
        </div>
        <h5 className="text-sm mt-6 italic"> Medidas contra el lavado de dinero || Mercado de capitales || Planificacion estrategica || Finanzas corporativas || Riesgo financiero </h5>
        <div className="flex flex-row items-center gap-7 justify-center mt-[80px]">
          <img className="w-[90px] h-auto" src={eugenia} />
          <h5 className="p-0 text-xl">Eugenia Palomeque</h5>
        </div>
      </div>
    </motion.div>
  );
};

export default Info;
