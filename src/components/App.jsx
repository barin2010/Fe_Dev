import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Nav from './Nav/Nav';
import Footer from './Footer/Footer';
import About from './pages/About';
import Servises from './pages/Servises';
import Careers from './pages/Careers';

export const App = () => {
  return (
    <div>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Servises />} />
        <Route path="/careers" element={<Careers />} />
      </Routes>
      <Footer />
    </div>
  );
};
