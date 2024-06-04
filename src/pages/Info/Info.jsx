import React from "react";
import Logochiquito from "../../assets/img/logo.png";
import { motion, useScroll } from "framer-motion"

const Info = () => {
  return (
    <motion.div transition={{duration: 1}} viewport={{amount: 'all'}} initial={{opacity: 0}} whileInView={{opacity: 1}} className=" py-20 max-lg:py-15 ">
      <div className="container h-auto d-flex items-center justify-center max-lg:flex-col max-lg:px-10 ">
          <div className=" flex justify-start items-center gap-3 h-auto w-[50%] max-lg:w-full">
            <img src={Logochiquito} alt="" className="h-[70px] " />
            <h2 className="text-[26px] w-[75%] pl-6 ">
              Estudio Juridico Palomeque & Asociados
            </h2>
          </div>
          <div className="h-[20vh] w-[2.5px] mr-20 bg-black max-lg:hidden"/>

          
        <div className="w-[50%] max-lg:w-full max-lg:pt-16">
          <h2 className="text-2xl font-black">Somos</h2>
          <p className=" py-10 text-[20px] font-light ">
            Estudio Jurídico especializado en Prevención del Lavado de Activos y
            la Financiación del Terrorismo. Revisor Externo Independiente,
            acreditada ante la Unidad de Información Financiera (UIF)
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default Info;
