import React from 'react';
const Oracion = () => {
  return (
    <div className="pt-16"> {/* Padding top para compensar el header fijo */}
      {/* Sección 1 - Hero */}
      <section 
        className="min-h-screen flex flex-col justify-center items-center text-white text-center p-5 bg-cover bg-center"
        style={{ backgroundImage: "url('/img/oraciones.jpg')" }}
      >
        <h1 className="text-5xl md:text-7xl mb-4">ORACIÓN</h1>
        <p className="text-lg md:text-xl max-w-4xl mx-auto p-5">
          La oración es una conversación íntima con Dios, un diálogo donde expresamos nuestros pensamientos, sentimientos, 
          preocupaciones y gratitud. Es un acto de fe que nos conecta con lo divino, permitiéndonos experimentar la presencia 
          y el amor de Dios en nuestras vidas. A través de la oración, encontramos consuelo en tiempos difíciles, 
          orientación en momentos de confusión y fortaleza para enfrentar los desafíos diarios.
        </p>
      </section>

      {/* Sección 2 - Formulario */}
      <section className="py-10 px-5 bg-black">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl text-white text-center mb-8">Envíanos tu petición de oración</h2>
          
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="nombre" className="block text-white mb-2">Nombre</label>
                <input 
                  type="text" 
                  id="nombre" 
                  name="nombre" 
                  className="w-full p-3 bg-gray-800 text-white rounded focus:outline-none focus:ring-2 focus:ring-[#f0b261]"
                  placeholder="Tu nombre"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-white mb-2">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  className="w-full p-3 bg-gray-800 text-white rounded focus:outline-none focus:ring-2 focus:ring-[#f0b261]"
                  placeholder="tu@email.com"
                  required
                />
              </div>
            </div>
            
            <div>
              <label htmlFor="peticion" className="block text-white mb-2">Tu petición de oración</label>
              <textarea 
                id="peticion" 
                name="peticion" 
                rows={5} 
                className="w-full p-3 bg-gray-800 text-white rounded focus:outline-none focus:ring-2 focus:ring-[#f0b261]"
                placeholder="Escribe aquí tu petición de oración..."
                required
              ></textarea>
            </div>
            
            <div className="text-center">
              <button 
                type="submit" 
                className="bg-[#f0b261] text-black font-bold py-3 px-8 rounded-lg hover:bg-[#d89b4f] transition-colors"
              >
                Enviar petición
              </button>
            </div>
          </form>
        </div>
        
        {/* Botón de WhatsApp */}
        <a 
          href="https://wa.me/51925396764" 
          className="fixed bottom-24 left-5 z-50 inline-flex items-center justify-center px-5 py-3 bg-green-500 text-black rounded-full hover:bg-green-400 transition-colors shadow-lg"
          target="_blank" 
          rel="noopener noreferrer"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="w-6 h-6 mr-2 fill-current">
            <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"/>
          </svg>
          Contáctanos
        </a>
      </section>

      {/* Sección 3 - Testimonios */}
      <section className="py-10 px-5 bg-gray-200 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl text-gray-800 mb-8">Testimonios de Oración</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <p className="text-gray-700 mb-4">"Después de meses de oración constante, mi hijo encontró su camino de regreso a la fe. ¡Dios es fiel!"</p>
              <p className="font-bold text-gray-900">- María L.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <p className="text-gray-700 mb-4">"Oré por sanidad y después de tres semanas, los médicos no podían explicar cómo mi condición había mejorado tan rápidamente."</p>
              <p className="font-bold text-gray-900">- Carlos P.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <p className="text-gray-700 mb-4">"La oración me dio paz en medio de la tormenta financiera que estaba atravesando. Ahora tengo un nuevo trabajo y estabilidad."</p>
              <p className="font-bold text-gray-900">- Ana M.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Oracion;