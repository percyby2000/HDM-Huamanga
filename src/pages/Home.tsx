import { useEffect } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  useEffect(() => {
    const checkVisibility = () => {
      const mision = document.querySelector('.mision');
      const vision = document.querySelector('.vision');
      
      if (mision && vision) {
        const position = mision.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.3;

        if (position < screenPosition) {
          mision.classList.add('visible');
          vision.classList.add('visible');
        }
      }
    };

    window.addEventListener('scroll', checkVisibility);
    window.addEventListener('load', checkVisibility);

    return () => {
      window.removeEventListener('scroll', checkVisibility);
      window.removeEventListener('load', checkVisibility);
    };
  }, []);

  const redirectToPage = () => {
    // Implementar redirección a blog cuando esté disponible
    console.log('Redirección a blog');
  };

  return (
    <div className="bg-black text-white">


      {/* Hero Section */}
      <header className="hero h-screen flex items-center justify-center text-center relative z-10 overflow-hidden">
        <video className="absolute top-0 left-0 w-full h-full object-cover z-[-1]" autoPlay loop muted playsInline>
          <source src="/img/videohero.mp4" type="video/mp4" />
          Tu navegador no soporta el elemento de video.
        </video>
        <div className="hero-content relative z-20">
          <h1 className="animate-[changeColor_4s_linear_infinite]">HIJOS DE MINISTROS</h1>
          <p>WELCOME</p>
        </div>
        {/* Overlay */}
        <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 z-10"></div>
      </header>

      

      {/* Videos Section - Cartelera */}
      <section className="py-16 px-4 bg-gradient-to-b from-black to-gray-900">
        <div className="container mx-auto">
          <div className="mb-12 text-center">
            <img src="/img/cam b.png" alt="Título" className="max-w-xs mx-auto" />
            <h2 className="text-4xl font-bold mt-6 mb-2 text-white">Nuestra Cartelera</h2>
            <p className="text-gray-300 max-w-2xl mx-auto">Descubre nuestros videos destacados y únete a nuestras actividades</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Video Card 1 */}
            <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-2xl border border-gray-700">
              <div className="relative pt-[56.25%] w-full">
                <iframe 
                  className="absolute top-0 left-0 w-full h-full"
                  src="https://www.youtube.com/embed/nVJLhiIha18?si=zT_F6SFjXKWKNLmw" 
                  title="YouTube video player" 
                  frameBorder="0" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                  referrerPolicy="strict-origin-when-cross-origin" 
                  allowFullScreen
                ></iframe>
              </div>
              <div className="p-6">
                <div className="flex justify-between items-center mb-3">
                  <span className="bg-red-600 text-white text-xs font-semibold px-2 py-1 rounded">DESTACADO</span>
                  <span className="text-gray-400 text-sm">23 Ago 2025</span>
                </div>
                <h3 className="text-xl font-bold mb-2 text-white">Inquebrantables</h3>
                <p className="text-gray-400 mb-4">Descubre cómo mantenerte firme en los momentos difíciles y fortalecer tu fe.</p>
                <button 
                  className="w-full bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900 text-white font-bold py-2 px-4 rounded flex items-center justify-center transition-all duration-300"
                  onClick={redirectToPage}
                >
                  <span>Ver Blog</span>
                  <svg className="w-4 h-4 ml-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
                  </svg>
                </button>
              </div>
            </div>

            {/* Video Card 2 */}
            <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-2xl border border-gray-700">
              <div className="relative pt-[56.25%] w-full">
                <iframe 
                  className="absolute top-0 left-0 w-full h-full"
                  src="https://www.youtube.com/embed/26AbLsor-vA?si=OhZRg151af0u8G4d" 
                  title="YouTube video player" 
                  frameBorder="0" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                  referrerPolicy="strict-origin-when-cross-origin" 
                  allowFullScreen
                ></iframe>
              </div>
              <div className="p-6">
                <div className="flex justify-between items-center mb-3">
                  <span className="bg-blue-600 text-white text-xs font-semibold px-2 py-1 rounded">NUEVO</span>
                  <span className="text-gray-400 text-sm">15 Ago 2025</span>
                </div>
                <h3 className="text-xl font-bold mb-2 text-white">Legado</h3>
                <p className="text-gray-400 mb-4">Aprende sobre la importancia de construir un legado duradero para las futuras generaciones.</p>
                <button 
                  className="w-full bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900 text-white font-bold py-2 px-4 rounded flex items-center justify-center transition-all duration-300"
                  onClick={redirectToPage}
                >
                  <span>Ver Blog</span>
                  <svg className="w-4 h-4 ml-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
                  </svg>
                </button>
              </div>
            </div>

            {/* Video Card 3 */}
            <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-2xl border border-gray-700">
              <div className="relative pt-[56.25%] w-full">
                <iframe 
                  className="absolute top-0 left-0 w-full h-full"
                  src="https://www.youtube.com/embed/qHJA7nX-tcM?si=F513WUvkypb2-aKh" 
                  title="YouTube video player" 
                  frameBorder="0" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                  referrerPolicy="strict-origin-when-cross-origin" 
                  allowFullScreen
                ></iframe>
              </div>
              <div className="p-6">
                <div className="flex justify-between items-center mb-3">
                  <span className="bg-green-600 text-white text-xs font-semibold px-2 py-1 rounded">POPULAR</span>
                  <span className="text-gray-400 text-sm">5 Ago 2025</span>
                </div>
                <h3 className="text-xl font-bold mb-2 text-white">Misión 70</h3>
                <p className="text-gray-400 mb-4">Conoce nuestra visión para impactar a las nuevas generaciones con propósito y dirección.</p>
                <button 
                  className="w-full bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900 text-white font-bold py-2 px-4 rounded flex items-center justify-center transition-all duration-300"
                  onClick={redirectToPage}
                >
                  <span>Ver Blog</span>
                  <svg className="w-4 h-4 ml-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>

          {/* Ver más botón */}
          <div className="text-center mt-10">
            <a href="https://www.youtube.com/@HDMAyacucho" className="inline-flex items-center px-6 py-3 border border-blue-500 text-blue-500 bg-transparent rounded-full hover:bg-blue-500 hover:text-white transition-colors duration-300 font-medium">
              <span>Ver todos los videos</span>
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* Shop Section */}
      <section className="py-16 px-4 bg-cover bg-center relative" style={{ backgroundImage: "url('/img/hero tienda.jpg')" }}>
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        <div className="container mx-auto relative z-10 text-center">
          <div className="mb-8">
            <h2 className="text-6xl font-bold mb-2">70%</h2>
            <p className="text-xl mb-6">de descuento en polos y poleras elije el tuyo.</p>
          </div>
          <Link to="https://hdm-store.vercel.app/" className="inline-block bg-[#f0b261] text-black font-bold py-3 px-8 rounded-lg hover:bg-[#d89b4f] transition-colors">
            Comprar ahora
          </Link>
        </div>
      </section>

       {/* Botón de WhatsApp flotante */}
      <a 
        href="https://wa.me/51925396764" 
        className="fixed bottom-6 right-6 z-40 w-14 h-14 bg-green-500 rounded-full flex items-center justify-center shadow-lg hover:bg-green-900 transition-colors"
        target="_blank" 
        rel="noopener noreferrer"
      >
        <i className="fab fa-whatsapp text-white text-2xl"></i>
      </a>

      {/* Estilos movidos a className en los componentes correspondientes */}
    </div>
  );
};

export default Home;