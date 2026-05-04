import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Ministry from './components/Ministry'
import About from './components/About'
// REMOVIDO TEMPORARIAMENTE — Restaurar futuramente:
// import Books from './components/Books'
// import Contact from './components/Contact'
// import Mentoria from './components/Mentoria'
import Footer from './components/Footer'
import ChurchPlanting from './components/ChurchPlanting'
import Devocionais from './components/Devocionais'
import './App.css'

function HomePage() {
  return (
    <>
      <Hero />
      <Ministry />
      <About />
      {/* REMOVIDO TEMPORARIAMENTE — Restaurar futuramente:
      <Books />
      <Contact />
      */}
    </>
  )
}

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/plantacao-de-igrejas" element={<ChurchPlanting />} />
          {/* REMOVIDO TEMPORARIAMENTE — Restaurar futuramente:
          <Route path="/mentoria" element={<Mentoria />} />
          */}
          <Route path="/devocionais" element={<Devocionais />} />
        </Routes>
      </main>
      <Footer />
    </>
  )
}
