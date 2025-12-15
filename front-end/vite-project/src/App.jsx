import { Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar.jsx'; // Importing the Navigation bar component
import Footer from './components/layout/Footer.jsx'; // Importing the Footer component

// Importing all the main pages
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Projects from './pages/Projects.jsx';
import Contact from './pages/Contact.jsx';

function App() {
  return (
    <>
      {/* Navigation bar here */}
      <Navbar />

      {/* The clicked page will render here */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Projects" element={<Projects />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>

      {/* Footer here */}
      <Footer />
    </>
  )
}

export default App;
