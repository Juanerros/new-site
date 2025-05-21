import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Courses from './pages/Courses';
import Library from './pages/Library';
import Previous from './pages/Previous';
import News from './pages/News';
import Contact from './pages/Contact';
import Inscrip from './pages/Inscrip';
import NotFound from './pages/NotFound';

import Header from './components/Header';
import Footer from './components/Footer';

export default function App() {
  return (
    <Router>
      <Header />

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cursos" element={<Courses />} />
          <Route path="/biblioteca" element={<Library />} />
          <Route path="/previas" element={<Previous />} />
          <Route path="/novedades" element={<News />} />
          <Route path="/contacto" element={<Contact />} />
          <Route path="/inscripcion" element={<Inscrip />} />

          <Route path="/*" element={<NotFound />} />
        </Routes>
      </main>

      <Footer />
    </Router>
  );
}
