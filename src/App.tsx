import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/NavBar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Contact from './pages/Contact'
import Careers from './pages/Careers'
import About from './pages/About'
function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/about" element={<About />} />

      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
