import { useEffect, useState } from 'react';

const Historia = () => {
  const [_, setIsLoaded] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    // Marcamos que la página está cargada para animar elementos iniciales
    setIsLoaded(true);
    
    // Función para calcular el progreso de desplazamiento
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.pageYOffset / totalHeight) * 100;
      setScrollProgress(progress);
    };
    
    window.addEventListener('scroll', handleScroll);
    
    // Limpieza del listener de desplazamiento
    const cleanup = () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('scroll', checkVisibility);
    };
    
    const checkVisibility = () => {
      const elements = document.querySelectorAll('.animate-on-scroll');
      
      elements.forEach((element) => {
        if (element instanceof HTMLElement) {
          const position = element.getBoundingClientRect().top;
          const screenPosition = window.innerHeight * 0.85;

          if (position < screenPosition) {
            element.classList.add('visible');
          }
        }
      });
    };

    window.addEventListener('scroll', checkVisibility);
    // Comprobamos visibilidad al cargar
    setTimeout(checkVisibility, 300);

    return cleanup;
  }, []);

  return (
    <div className="bg-black text-white pt-16 md:pt-20 relative">
      {/* Barra de progreso de desplazamiento */}
      <div 
        className="fixed top-0 left-0 h-1 bg-gradient-to-r from-blue-600 via-blue-400 to-blue-600 z-50 glow-blue-sm"
        style={{ width: `${scrollProgress}%`, transition: 'width 0.1s ease-out' }}
      ></div>
      {/* Hero Section con efecto de revelación */}
      <section className="py-8 sm:py-16 px-4 bg-gradient-to-b from-gray-900 to-black relative overflow-hidden">
        {/* Partículas decorativas */}
        <div className="absolute inset-0 z-0">
          <div className="particles-container">
            {Array(15).fill(0).map((_, i) => (
              <span 
                key={i}
                className="absolute inline-block rounded-full bg-blue-600"
                style={{
                  width: `${Math.random() * 4 + 1}px`,
                  height: `${Math.random() * 4 + 1}px`,
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  opacity: Math.random() * 0.5 + 0.1,
                  animation: `float ${Math.random() * 10 + 5}s linear infinite`,
                  animationDelay: `${Math.random() * 5}s`
                }}
              />
            ))}
          </div>
        </div>

        <div className="container mx-auto relative z-10">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-center mb-6 text-white animate-on-scroll opacity-0 translate-y-8 transition-all duration-1000" style={{transitionDelay: '200ms'}}>
            HIJOS DE MINISTROS
          </h1>
          <div className="w-16 h-1 bg-white mx-auto mb-8 sm:mb-12 animate-on-scroll opacity-0 scale-0 transition-all duration-1000" style={{transitionDelay: '400ms'}}></div>
          <p className="text-center max-w-4xl mx-auto mb-12 text-gray-300 text-base sm:text-lg animate-on-scroll opacity-0 translate-y-8 transition-all duration-1000" style={{transitionDelay: '600ms'}}>
            Somos un proyecto comprometido con apoyar a las familias de Las Asambleas de Dios del Perú
            región Huamanga. Nuestro enfoque se centra en los niños y adolescentes, reconociendo los desafíos únicos que
            enfrentan en su camino. Nos esforzamos por ayudarles a superar experiencias negativas, descubrir y abrazar su
            propósito de vida, y fomentar un compromiso profundo con el servicio a Dios.
          </p>
        </div>
      </section>

      {/* About Section with Improved Design */}
      <section className="py-12 sm:py-16 px-4 bg-black relative">
        {/* Patrón de fondo sutil */}
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: '60px 60px'
        }}></div>
        
        <div className="container mx-auto relative z-10">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-6 sm:mb-8 text-white">Nuestra Identidad</h2>
          <div className="w-16 h-1 bg-blue-500 mx-auto mb-10 sm:mb-12"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            <div className="animate-on-scroll mision bg-gradient-to-br from-black to-gray-900 p-5 sm:p-6 rounded-xl shadow-xl border border-gray-800 transform transition-all duration-1000 opacity-0 translate-x-[-30px]" style={{transitionDelay: '200ms'}}>
              <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-white">Misión</h3>
              <div className="w-12 h-0.5 bg-blue-500 mb-4"></div>
              <p className="text-gray-300 text-sm sm:text-base">
                Tenemos como objetivo ayudar a los niños y adolescentes (HDM) a glorificar a Dios mediante la promoción de
                valores espirituales y fundamentales que fomenten la participación en el Ministerio y la realización de la
                Gran Comisión.
              </p>
            </div>
            
            <div className="animate-on-scroll vision bg-gradient-to-br from-black to-gray-900 p-5 sm:p-6 rounded-xl shadow-xl border border-gray-800 transform transition-all duration-1000 opacity-0 translate-y-[30px]" style={{transitionDelay: '400ms'}}>
              <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-white">Visión</h3>
              <div className="w-12 h-0.5 bg-blue-500 mb-4"></div>
              <p className="text-gray-300 text-sm sm:text-base">
                Ser una asociación fundamentada espiritualmente con una conexión profunda con principios y enseñanzas
                espirituales que encuentran su base en la figura de Jesucristo. Esta conexión refleja el amor, la compasión 
                y la justicia que Jesucristo enseñó.
              </p>
            </div>
            
            <div className="animate-on-scroll valores bg-gradient-to-br from-black to-gray-900 p-5 sm:p-6 rounded-xl shadow-xl border border-gray-800 transform transition-all duration-1000 opacity-0 translate-x-[30px]" style={{transitionDelay: '600ms'}}>
              <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-white">Valores</h3>
              <div className="w-12 h-0.5 bg-blue-500 mb-4"></div>
              <ul className="text-gray-300 list-disc pl-4 sm:pl-5 space-y-1 sm:space-y-2 text-sm sm:text-base">
                <li>Integridad y honestidad en nuestras acciones</li>
                <li>Respeto y valoración de cada individuo</li>
                <li>Compromiso con el crecimiento espiritual</li>
                <li>Servicio desinteresado a la comunidad</li>
                <li>Excelencia en todo lo que hacemos</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section 
        className="py-12 sm:py-16 px-4 bg-gradient-to-b from-black to-gray-900 relative"
        style={{
          backgroundImage: 'url("/img/negroinquebrantables.jpg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
          position: 'relative',
        }}
      >
        {/* Overlay para mejorar legibilidad del texto */}
        <div className="absolute inset-0 bg-black bg-opacity-70"></div>
        
        <div className="container mx-auto relative z-10">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-6 sm:mb-8 text-white animate-on-scroll opacity-0 translate-y-8 transition-all duration-1000">Nuestra Trayectoria</h2>
          <div className="w-16 h-1 bg-blue-500 mx-auto mb-8 sm:mb-12 animate-on-scroll opacity-0 scale-0 transition-all duration-1000"></div>
          
          <div className="relative max-w-4xl mx-auto">
            {/* Línea vertical - visible solo en tablet/desktop */}
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-blue-500 glow-blue-md"></div>
            
            {/* Timeline para móviles - vertical con línea a la izquierda */}
            <div className="md:hidden absolute left-6 top-0 bottom-0 w-1 bg-blue-500 glow-blue-sm"></div>
            
            {/* El efecto de brillo se maneja mediante clases */}
            
            {/* Eventos */}
            <div className="mb-12 sm:mb-16 relative animate-on-scroll opacity-0 translate-y-12 transition-all duration-1000" style={{transitionDelay: '200ms'}}>
              <div className="md:flex md:items-center md:justify-center mb-4">
                {/* Punto en la línea para móvil */}
                <div className="md:hidden absolute left-6 transform -translate-x-1/2 w-4 h-4 rounded-full bg-blue-500 border-2 border-white z-10"></div>
                
                {/* Año */}
                <div className="ml-12 md:ml-0 bg-white text-black font-bold py-1 sm:py-2 px-4 sm:px-6 rounded-full z-10 inline-block md:block">
                  2018
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-gray-900/90 to-black/95 p-5 sm:p-6 rounded-xl shadow-xl border border-blue-900/50 backdrop-blur-sm ml-12 md:ml-0 md:mr-auto md:w-[calc(50%-20px)]">
                <h3 className="text-lg sm:text-xl font-bold mb-2 text-white">Fundación de HDM</h3>
                <p className="text-gray-300 text-sm sm:text-base">
                  Iniciamos nuestro proyecto con la visión de apoyar a los hijos de ministros en su desarrollo espiritual y personal.
                </p>
              </div>
            </div>
            
            <div className="mb-12 sm:mb-16 relative animate-on-scroll opacity-0 translate-y-12 transition-all duration-1000" style={{transitionDelay: '400ms'}}>
              <div className="md:flex md:items-center md:justify-center mb-4">
                {/* Punto en la línea para móvil */}
                <div className="md:hidden absolute left-6 transform -translate-x-1/2 w-4 h-4 rounded-full bg-blue-500 border-2 border-white z-10"></div>
                
                {/* Año */}
                <div className="ml-12 md:ml-0 bg-white text-black font-bold py-1 sm:py-2 px-4 sm:px-6 rounded-full z-10 inline-block md:block">
                  2020
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-gray-900/90 to-black/95 p-5 sm:p-6 rounded-xl shadow-xl border border-blue-900/50 backdrop-blur-sm ml-12 md:ml-auto md:mr-0 md:w-[calc(50%-20px)]">
                <h3 className="text-lg sm:text-xl font-bold mb-2 text-white">Primer Campamento</h3>
                <p className="text-gray-300 text-sm sm:text-base">
                  Realizamos nuestro primer campamento con más de 50 participantes, estableciendo las bases para futuros eventos.
                </p>
              </div>
            </div>
            
            <div className="mb-12 sm:mb-16 relative animate-on-scroll opacity-0 translate-y-12 transition-all duration-1000" style={{transitionDelay: '600ms'}}>
              <div className="md:flex md:items-center md:justify-center mb-4">
                {/* Punto en la línea para móvil */}
                <div className="md:hidden absolute left-6 transform -translate-x-1/2 w-4 h-4 rounded-full bg-blue-500 border-2 border-white z-10"></div>
                
                {/* Año */}
                <div className="ml-12 md:ml-0 bg-white text-black font-bold py-1 sm:py-2 px-4 sm:px-6 rounded-full z-10 inline-block md:block">
                  2022
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-gray-900/90 to-black/95 p-5 sm:p-6 rounded-xl shadow-xl border border-blue-900/50 backdrop-blur-sm ml-12 md:ml-0 md:mr-auto md:w-[calc(50%-20px)]">
                <h3 className="text-lg sm:text-xl font-bold mb-2 text-white">Expansión Regional</h3>
                <p className="text-gray-300 text-sm sm:text-base">
                  Ampliamos nuestro alcance a otras regiones del país, conectando con más familias ministeriales.
                </p>
              </div>
            </div>
            
            <div className="relative animate-on-scroll opacity-0 translate-y-12 transition-all duration-1000" style={{transitionDelay: '800ms'}}>
              <div className="md:flex md:items-center md:justify-center mb-4">
                {/* Punto en la línea para móvil */}
                <div className="md:hidden absolute left-6 transform -translate-x-1/2 w-4 h-4 rounded-full bg-blue-500 border-2 border-white z-10"></div>
                
                {/* Año */}
                <div className="ml-12 md:ml-0 bg-white text-black font-bold py-1 sm:py-2 px-4 sm:px-6 rounded-full z-10 inline-block md:block">
                  2024
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-gray-900/90 to-black/95 p-5 sm:p-6 rounded-xl shadow-xl border border-blue-900/50 backdrop-blur-sm ml-12 md:ml-auto md:mr-0 md:w-[calc(50%-20px)]">
                <h3 className="text-lg sm:text-xl font-bold mb-2 text-white">Actualidad</h3>
                <p className="text-gray-300 text-sm sm:text-base">
                  Continuamos creciendo y desarrollando nuevos programas para fortalecer nuestra comunidad y ampliar nuestro impacto.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Reels de Facebook - Construyendo Generaciones */}
        <div className="mt-12 sm:mt-16 relative z-10">
          <div className="container mx-auto max-w-5xl px-4">
            <div className="relative">
              {/* Línea decorativa */}
              <div className="absolute left-0 top-1/2 w-1/4 h-0.5 bg-gradient-to-r from-blue-500 to-transparent hidden md:block"></div>
              <div className="absolute right-0 top-1/2 w-1/4 h-0.5 bg-gradient-to-l from-blue-500 to-transparent hidden md:block"></div>
            </div>
            
            <div className="flex flex-col md:flex-row items-center justify-center gap-8 mb-16">
              {/* Columna izquierda: Móvil con reel */}
              <div className="w-full md:w-1/2 flex justify-center">
                <div className="relative animate-on-scroll opacity-0 scale-95 transition-all duration-1000" style={{transitionDelay: '300ms'}}>
                  {/* Dispositivo Móvil Negro */}
                  <div className="relative bg-black p-3 pt-8 pb-10 rounded-3xl shadow-2xl max-w-xs mx-auto">
                    {/* Notch del móvil */}
                    <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-28 h-8 bg-black rounded-b-2xl flex justify-center items-center z-10">
                      <div className="w-20 h-3 bg-gray-900 rounded-full"></div>
                    </div>
                    
                    {/* Botones laterales simulados */}
                    <div className="absolute top-16 -right-1 w-1.5 h-8 bg-gray-900 rounded-r-md"></div>
                    <div className="absolute top-32 -right-1 w-1.5 h-12 bg-gray-900 rounded-r-md"></div>
                    <div className="absolute top-16 -left-1 w-1.5 h-16 bg-gray-900 rounded-l-md"></div>
                    
                    {/* Resplandor alrededor del dispositivo para efecto visual */}
                    <div className="absolute inset-0 rounded-3xl bg-gradient-to-b from-blue-500 to-purple-500 blur-xl opacity-30"></div>
                    
                    {/* Marco del dispositivo */}
                    <div className="relative rounded-2xl overflow-hidden border-[10px] border-black shadow-inner z-10">
                      <div className="relative w-[260px] h-[470px]">
                        <iframe 
                          src="https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2Freel%2F1052713009611269%2F&show_text=false&width=267&t=0" 
                          width="260" 
                          height="470" 
                          style={{ border: 'none', overflow: 'hidden', display: 'block', position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }} 
                          scrolling="no" 
                          frameBorder="0" 
                          allowFullScreen={true} 
                          allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                          title="Facebook Reel HDM"
                        />
                        
                        {/* Reflejo en pantalla */}
                        <div className="absolute top-0 right-0 w-20 h-40 bg-gradient-to-br from-white to-transparent opacity-10 rounded-full blur-sm"></div>
                      </div>
                    </div>
                    
                    {/* Botón de inicio simulado */}
                    <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-16 h-1.5 bg-gray-300 rounded-full z-10"></div>
                  </div>
                </div>
              </div>
              
              {/* Columna derecha: Título y descripción */}
              <div className="w-full md:w-1/2 text-center md:text-left animate-on-scroll opacity-0 translate-y-4 transition-all duration-1000" style={{transitionDelay: '500ms'}}>
                <h3 className="text-3xl sm:text-4xl font-bold mb-4 text-white">Construyendo Generaciones</h3>
                <div className="w-16 h-1 bg-blue-500 mb-6 mx-auto md:mx-0"></div>
                <p className="text-gray-300 mb-6 text-base sm:text-lg">
                  Nuestro compromiso es formar jóvenes líderes con valores cristianos sólidos que impacten positivamente en su entorno y en las futuras generaciones.
                </p>
                <div className="bg-blue-600 text-white px-6 py-3 rounded-full text-sm font-bold shadow-lg inline-block">
                  #ConstruyendoGeneraciones
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section - Mejorado */}
      <section className="py-12 sm:py-16 px-4 bg-gradient-to-b from-gray-900 to-black">
        <div className="container mx-auto text-center">
          <div className="max-w-3xl mx-auto bg-gradient-to-br from-gray-900 to-black p-8 sm:p-10 rounded-2xl border border-gray-800 shadow-xl animate-on-scroll opacity-0 scale-95 transition-all duration-1000">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-white">Únete a Nuestra Comunidad</h2>
            <div className="w-16 h-1 bg-blue-500 mx-auto mb-6"></div>
            <p className="text-base sm:text-lg max-w-2xl mx-auto mb-8 text-gray-300">
              Si eres hijo de un ministro o conoces a alguien que lo sea, te invitamos a formar parte de nuestra familia HDM y vivir esta experiencia transformadora juntos.
            </p>
            <a 
              href="https://wa.me/51925396764?text=Hola,%20me%20gustaría%20unirme%20a%20HDM"
              className="bg-gradient-to-r from-blue-600 to-blue-800 text-white font-bold py-3 px-8 rounded-lg hover:from-blue-700 hover:to-blue-900 transition-all shadow-lg transform hover:scale-105 inline-flex items-center"
              target="_blank" 
              rel="noopener noreferrer"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
              </svg>
              Contáctanos por WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* CSS para animaciones y efectos visuales mejorados */}
      <style>{`
        .animate-on-scroll.visible {
          opacity: 1;
          transform: translateX(0) translateY(0) scale(1);
          transition-timing-function: cubic-bezier(0.25, 0.1, 0.25, 1.0);
        }
        
        .animate-on-scroll:not(.visible) {
          will-change: transform, opacity;
        }
        
        @media (prefers-reduced-motion: reduce) {
          .animate-on-scroll {
            opacity: 1 !important;
            transform: none !important;
            transition: none !important;
          }
        }
        
        /* Estilos para el efecto de brillo en la línea del timeline */
        .glow-blue-md {
          box-shadow: 0 0 8px #3b82f6, 0 0 12px #3b82f6;
        }
        .glow-blue-sm {
          box-shadow: 0 0 5px #3b82f6, 0 0 8px #3b82f6;
        }
        
        /* Animación para las partículas flotantes */
        @keyframes float {
          0% { transform: translateY(0) translateX(0); }
          25% { transform: translateY(-10px) translateX(5px); }
          50% { transform: translateY(0) translateX(10px); }
          75% { transform: translateY(10px) translateX(5px); }
          100% { transform: translateY(0) translateX(0); }
        }
        
        /* Estilo hover para las tarjetas de identidad */
        .mision:hover, .vision:hover, .valores:hover {
          transform: translateY(-8px);
          box-shadow: 0 10px 25px -5px rgba(59, 130, 246, 0.4);
          border-color: rgba(59, 130, 246, 0.6);
          transition: all 0.3s ease-in-out;
        }
        
        /* Estilo para el resplandor en el scroll */
        html {
          scroll-behavior: smooth;
          scrollbar-color: #3b82f6 #1f2937;
        }
        
        ::-webkit-scrollbar {
          width: 12px;
        }
        
        ::-webkit-scrollbar-track {
          background: #1f2937;
        }
        
        ::-webkit-scrollbar-thumb {
          background-color: #3b82f6;
          border-radius: 6px;
          border: 3px solid #1f2937;
        }
      `}</style>
    </div>
  );
};

export default Historia;