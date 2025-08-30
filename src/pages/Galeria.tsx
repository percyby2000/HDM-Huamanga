import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Galeria = () => {
  // Array de imágenes para la galería
  const imagenes = [
    { id: 1, src: '/galeria/1.jpg', alt: 'Evento HDM', descripcion: 'Reunión de jóvenes HDM' },
    { id: 2, src: '/galeria/2.jpg', alt: 'Actividad HDM', descripcion: 'Actividad especial con los hijos de ministros' },
    { id: 3, src: '/galeria/3.jpg', alt: 'Congreso Juvenil', descripcion: 'Congreso de jóvenes HDM' },
    { id: 4, src: '/galeria/4.jpg', alt: 'Alabanza', descripcion: 'Tiempo de alabanza y adoración' },
    { id: 5, src: '/galeria/5.jpg', alt: 'Campamento', descripcion: 'Campamento para jóvenes' },
    { id: 6, src: '/galeria/476611192_1159826795749197_8527130029688855456_n.jpg', alt: 'Ministerio', descripcion: 'Sirviendo en la obra de Dios' },
    { id: 7, src: '/galeria/485028225_1092854436219776_3125139565131686616_n.jpg', alt: 'Conferencia', descripcion: 'Conferencia para líderes' },
    { id: 8, src: '/galeria/485147658_1092854379553115_3516005562084847752_n.jpg', alt: 'Reunión', descripcion: 'Reunión de liderazgo' },
    { id: 9, src: '/galeria/486158000_1102088795296340_523974908289459307_n.jpg', alt: 'Evento', descripcion: 'Evento especial HDM' },
    { id: 10, src: '/galeria/486386877_1102088511963035_260318757293601327_n.jpg', alt: 'Jóvenes', descripcion: 'Grupo de jóvenes en acción' },
    { id: 11, src: '/galeria/486475929_1102088758629677_5318573166415931115_n.jpg', alt: 'Celebración', descripcion: 'Momento de celebración' },
    { id: 12, src: '/galeria/486576365_1102088775296342_1450034029599456614_n.jpg', alt: 'Predicación', descripcion: 'Compartiendo la Palabra' },
    { id: 13, src: '/galeria/486643691_1102088778629675_950734273466490972_n.jpg', alt: 'Grupo', descripcion: 'Grupo de ministerio' },
    { id: 14, src: '/galeria/486646000_1102088845296335_4766022630837513488_n.jpg', alt: 'Actividad', descripcion: 'Actividad grupal' },
    { id: 15, src: '/galeria/486702279_1102088485296371_2402139724312948810_n.jpg', alt: 'Encuentro', descripcion: 'Encuentro de jóvenes' },
    { id: 16, src: '/galeria/487120814_1102088771963009_3365895124725032378_n.jpg', alt: 'Ministración', descripcion: 'Tiempo de ministración' },
    { id: 17, src: '/galeria/495360525_1143567707815115_7598743247827675979_n.jpg', alt: 'Adoración', descripcion: 'Tiempo de adoración' },
    { id: 18, src: '/galeria/495391745_1143568811148338_8305392558207854308_n.jpg', alt: 'Taller', descripcion: 'Taller para jóvenes' },
    { id: 19, src: '/galeria/495462874_1143568591148360_7214350793936261060_n.jpg', alt: 'Presentación', descripcion: 'Presentación especial' },
    { id: 20, src: '/galeria/495487135_1143568841148335_7579068476376576976_n.jpg', alt: 'Compartir', descripcion: 'Compartiendo experiencias' },
    { id: 21, src: '/galeria/495562091_1143567801148439_1858316743229872768_n.jpg', alt: 'Formación', descripcion: 'Formación de líderes' },
    { id: 22, src: '/galeria/495588905_1143568814481671_3906632689426284499_n.jpg', alt: 'Servicio', descripcion: 'Servicio a la comunidad' },
    { id: 23, src: '/galeria/495593257_1143567874481765_4977638355057405478_n.jpg', alt: 'Conferencia', descripcion: 'Conferencia juvenil' },
    { id: 24, src: '/galeria/495720921_1146114980893721_2157383997135561759_n.jpg', alt: 'Grupo de estudio', descripcion: 'Estudio bíblico en grupo' },
    { id: 25, src: '/galeria/495797176_1143568961148323_4680941351084109337_n.jpg', alt: 'Campamento', descripcion: 'Campamento juvenil' },
    { id: 26, src: '/galeria/496254309_1143567404481812_5252458109054366837_n.jpg', alt: 'Celebración', descripcion: 'Celebrando juntos' },
    { id: 27, src: '/galeria/496770581_1143567641148455_3708375451532374177_n.jpg', alt: 'Oración', descripcion: 'Tiempo de oración' },
    { id: 28, src: '/galeria/496924573_1146115260893693_8579112892703137078_n.jpg', alt: 'Actividad grupal', descripcion: 'Actividades en grupo' },
    { id: 29, src: '/galeria/497111557_1143567787815107_9199904112712972404_n.jpg', alt: 'Ministerio juvenil', descripcion: 'Ministerio juvenil en acción' },
    { id: 30, src: '/galeria/500105798_1156927569812462_9190165936697781322_n.jpg', alt: 'Evento especial', descripcion: 'Evento especial de HDM' },
    { id: 31, src: '/galeria/513997425_1184294833742402_4175138432417934478_n.jpg', alt: 'Comunidad', descripcion: 'Comunidad de fe' },
  ];

  // Estado para la imagen seleccionada y modal
  const [selectedImage, setSelectedImage] = useState<{ id: number; src: string; alt: string; descripcion: string } | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Función para abrir el modal con la imagen seleccionada
  const openModal = (image: { id: number; src: string; alt: string; descripcion: string }, index: number) => {
    setSelectedImage(image);
    setCurrentIndex(index);
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden'; // Prevenir scroll
  };

  // Función para cerrar el modal
  const closeModal = () => {
    setIsModalOpen(false);
    document.body.style.overflow = 'auto'; // Restaurar scroll
  };

  // Navegación entre imágenes
  const navigateImage = (direction: number) => {
    const newIndex = (currentIndex + direction + imagenes.length) % imagenes.length;
    setCurrentIndex(newIndex);
    setSelectedImage(imagenes[newIndex]);
  };

  // Manejar teclas para navegación
  useEffect(() => {
    const handleKeyDown = (e: { key: string; }) => {
      if (!isModalOpen) return;
      
      if (e.key === 'Escape') closeModal();
      if (e.key === 'ArrowLeft') navigateImage(-1);
      if (e.key === 'ArrowRight') navigateImage(1);
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isModalOpen, currentIndex]);

  // Efecto de animación para las imágenes al hacer scroll
  useEffect(() => {
    const handleScroll = () => {
      const galleryItems = document.querySelectorAll('.gallery-item');
      
      galleryItems.forEach((item) => {
        const rect = item.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight && rect.bottom >= 0;
        
        if (isVisible) {
          item.classList.add('visible');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    // Trigger once on load
    setTimeout(handleScroll, 300);
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="bg-black text-white pt-20">
      {/* Hero Section */}
      <section className="py-10 px-4 bg-gradient-to-b from-black">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-anton mb-6 text-white">GALERÍA DE FOTOS</h1>
          <p className="text-lg md:text-xl max-w-4xl mx-auto mb-12 text-gray-300">
            Explora los momentos más destacados de nuestros eventos y actividades
          </p>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-1  px-4 bg-black">
        <div className="container mx-auto ">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {imagenes.map((imagen, index) => (
              <div 
                key={imagen.id} 
                className="gallery-item opacity-0 transform translate-y-10 transition-all duration-700 ease-out cursor-pointer overflow-hidden rounded-lg shadow-lg"
                onClick={() => openModal(imagen, index)}
              >
                <div className="relative group h-64 overflow-hidden">
                  <img 
                    src={imagen.src} 
                    alt={imagen.alt} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-30 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal para vista ampliada */}
      <AnimatePresence>
        {isModalOpen && selectedImage && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90 p-4"
          >
            <div className="relative w-full max-w-6xl max-h-[90vh] flex flex-col">
              {/* Botón de cierre */}
              <button 
                onClick={closeModal}
                className="absolute top-4 right-4 z-10 text-white bg-black bg-opacity-50 rounded-full p-2 hover:bg-opacity-70 transition-all"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              
              {/* Contenedor de la imagen */}
              <div className="relative flex-grow flex items-center justify-center overflow-hidden">
                <motion.img 
                  key={selectedImage.id}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.3 }}
                  src={selectedImage.src} 
                  alt={selectedImage.alt} 
                  className="max-h-[80vh] max-w-full object-contain"
                />
              </div>
              

              
              {/* Botones de navegación */}
              <button 
                onClick={() => navigateImage(-1)}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white bg-black bg-opacity-50 rounded-full p-3 hover:bg-opacity-70 transition-all"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              
              <button 
                onClick={() => navigateImage(1)}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white bg-black bg-opacity-50 rounded-full p-3 hover:bg-opacity-70 transition-all"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
              
              {/* Miniaturas para navegación rápida */}
              <div className="flex overflow-x-auto space-x-2 py-4 px-2 bg-black bg-opacity-70 mt-2 rounded-lg">
                {imagenes.map((img, idx) => (
                  <div 
                    key={img.id} 
                    onClick={() => {
                      setSelectedImage(img);
                      setCurrentIndex(idx);
                    }}
                    className={`flex-shrink-0 w-16 h-16 cursor-pointer transition-all ${currentIndex === idx ? 'ring-2 ring-white scale-110' : 'opacity-60 hover:opacity-100'}`}
                  >
                    <img 
                      src={img.src} 
                      alt={img.alt} 
                      className="w-full h-full object-cover rounded"
                    />
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* CSS para animaciones */}
      <style>{`
        .gallery-item.visible {
          opacity: 1;
          transform: translateY(0);
        }
      `}</style>
    </div>
  );
};

export default Galeria;