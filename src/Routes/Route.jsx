import { Routes, Route } from 'react-router-dom';
import About from '../Components/About/about'; // etc.
import Contact from '../Components/Contact/contact';
import Projects from '../Components/Projects/projects';
import Services from '../Components/Services/services';
import Home from '../Components/Home/home';

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/services" element={<Services />} />
      <Route path="/about" element={<About />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
}