import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer id="hswfooter" className="bg-black text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
          <div className="mb-6 md:mb-0">
            <div className="flex space-x-4">
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
              <a href="https://www.tiktok.com/@hdmayacucho?is_from_webapp=1&sender_device=pc" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity">
                <img
                  src="https://d1xpblio32ctey.cloudfront.net/wp-content/uploads/sites/43/2021/06/03025109/016-tik-tok-blkbg.png"
                  alt="TikTok"
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
          <div className="text-sm">
            <h3 className="text-lg font-semibold mb-2">Contactos</h3>
            <p className="mb-1">Email: ministerioconproposito@gmail.com</p>
            <p className="mb-1">Teléfono: 925396764</p>
            <p>Ayacucho-Huamanga</p>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-4 text-center text-sm">
          <p className="mb-1">&copy; {new Date().getFullYear()} HDM. Todos los derechos reservados.</p>
          <p className="mb-6">
            Diseñado por
            <a href="https://www.facebook.com/percy.condenunez.7" className="ml-1 text-red-500 hover:text-red-400 transition-colors">
              Percy Conde
            </a>
            <a href="https://github.com/percyby2000" target="_blank" rel="noopener noreferrer" className="ml-2 inline-block align-middle">
              <img 
                src="https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg" 
                alt="GitHub"
                className="w-5 h-5 inline-block"
              />
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;