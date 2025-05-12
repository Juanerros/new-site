import './css/header.css'
// import Logo from './../assets/logo.png';
import { Link } from 'react-router-dom';

export default function Header() {
    return (
        <header>
            <Link to="/">
                <img src="{ Logo }" alt="Logo" />
            </Link>
            <nav>
                <Link to="/">Inicio</Link>

                {/* Quizas podemos poner que sea un lista desplegable */}
                <Link to="/cursos">Cursos</Link>
                <Link to="/biblioteca">Biblioteca</Link>
                <Link to="/olimpiadas">Olimpiadas</Link>
                <Link to="/previas">Previas</Link>
                <Link to="/novedades">Novedades</Link>
                <Link to="/contacto">Contacto</Link>
                <Link to="/inscripcion">Inscripción</Link>
            </nav>
        </header>
    )
}