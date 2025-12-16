import { Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar.jsx'; // Importing the Navigation bar component
import Footer from './components/layout/Footer.jsx'; // Importing the Footer component

// Importing all the main pages
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Projects from './pages/Projects.jsx';
import Contact from './pages/Contact.jsx';

// Importing ScrollTop function to automatically scroll to the top when a page is loaded
import ScrollTop from './components/layout/ScrollTop.jsx';

function App() {
  return (
    <>
      {/* Navigation bar here */}
      <Navbar />
      <ScrollTop />

      {/* The clicked page will render here */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      {/* Footer here */}
      <Footer />
    </>
  )
}

export default App;
