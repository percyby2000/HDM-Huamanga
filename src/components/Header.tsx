import { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-black fixed w-full z-50 border-b border-gray-900">
      <div className="container mx-auto px-4">
        <nav className="flex justify-between items-center py-3">
          <div className="flex items-center space-x-2">
            <Link to="/" className="flex items-center">
              <img src="/img/logo (2).ico" alt="HDM" className="h-10 mr-8" />
              
              <span className="font-anton text-white text-2xl tracking-wider"> HIJOS DE MINISTROS</span>
            </Link>
          </div>
          
          {/* Desktop navigation */}
          <div className="hidden md:flex md:items-center md:gap-10">
            <Link to="/" className="text-white hover:text-[#f0b261] transition-colors font-anton text-base tracking-wider uppercase">INICIO</Link>
            <Link to="/eventos" className="text-white hover:text-[#f0b261] transition-colors font-anton text-base tracking-wider uppercase">EVENTO</Link>
            <Link to="/oracion" className="text-white hover:text-[#f0b261] transition-colors font-anton text-base tracking-wider uppercase">ORACION</Link>
           <Link to="/historia" className="text-white hover:text-[#f0b261] transition-colors font-anton text-base tracking-wider uppercase">HISTORIA</Link>
            <Link to="https://hdm-store.vercel.app/" className="text-white hover:text-[#f0b261] transition-colors font-anton text-base tracking-wider uppercase">TIENDA</Link>
            <Link to="/galeria" className="text-white hover:text-[#f0b261] transition-colors font-anton text-base tracking-wider uppercase">FOTOS 2024</Link>
          </div>
          
          {/* Purple circle with icon */}
          <div className="hidden md:flex">
            <img src="/img/LG-asambleas.png" alt="HDM" className="h-10 mr-1" />
          </div>
          
          {/* Hamburger menu for mobile */}
          <div className="md:hidden">
            <button 
              onClick={toggleMenu} 
              className="flex items-center px-3 py-2 text-white"
              aria-label="Toggle menu"
            >
              <div className="relative w-6 h-5">
                <span 
                  className={`absolute h-0.5 w-full bg-white transition-all duration-300 ${isMenuOpen ? 'rotate-45 top-2' : 'top-0'}`}
                ></span>
                <span 
                  className={`absolute h-0.5 w-full bg-white top-2 transition-opacity duration-300 ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`}
                ></span>
                <span 
                  className={`absolute h-0.5 w-full bg-white transition-all duration-300 ${isMenuOpen ? '-rotate-45 top-2' : 'top-4'}`}
                ></span>
              </div>
            </button>
          </div>
        </nav>
        
        {/* Mobile navigation */}
        <div 
          className={`md:hidden fixed top-0 right-0 h-screen w-full bg-black transition-all duration-300 ease-in-out transform ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'} shadow-lg z-50 flex flex-col justify-between`}
        >
          <div className="flex justify-between items-center p-4 border-b border-gray-800">
            <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <img src="/img/logo (2).ico" alt="HDM" className="h-10 mr-6" />
              
              <span className="font-anton text-white text-2xl tracking-wider"> HIJOS DE MINISTROS</span>

              <img src="/img/LG-asambleas.png" alt="HDM" className="h-10 mr-8" />
            </Link>
            </div>
            <button 
              onClick={toggleMenu} 
              className="text-white p-2"
              aria-label="Close menu"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          
          <div className="flex flex-col items-center py-8 px-6 space-y-8">
            <Link to="/" className="text-white hover:text-[#f0b261] transition-colors font-anton text-xl tracking-wider w-full text-center" onClick={() => setIsMenuOpen(false)}>INICIO</Link>
            <Link to="/eventos" className="text-white hover:text-[#f0b261] transition-colors font-anton text-xl tracking-wider w-full text-center" onClick={() => setIsMenuOpen(false)}>EVENTO</Link>
            <Link to="/oracion" className="text-white hover:text-[#f0b261] transition-colors font-anton text-xl tracking-wider w-full text-center" onClick={() => setIsMenuOpen(false)}>ORACION</Link>
            <Link to="/historia" className="text-white hover:text-[#f0b261] transition-colors font-anton text-xl tracking-wider w-full text-center" onClick={() => setIsMenuOpen(false)}>HISTORIA</Link>
            <Link to="https://hdm-store.vercel.app/" className="text-white hover:text-[#f0b261] transition-colors font-anton text-xl tracking-wider w-full text-center" onClick={() => setIsMenuOpen(false)}>TIENDA</Link>
            <Link to="/galeria" className="text-white hover:text-[#f0b261] transition-colors font-anton text-xl tracking-wider w-full text-center" onClick={() => setIsMenuOpen(false)}>FOTOS 2024</Link> 
            
            <div className="mt-4">

            </div>
          </div>
          
          {/* Social Media Links */}
          <div className="pb-10">
            <h3 className="text-white text-center mb-4 font-bebas-neue text-lg">SÍGUENOS</h3>
            <div className="flex justify-center space-x-4">
              <a href="https://www.facebook.com/HijosDePastoresRH" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity">
                <img
                  src="https://d1xpblio32ctey.cloudfront.net/wp-content/uploads/sites/43/2021/06/03025103/002-facebook-blkbg.png"
                  alt="Facebook"
                  className="w-8 h-8"
                />
              </a>
              <a href="https://www.instagram.com/hijosdeministros/" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity">
                <img
                  src="https://d1xpblio32ctey.cloudfront.net/wp-content/uploads/sites/43/2021/06/03025102/001-instagram-blkbg.png"
                  alt="Instagram"
                  className="w-8 h-8"
                />
              </a>
              <a href="https://x.com/" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity">
                <img
                  src="https://d1xpblio32ctey.cloudfront.net/wp-content/uploads/sites/43/2021/06/03025104/003-twitter-blkbg.png"
                  alt="Twitter"
                  className="w-8 h-8"
                />
              </a>
              <a href="https://www.youtube.com/@HDMAyacucho" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity">
                <img
                  src="https://d1xpblio32ctey.cloudfront.net/wp-content/uploads/sites/43/2021/06/03025106/007-youtube-blkbg.png"
                  alt="YouTube"
                  className="w-8 h-8"
                />
              </a>
            </div>
          </div>
        </div>
        {/* No necesitamos un overlay separado ya que el menú ahora es de pantalla completa */}
      </div>
    </header>
  );
};

export default Header;