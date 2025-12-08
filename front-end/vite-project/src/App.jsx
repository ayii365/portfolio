import { Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar.jsx'; // Importing the Navigation bar component

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
        <Route path="/" element={<About />} />
        <Route path="/" element={<Projects />} />
        <Route path="/" element={<Contact />} />
      </Routes>

      {/* Footer will go here */}
    </>
  )
}

export default App
