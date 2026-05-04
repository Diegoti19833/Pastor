import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Ministry from './components/Ministry'
import About from './components/About'
import Books from './components/Books'
import Contact from './components/Contact'
import Footer from './components/Footer'
import ChurchPlanting from './components/ChurchPlanting'
import Mentoria from './components/Mentoria'
import Devocionais from './components/Devocionais'
import './App.css'

function HomePage() {
  return (
    <>
      <Hero />
      <Ministry />
      <About />
      <Books />
      <Contact />
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
          <Route path="/mentoria" element={<Mentoria />} />
          <Route path="/devocionais" element={<Devocionais />} />
        </Routes>
      </main>
      <Footer />
    </>
  )
}
