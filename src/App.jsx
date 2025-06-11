import './App.css'
import React from 'react'
import Header from './components/Header.jsx'
import Banner from './components/Banner.jsx'
import Form  from './components/Form.jsx'
import Aside from './components/Aside.jsx'
import Adjuducacion from './components/Adjudicacion.jsx'
import Footer from './components/Footer.jsx'
import News from './components/News.jsx'

/**
 * Componente principal App
 * Estructura la aplicación incluyendo:
 *  - Header: barra de navegación superior.
 *  - Banner: imagen y título principal.
 *  - Aside: información introductoria.
 *  - Adjuducacion: pasos del proceso de licitación.
 *  - Form: tabla con filtros y resultados.
 *  - News: noticias y actualizaciones.
 *  - Footer: pie de página.
 */
function App() {

  return (
    <>
      {/* Barra de navegación */}
      <Header />
      {/* Banner principal */}
      <Banner />
      {/* Sección informativa lateral */}
      <Aside />
      {/* Visualización de pasos de adjudicación */}
      <Adjuducacion />
      {/* Tabla de resultados con filtros */}
      <Form />
      {/* Noticias y actualizaciones */}
      <News />
      {/* Pie de página */}
      <Footer />
    </>
  )
}

export default App
