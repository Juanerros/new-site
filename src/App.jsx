import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

export default function App() {
  return (
    <Router>
      <Header />

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cursos" element={<Courses />} />
          <Route path="/basico" element={<Basic />} />
          <Route path="/programacion" element={<Progra />} />
          <Route path="/informatica" element={<Informa />} /> {/* los tontos */}

          <Route path="/biblioteca" element={<Library />} />
          <Route path="/olimpiadas" element={<Olympics />} />

          {/* Las previas e intencificaciones estan en la misma seccion */}
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
