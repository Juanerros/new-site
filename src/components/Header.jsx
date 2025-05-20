import './css/header.css'
import Logo from '/imgs/logo.png';
import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';

export default function Header() {
    const [menuActive, setMenuActive] = useState(false);
    const location = useLocation();

    const toggleMenu = () => {
        const menu = document.querySelector('.menu');
        const btnMenu = document.querySelector('.btn-menu');

        if (!menuActive) {
            menu.classList.add('menu-active');
            btnMenu.classList.add('btn-menu-active');
            setMenuActive(true);
        } else {
            menu.classList.add('menu-closing');
            menu.classList.remove('menu-active');
            btnMenu.classList.remove('btn-menu-active');

            setTimeout(() => {
                menu.classList.remove('menu-closing');
                btnMenu.classList.remove('btn-menu-active');
                setMenuActive(false);
            }, 500);
        }
    }

    return (
        <header>
            <Link to="/" className='logo' title='Ir a inicio'>
                <img src={Logo} alt="Logo" />
                <h1>EEST N°1</h1>
            </Link>
            <nav>
                <Link to="/" className={location.pathname === '/' ? 'selected' : 'hover'}>Inicio</Link>
                <Link to="/cursos" className={location.pathname === '/cursos' ? 'selected' : 'hover'}>Cursos</Link>
                <Link to="/biblioteca" className={location.pathname === '/biblioteca' ? 'selected' : 'hover'}>Biblioteca</Link>
                <Link to="/previas" className={location.pathname === '/previas' ? 'selected' : 'hover'}>Previas</Link>
                <Link to="/novedades" className={location.pathname === '/novedades' ? 'selected' : 'hover'}>Novedades</Link>
                <Link to="/contacto" className={location.pathname === '/contacto' ? 'selected' : 'hover'}>Contacto</Link>
                <Link to="/inscripcion" className={location.pathname === '/inscripcion' ? 'selected' : 'hover'}>Inscripción</Link>
            </nav>

            <div className='btn-menu' onClick={toggleMenu}>
                <span></span>
                <span></span>
                <span></span>
            </div>

            <div className="menu">
                <Link onClick={toggleMenu} to="/" className={location.pathname === '/' ? 'selected' : 'hover'}>Inicio</Link>
                <Link onClick={toggleMenu} to="/cursos" className={location.pathname === '/cursos' ? 'selected' : 'hover'}>Cursos</Link>
                <Link onClick={toggleMenu} to="/biblioteca" className={location.pathname === '/biblioteca' ? 'selected' : 'hover'}>Biblioteca</Link>
                <Link onClick={toggleMenu} to="/previas" className={location.pathname === '/previas' ? 'selected' : 'hover'}>Previas</Link>
                <Link onClick={toggleMenu} to="/novedades" className={location.pathname === '/novedades' ? 'selected' : 'hover'}>Novedades</Link>
                <Link onClick={toggleMenu} to="/contacto" className={location.pathname === '/contacto' ? 'selected' : 'hover'}>Contacto</Link>
                <Link onClick={toggleMenu} to="/inscripcion" className={location.pathname === '/inscripcion' ? 'selected' : 'hover'}>Inscripción</Link>
            </div>
        </header>
    )
}