import './css/header.css'
import Logo from './../assets/icon.svg';
import { Link } from 'react-router-dom';
import { useState } from 'react';

export default function Header() {
    const [menuActive, setMenuActive] = useState(false);
    
    const toggleMenu = () => {
        const menu = document.querySelector('.menu');
        
        if (!menuActive) {
            menu.classList.add('menu-active');
            setMenuActive(true);
        } else {
            menu.classList.add('menu-closing');
            menu.classList.remove('menu-active');
            
            setTimeout(() => {
                menu.classList.remove('menu-closing');
                setMenuActive(false);
            }, 500);
        }
    }

    return (
        <header>
            <Link to="/" className='logo'>
                <img src={Logo} alt="Logo" />
                <h1>EEST N°1</h1>
            </Link>
            <nav>
                <Link to="/">Inicio</Link>

                {/* Quizas podemos poner que sea un lista desplegable */}
                {/* quizas... en celu si o si. */}
                <Link to="/cursos">Cursos</Link>
                <Link to="/biblioteca">Biblioteca</Link>
                {/* <Link to="/olimpiadas">Olimpiadas</Link> */}
                <Link to="/previas">Previas</Link>
                <Link to="/novedades">Novedades</Link>
                <Link to="/contacto">Contacto</Link>
                <Link to="/inscripcion">Inscripción</Link>
            </nav>

            <div className='btn-menu' onClick={toggleMenu}>
                <span></span>
                <span></span>
                <span></span>
            </div>

            <div className="menu">
                <Link onClick={toggleMenu} to="/">Inicio</Link>
                <Link onClick={toggleMenu} to="/cursos">Cursos</Link>
                <Link onClick={toggleMenu} to="/biblioteca">Biblioteca</Link>
                {/* <Link onClick={toggleMenu} to="/olimpiadas">Olimpiadas</Link> */}
                <Link onClick={toggleMenu} to="/previas">Previas</Link>
                <Link onClick={toggleMenu} to="/novedades">Novedades</Link>
                <Link onClick={toggleMenu} to="/contacto">Contacto</Link>
                <Link onClick={toggleMenu} to="/inscripcion">Inscripción</Link>
            </div>
        </header>
    )
}