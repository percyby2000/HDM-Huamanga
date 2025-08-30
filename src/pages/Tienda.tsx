import React, { useState } from "react";

type Producto = {
  id: number;
  nombre: string;
  precio: number;
  descripcion: string;
  imagen: string;
  categoria: string;
  colores?: string[];
};

const productos: Producto[] = [
  {
    id: 1,
    nombre: "Polera Unisex",
    precio: 45.00,
    descripcion: "Polera 100% algodón de alta calidad",
    imagen: "/public/tienda/polera1.png",
    categoria: "ropa",
    colores: ["amarillo", "azul", "rojo", "verde"]
  },
  {
    id: 2,
    nombre: "Gorra Logo",
    precio: 35.00,
    descripcion: "Gorra ajustable con logo bordado",
    imagen: "/public/tienda/gorra1.jpg",
    categoria: "accesorios"
  },
  {
    id: 3,
    nombre: "Pulsera Love Jesus",
    precio: 10.00,
    descripcion: "Pulsera tejida a mano con mensaje",
    imagen: "/public/tienda/pulseralovejesus.webp",
    categoria: "accesorios"
  },
  {
    id: 4,
    nombre: "Manual de Estudio",
    precio: 25.00,
    descripcion: "Manual de estudio bíblico para jóvenes",
    imagen: "/public/tienda/tomo1.png",
    categoria: "libros"
  }
];

const categorias = [
  { id: "todos", nombre: "Todos" },
  { id: "ropa", nombre: "Ropa" },
  { id: "accesorios", nombre: "Accesorios" },
  { id: "libros", nombre: "Libros" }
];

const whatsappNumber = "51999999999"; // Reemplaza por tu número de WhatsApp

const Tienda: React.FC = () => {
  const [categoriaActual, setCategoriaActual] = useState("todos");
  const [colorSeleccionado, setColorSeleccionado] = useState("");

  const productosFiltrados = categoriaActual === "todos"
    ? productos
    : productos.filter(producto => producto.categoria === categoriaActual);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero */}
      <div className="relative w-full h-[300px] flex items-center justify-center">
        <img 
          src="/public/img/hero tienda.jpg" 
          alt="Tienda Hero" 
          className="absolute inset-0 w-full h-full object-cover brightness-50"
        />
        <div className="relative z-10 text-center text-white">
          <h1 className="text-4xl font-bold mb-4">Nuestra Tienda</h1>
          <p className="text-xl">Productos para fortalecer tu fe</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Filtros */}
        <div className="flex flex-wrap gap-2 mb-8">
          {categorias.map(cat => (
            <button
              key={cat.id}
              onClick={() => setCategoriaActual(cat.id)}
              className={`px-4 py-2 rounded-full font-medium transition-colors ${
                categoriaActual === cat.id
                  ? "bg-blue-600 text-white"
                  : "bg-white text-gray-700 hover:bg-gray-100"
              }`}
            >
              {cat.nombre}
            </button>
          ))}
        </div>

        {/* Grid de productos */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {productosFiltrados.map(producto => (
            <div key={producto.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <div className="h-48 relative">
                <img src={producto.imagen} alt={producto.nombre} className="w-full h-full object-cover" />
              </div>
              <div className="p-4">
                <h3 className="font-bold text-gray-900 text-lg mb-1">{producto.nombre}</h3>
                <p className="text-gray-600 text-sm mb-3">{producto.descripcion}</p>
                
                {producto.colores && (
                  <div className="flex gap-2 mb-4">
                    {producto.colores.map(color => (
                      <button 
                        key={color}
                        onClick={() => setColorSeleccionado(color)}
                        className={`w-6 h-6 rounded-full border ${
                          colorSeleccionado === color ? "ring-2 ring-blue-500" : ""
                        }`}
                        style={{ backgroundColor: color }}
                        aria-label={`Color ${color}`}
                      />
                    ))}
                  </div>
                )}
                
                <div className="flex justify-between items-center mt-4">
                  <span className="text-xl font-bold text-gray-900">S/ {producto.precio.toFixed(2)}</span>
                  <a
                    href={`https://wa.me/${whatsappNumber}?text=Hola,%20me%20interesa%20comprar%20${producto.nombre}${colorSeleccionado ? '%20en%20color%20' + colorSeleccionado : ''}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-green-500 text-white px-3 py-1.5 rounded-lg text-sm font-medium hover:bg-green-600 transition-colors"
                  >
                    Comprar
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Información adicional */}
        <div className="mt-16 bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-4 text-gray-800">Información de compras</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-3">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-8 h-8 text-blue-600">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                </svg>
              </div>
              <h3 className="font-semibold mb-2">Formas de pago</h3>
              <p className="text-gray-600 text-sm">Aceptamos transferencias bancarias, Yape, Plin y efectivo contra entrega</p>
            </div>
            
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-3">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-8 h-8 text-green-600">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
              </div>
              <h3 className="font-semibold mb-2">Envíos</h3>
              <p className="text-gray-600 text-sm">Envíos a todo el país. Gratis por compras mayores a S/100</p>
            </div>
            
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mb-3">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-8 h-8 text-yellow-600">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-semibold mb-2">Tiempo de entrega</h3>
              <p className="text-gray-600 text-sm">Lima: 1-2 días hábiles. Provincias: 3-5 días hábiles</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tienda;
