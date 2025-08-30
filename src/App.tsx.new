import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'

// Componentes
import Header from './components/Header'
import Footer from './components/Footer'

// Páginas
import Home from './pages/Home'
import Oracion from './pages/Oracion'
import Eventos from './pages/Eventos'
import Historia from './pages/Historia'
import Galeria from './pages/Galeria'

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/oracion" element={<Oracion />} />
            <Route path="/eventos" element={<Eventos />} />
            <Route path="/historia" element={<Historia />} />
            <Route path="/galeria" element={<Galeria />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App
