import './css/header.css'
import Logo from './../assets/icon.svg';
import { Link } from 'react-router-dom';
import { useState } from 'react';

export default function Header() {
    const [menu, setMenu] = useState(false)

    return (
        <header>
            <Link to="/" className='logo'>
                <img src={Logo} alt="Logo" />
                <h1>E.E.S.T. N°1</h1>
            </Link>
            <nav>
                <Link to="/">Inicio</Link>

                {/* Quizas podemos poner que sea un lista desplegable */}
                {/* quizas... en celu si o si. */}
                <Link to="/cursos">Cursos</Link>
                <Link to="/biblioteca">Biblioteca</Link>
                <Link to="/olimpiadas">Olimpiadas</Link>
                <Link to="/previas">Previas</Link>
                <Link to="/novedades">Novedades</Link>
                <Link to="/contacto">Contacto</Link>
                <Link to="/inscripcion">Inscripción</Link>
            </nav>

            <div className='btn-menu' onClick={() => setMenu(!menu)}>
                <span></span>
                <span></span>
                <span></span>
            </div>

            {menu && (
                <div className="menu">
                    <Link onClick={() => setMenu(!menu)} to="/">Inicio</Link>
                    <Link onClick={() => setMenu(!menu)} to="/cursos">Cursos</Link>
                    <Link onClick={() => setMenu(!menu)} to="/biblioteca">Biblioteca</Link>
                    <Link onClick={() => setMenu(!menu)} to="/olimpiadas">Olimpiadas</Link>
                    <Link onClick={() => setMenu(!menu)} to="/previas">Previas</Link>
                    <Link onClick={() => setMenu(!menu)} to="/novedades">Novedades</Link>
                    <Link onClick={() => setMenu(!menu)} to="/contacto">Contacto</Link>
                    <Link onClick={() => setMenu(!menu)} to="/inscripcion">Inscripción</Link>
                </div>
            )}
        </header>
    )
}