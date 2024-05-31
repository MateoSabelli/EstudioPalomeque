import React from "react";
import Logochiquito from "../../assets/img/logo.png";
import FotoPerfil from "../../assets/img/Foto.png";

const Info = () => {
  return (
    <div className="py-28 max-md:py-20 ">
      <div className="container h-auto d-flex items-center justify-center max-md:flex-col max-md:px-10 ">
          <div className=" flex justify-start items-center gap-3 h-auto w-[50%] max-md:w-full">
            <img src={Logochiquito} alt="" className="h-[70px] " />
            <h2 className="text-[26px] w-[75%] pl-6 ">
              Estudio Juridico Palomeque & Asociados
            </h2>
          </div>
          <div className="h-[20vh] w-[2.5px] mr-20 bg-black"/>

          
        <div className="w-[50%] max-md:w-full max-md:pt-16">
          <h2 className="text-2xl font-black">Somos</h2>
          <p className=" py-10 text-[20px] font-light ">
            Estudio Jurídico especializado en Prevención del Lavado de Activos y
            la Financiación del Terrorismo. Revisor Externo Independiente,
            acreditada ante la Unidad de Información Financiera (UIF)
          </p>
        </div>
      </div>
    </div>
  );
};

export default Info;
