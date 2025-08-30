import React, { useState } from "react";

const whatsappNumber = "51913882945"; // Reemplaza por tu número de WhatsApp

type Evento = {
  id: number;
  titulo: string;
  fecha: string;
  lugar: string;
  categoria: string;
  img: string;
  presencial?: boolean;
  descripcion?: string;
  artista?: string;
  precio?: string;
  horario?: string;
  mapa?: string;
};

const eventosProximos: Evento[] = [
 {
    id: 1,
    titulo: "LA RESISTENCIA",
    fecha: "31 de octubre, 1 y 2 de noviembre 2025",
    lugar: "Molino viejo - Huatatas",
    categoria: "campamento",
    img: "/img/larecistencia.mp4",
    presencial: true,
    descripcion:
      "🚨 ¡Atención Hijos y Nietos de Pastores de la Región Ayacucho! ¡El campamento que estabas esperando ya llegó! 🔥 🗓️ 31 de octubre, 1 y 2 de noviembre – tres días que marcarán tu vida. ✨ ¿Por qué no puedes perdértelo? ⭕️ Actividades épicas para jóvenes desde los 10 años en adelante. 💥 ⭕️ Conexión auténtica con otros hijos y nietos de pastores. 🌍 ⭕️ Descubrirás que eres parte de una gran familia de llamados al ministerio. 🙌 ⭕️ Recibirás un impulso real para tu crecimiento espiritual. 🔥 ⭕️ Invitados especiales desde la Asociación de Hijos de Pastores de El Salvador. 🥳🤩 💥 Este campamento no es solo juegos… es el lugar perfecto para crear amistades duraderas, fortalecer tu fe y vivir momentos que transformarán tu vida.",
    artista: "hdm , newsing",
    precio: "Desde S/100.00",
    horario: "Puertas: 6:00 PM | Inicio: 8:30 PM",
    mapa: "https://maps.app.goo.gl/R4VdnP9gqnmSSxVi7",
  },
  {
    id: 3,
    titulo: "CAMPAMENTO UNO EN CRISTO KIDS 2025",
    fecha: "31 de octubre al 2 de noviembre 2025",
    lugar: "Región Huamanga",
    categoria: "Campamento",
    img: "/img/campaniño2025.webp",
    presencial: true,
    descripcion: "🚀 ¡Presentamos el NUEVO FORMATO! 🚀 ⭐️ Campamento UNO EN CRISTO KIDS 2025 ⭐️\nDel 31 de octubre al 2 de noviembre, vive una experiencia única diseñada para transformar la vida de los más pequeños y fortalecer su fe en Cristo.\nDirigido a: Niños de 8 a 13 años.\n🔸 Detalles Clave:\n💰 Costo del evento: 60 soles\n🔒 Cupos limitados: 100\n📞 Inscripciones: 918 862 125 - 901473345\n🔥 ¡Lo mejor está por venir cuando estamos unidos en Cristo! Este campamento es una oportunidad para que los niños descubran el propósito que Dios tiene para sus vidas, se diviertan y vivan una experiencia transformadora. ¡No están solos! Cristo tiene un plan increíble para ellos. 🔥\nOrganiza: Ministerio Regional de Niños y Adolescentes, Región Huamanga.\n¡Únete a nosotros y sé parte de esta aventura de fe! ✨",
    artista: "Ministerio Regional de Niños y Adolescentes",
    precio: "S/60.00",
    horario: "31 de octubre al 2 de noviembre, 2025",
    mapa: "https://maps.app.goo.gl/R4VdnP9gqnmSSxVi7",
  },
  {
    id: 4,
    titulo: "106 ANIVERSARIO DE LADP",
    fecha: "17 al 19 de octubre 2025",
    lugar: "Colegio Apostol Pablo - Región Huamanga",
    categoria: "Celebración",
    img: "/img/ladp.jpg",
    presencial: true,
    descripcion: "🥳 LADP - Región Huamanga se prepara para la fiesta de los 106 Aniversario de LADP 🥳\n\n🗓️ Del 17 al 19 de octubre, sé parte de una celebración en la Región Huamanga. Tres días de alabanza, adoración y unidad en el Colegio Apostol Pablo.",
    artista: "LADP - Región Huamanga",
    precio: "Entrada libre",
    horario: "Del 17 al 19 de octubre",
    mapa: "https://maps.google.com/?q=Huamanga+Ayacucho+Peru",
  },
];

const eventosRealizados: Evento[] = [
  {
    id: 5,
    titulo: "CAMPAMENTO LEGADO 2023",
    fecha: "28 al 30 de Julio 2023",
    lugar: "Ayacucho",
    categoria: "Campamentos",
    img: "/img/legacy.jpg",
    descripcion: "Campamento Legado 2023 en Ayacucho. Un tiempo de formación espiritual, aventuras al aire libre y experiencias transformadoras para jóvenes.",
  },
  {
    id: 6,
    titulo: "CAMPAMENTO MISION 70 2024",
    fecha: "28 al 29 de Julio 2024",
    lugar: "Fundo San Cristóbal - Ayacucho",
    categoria: "Misiones",
    img: "/img/mision70.jpg",
    descripcion: "Campamento Misionero basado en Lucas 10:2. Para adolescentes de 13 años en adelante. Tiempo de misiones: 30-31 de julio. Lugar de encuentro: Colegio Apóstol Pablo.",

  },
  {
    id: 7,
    titulo: "INQUEBRANTABLE - SIN FRONTERA",
    fecha: "18 al 20 de Noviembre",
    lugar: "Iglesia Maranatha",
    categoria: "Empoderamiento y Evangelismo",
    img: "/img/negroinquebrantables.jpg",
    descripcion: "Evento de empoderamiento y evangelismo con plenarias a cargo de la Pra. Susana Izarnotegui, Directora Nacional del Ministerio Nacional de Niños y Adolescentes. Incluye alabanzas.",
  },
  {
    id: 8,
    titulo: "TALENTOS KIDS",
    fecha: "Diciembre",
    lugar: "cine tetro municipal",
    categoria: "Concurso",
    img: "/img/talentoskids.jpg",
    descripcion: "Concurso de talentos para niños con categorías de ejecución de instrumentos, canto y coreografía. Un espacio para que los más pequeños desarrollen y muestren sus dones artísticos.",

  }
];

const HeroBanner = ({ evento, onClick }: { evento: Evento, onClick: (evento: Evento) => void }) => (
  <div className="relative w-full h-[50vh] sm:h-[60vh] md:h-screen max-h-[700px] flex items-end justify-center bg-black mb-4 sm:mb-8 overflow-hidden">
    <video 
      src={evento.img} 
      className="absolute inset-0 w-full h-full object-cover" 
      autoPlay 
      loop 
      muted 
      playsInline
    />
    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/70"></div>
    <div className="relative z-10 pb-10 sm:pb-16 mb-3 sm:mb-6 text-center px-4">
      <h1 className="text-white text-xl sm:text-2xl md:text-3xl font-bold mb-4 drop-shadow-lg">{evento.titulo}</h1>
      <button
        onClick={() => onClick(evento)}
        className="inline-block bg-white text-black px-6 sm:px-12 py-3 sm:py-4 rounded-full font-bold border-2 border-white hover:bg-black hover:text-white hover:border-red-500 transition-colors shadow-lg text-sm sm:text-lg"
      >
        VER EVENTO
      </button>
    </div>
  </div>
);

const EventoGridCard = ({ evento, onClick }: { evento: Evento, onClick: (evento: Evento) => void }) => (
  <div className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col h-full">
    <div className="relative h-40 sm:h-48 overflow-hidden group cursor-pointer" onClick={() => onClick(evento)}>
      <img 
        src={evento.img} 
        alt={evento.titulo} 
        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110" 
      />
      <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
        <span className="text-white font-bold py-2 px-4 rounded-full bg-red-500 bg-opacity-0 group-hover:bg-opacity-90 transform translate-y-10 group-hover:translate-y-0 transition-all duration-300">
          Ver Evento
        </span>
      </div>
    </div>
    <div className="p-3 sm:p-4 flex-1 flex flex-col justify-between">
      <h3 className="text-lg sm:text-xl font-bold mb-1 text-gray-900 line-clamp-2">{evento.titulo}</h3>
      <div className="text-sm text-gray-600 mb-1 line-clamp-1">{evento.lugar}</div>
      <span className="text-xs text-gray-500 mb-2">{evento.fecha}</span>
      <span className="inline-block px-2 py-1 text-xs rounded bg-red-100 text-red-700 w-fit mb-2">{evento.categoria}</span>
      <div className="flex gap-2">
        <button
          onClick={() => onClick(evento)}
          className="flex-1 py-2 border border-blue-600 text-blue-600 font-medium rounded hover:bg-blue-50 transition-colors text-center text-sm"
        >
          Ver detalles
        </button>
      </div>
    </div>
  </div>
);

// Componente no utilizado pero lo mantenemos por si se necesita en el futuro
// const EventoRealizadoCard = ({ evento, onClick }: { evento: Evento, onClick: (evento: Evento) => void }) => (
//   <div className="bg-gray-100 rounded-lg shadow-sm overflow-hidden flex flex-col group hover:shadow-md transition-shadow cursor-pointer h-full" onClick={() => onClick(evento)}>
//     <img 
//       src={evento.img} 
//       alt={evento.titulo} 
//       className="h-28 sm:h-32 w-full object-cover group-hover:opacity-90 transition-opacity" 
//     />
//     <div className="p-2 sm:p-3 flex-1 flex flex-col justify-between">
//       <h4 className="text-sm sm:text-base font-bold mb-1 text-gray-800 line-clamp-2">{evento.titulo}</h4>
//       <div className="text-xs text-gray-600 mb-1 line-clamp-1">{evento.lugar}</div>
//       <span className="text-xs text-gray-500 mb-1">{evento.fecha}</span>
//       <div className="flex justify-between items-center mt-1">
//         <span className="inline-block px-2 py-1 text-xs rounded bg-blue-100 text-blue-700 w-fit truncate max-w-[60%]">{evento.categoria}</span>
//         <span className="text-xs text-blue-500 font-medium">Ver resumen</span>
//       </div>
//     </div>
//   </div>
// );

// Componente del Modal para mostrar detalles del evento
const EventoModal = ({ evento, onClose }: { evento: Evento, onClose: () => void }) => {
  if (!evento) return null;
  
  // Verificar si es un evento realizado (pasado) o próximo
  const esEventoPasado = eventosRealizados.some(e => e.id === evento.id);
  
  return (
    <div className="fixed inset-0 bg-black bg-opacity-70 z-50 flex items-start md:items-center justify-center p-2 md:p-4 overflow-y-auto">
      <div className="relative bg-white rounded-lg max-w-4xl w-full max-h-[95vh] overflow-y-auto my-2 md:my-4">
        <button 
          onClick={onClose}
          className="absolute right-3 top-3 text-gray-100 hover:text-white z-20 bg-black bg-opacity-50 rounded-full w-8 h-8 flex items-center justify-center shadow-md"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        
        <div className="relative h-56 sm:h-64 md:h-96">
          {evento.img.endsWith('.mp4') ? (
            <video 
              src={evento.img}
              className="w-full h-full object-cover"
              autoPlay
              loop
              muted
              playsInline
            />
          ) : (
            <img 
              src={evento.img} 
              alt={evento.titulo} 
              className="w-full h-full object-cover" 
            />
          )}
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-3 sm:p-6">
            <span className="inline-block px-2 sm:px-3 py-1 bg-red-500 text-white text-xs sm:text-sm font-medium rounded-full mb-1 sm:mb-2">
              {evento.categoria}
            </span>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white leading-tight">{evento.titulo}</h2>
          </div>
        </div>
        
        <div className="p-4 sm:p-6">
          <div className="flex flex-col md:flex-row gap-6 mb-6">
            <div className="w-full md:w-1/2">
              <h3 className="text-lg font-bold text-gray-900 mb-3 sm:mb-4">Detalles del evento</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <div className="mr-3 text-blue-500">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <span className="block text-sm font-medium text-gray-500">Fecha</span>
                    <span className="block text-gray-900">{evento.fecha}</span>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="mr-3 text-blue-500">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <span className="block text-sm font-medium text-gray-500">Lugar</span>
                    <span className="block text-gray-900">{evento.lugar}</span>
                    {evento.mapa && (
                      <a 
                        href={evento.mapa} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-sm text-blue-600 hover:underline mt-1 inline-block"
                      >
                        Ver en Google Maps
                      </a>
                    )}
                  </div>
                </li>
                {evento.horario && (
                  <li className="flex items-start">
                    <div className="mr-3 text-blue-500">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <span className="block text-sm font-medium text-gray-500">Horario</span>
                      <span className="block text-gray-900">{evento.horario}</span>
                    </div>
                  </li>
                )}
                {evento.artista && (
                  <li className="flex items-start">
                    <div className="mr-3 text-blue-500">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                    </div>
                    <div>
                      <span className="block text-sm font-medium text-gray-500">Artista</span>
                      <span className="block text-gray-900">{evento.artista}</span>
                    </div>
                  </li>
                )}
                {evento.precio && !esEventoPasado && (
                  <li className="flex items-start">
                    <div className="mr-3 text-blue-500">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <span className="block text-sm font-medium text-gray-500">Precio</span>
                      <span className="block text-gray-900">{evento.precio}</span>
                    </div>
                  </li>
                )}
              </ul>
            </div>
            
            <div className="w-full md:w-1/2 mt-4 md:mt-0">
              <h3 className="text-lg font-bold text-gray-900 mb-3 sm:mb-4">Descripción</h3>
              <p className="text-gray-700 text-sm sm:text-base">{evento.descripcion}</p>
            </div>
          </div>
          
          <div className="border-t pt-4 sm:pt-6 flex flex-col gap-3 justify-center">
            {esEventoPasado ? (
              <a
                href="https://www.asambleasdedios.pe/blog"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-600 text-white px-4 sm:px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors text-center flex items-center justify-center"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                </svg>
                Ver blog
              </a>
            ) : (
              <a
                href={`https://wa.me/${whatsappNumber}?text=Hola,%20quiero%20comprar%20boletos%20para%20${encodeURIComponent(evento.titulo)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 text-white px-4 sm:px-8 py-3 rounded-lg font-semibold hover:bg-green-600 transition-colors text-center flex items-center justify-center w-full"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
                </svg>
                Obtener entradas por WhatsApp
              </a>
            )}
            <button
              onClick={onClose}
              className="border border-gray-300 text-gray-700 px-4 sm:px-8 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors w-full"
            >
              Cerrar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const Eventos: React.FC = () => {
  const [eventoSeleccionado, setEventoSeleccionado] = useState<Evento | null>(null);
  
  const abrirModal = (evento: Evento) => {
    setEventoSeleccionado(evento);
    // Evitar scroll en el fondo cuando el modal está abierto
    document.body.style.overflow = 'hidden';
  };
  
  const cerrarModal = () => {
    setEventoSeleccionado(null);
    // Restaurar scroll
    document.body.style.overflow = 'auto';
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Banner principal */}
      <div className="pt-16">
        <HeroBanner evento={eventosProximos[0]} onClick={abrirModal} />
      </div>

      <div className="max-w-7xl mx-auto px-3 sm:px-4">
        {/* Próximos eventos */}
        <h2 className="text-xl sm:text-2xl font-extrabold mb-4 sm:mb-6 text-gray-900">Próximos eventos</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 mb-8 sm:mb-12">
          {eventosProximos.slice(1).map(evento => (
            <EventoGridCard key={evento.id} evento={evento} onClick={abrirModal} />
          ))}
        </div>

        {/* Eventos realizados */}
        <h3 className="text-lg sm:text-xl font-bold mb-4 sm:mb-6 text-gray-700">Eventos anteriores</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 mb-8 sm:mb-10">
          {eventosRealizados.map(evento => (
            <div key={evento.id} className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col h-full transform transition-all duration-300 hover:scale-102 hover:shadow-xl">
              <div className="relative h-48 sm:h-52 md:h-60">
                <img 
                  src={evento.img} 
                  alt={evento.titulo} 
                  className="w-full h-full object-cover" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent p-3 flex flex-col justify-end">
                  <span className="text-xs font-medium text-yellow-400 mb-1">{evento.categoria}</span>
                  <h4 className="text-base sm:text-lg font-bold text-white leading-tight line-clamp-2">{evento.titulo}</h4>
                  <p className="text-xs text-gray-300 mt-1">{evento.fecha}</p>
                </div>
              </div>
              <div className="p-3 sm:p-4 flex-1 flex flex-col">
                <p className="text-xs sm:text-sm text-gray-600 mb-3 line-clamp-3">{evento.descripcion}</p>
                <div className="flex gap-3 mt-auto justify-center">
                  <button
                    onClick={() => abrirModal(evento)}
                    className="bg-blue-600 text-white py-1.5 sm:py-2 px-4 sm:px-6 rounded-full text-sm font-medium hover:bg-blue-700 transition-colors w-full"
                  >
                    Ver detalles
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Modal para mostrar detalles del evento */}
      {eventoSeleccionado && (
        <EventoModal evento={eventoSeleccionado} onClose={cerrarModal} />
      )}
    </div>
  );
};

  export default Eventos;