import React from 'react'
import Logochiquito from '../../assets/img/logo.png'
import FotoPerfil from '../../assets/img/Foto.png'

const Info = () => {
  return (
    <div className=' h-[60vh]'>
        <div className='pl-24 flex justify-start items-center gap-3'>
            <img src={Logochiquito} alt="" className='h-[80px] '/>
            <h2 className='text-[36px] w-[35%] pl-6'>Estudio Juridico Palomeque & Asociados</h2>
        </div>
        <p className='pl-24 py-10 text-[20px] font-light w-[35%]'>Estudio Jurídico especializado en Prevención del Lavado de Activos y la Financiación del Terrorismo. Revisor Externo Independiente, acreditada ante la Unidad de Información Financiera (UIF)</p>
        <div className='pl-24 flex justify-start items-center'>
            <img src={FotoPerfil} alt="" className='h-[80px]' />
            <p className='px-6 text-[20px]'>Eugenia Palomeque</p>
        </div>
        <div className='bg-[#C4A66B] mt-20 h-20 '></div>
    </div>
  )
}

export default Info