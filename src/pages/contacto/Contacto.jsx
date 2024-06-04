import React from "react";

const Contacto = () => {
  return (
    <section className="bg-white d-flex justify-center items-center" id="contact">
      <div className="py-8 lg:py-16 px-10 mx-auto max-w-screen-md">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 ">Contactanos</h2>
          <p className="mb-8 lg:mb-16 font-light text-center text-gray-500  sm:text-xl">No dudes en consultarnos cualquier duda que tengas! Esperamos hacer todo lo posible para ayudarte! </p>
          <form action="#" className="space-y-8">
              <div>
                  <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900">Email</label>
                  <input type="email" id="email" className="bg-[#1E1E1E] shadow-sm  border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 " placeholder="estudiojuridicopalomeque@gmail.com" required/>
              </div>
              <div>
                  <label htmlFor="subject" className="block mb-2 text-sm font-medium text-gray-900">Nombre y Apellido</label>
                  <input type="text" id="subject" className="bg-[#1E1E1E] block p-3 w-full text-sm text-gray-900  rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 " placeholder="Nombre Completo" required/>
              </div>
              <div>
                  <label htmlFor="subject" className="block mb-2 text-sm font-medium text-gray-900">Telefono</label>
                  <input type="tel" id="subject" className="bg-[#1E1E1E] block p-3 w-full text-sm text-gray-900  rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 " placeholder="Telefono" required/>
              </div>
              <div className="sm:col-span-2">
                  <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900 ">Mensaje</label>
                  <textarea id="message" rows="6" className="bg-[#1E1E1E] block p-2.5 w-full text-sm text-gray-900  rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 " placeholder="Deja tu comentario..."></textarea>
              </div>
              <button type="submit" className=" py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-[#1E1E1E] sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 ">Send message</button>
          </form>
      </div>
      
    </section>

  );
};

export default Contacto;
