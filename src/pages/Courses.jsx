import './css/courses.css';
import { FaCode } from "react-icons/fa6";
import { HiOutlineDesktopComputer } from "react-icons/hi";
import { RiToolsFill } from "react-icons/ri";

export default function Courses() {
  return (
    <>
      <div className='hero-courses' >
        <div className="imgs">
          <img src="/imgs/lampara.jpeg" alt="lampara" />          
          <img src="/imgs/robot.jpeg" alt="robot" />
          <img src="/imgs/juego.jpeg" alt="juego" />
        </div>
        <div className='hero-text'>
          <h2>Cursos</h2>
          <p>Nuestros cursos</p>
        </div>
      </div>
      <div className='contenedor'>
        <div className='cajaCB'>
          <div className="titulo-course"> <RiToolsFill size={30} /> <h1>Ciclo Básico</h1></div>
          <div className='turnos'>
            <div className='tm'>
              <p>Turno mañana</p>
              <a href=""><span>1°1</span></a>
              <a href=""><span>1°3</span></a>
              <a href=""><span>2°1</span></a>
              <a href=""><span>2°3</span></a>
              <a href=""><span>3°1</span></a>
              <a href=""><span>3°3</span></a>
            </div>
            <div className='tt'>
              <p>Turno Tarde</p>
              <a href=""><span>1°2</span></a>
              <a href=""><span>1°4</span></a>
              <a href=""><span>1°6</span></a>
              <a href=""><span>2°2</span></a>
              <a href=""><span>2°4</span></a>
              <a href=""><span>2°6</span></a>
              <a href=""><span>3°2</span></a>
              <a href=""><span>3°4</span></a>
              <a href=""><span>3°6</span></a>
            </div>
          </div>
        </div>
        <div className="cajasColumn">
          <div className='caja'>
            <div className="titulo-course"><FaCode size={30} /><h1>Programación</h1></div>
            <div className='turnos'>
              <div className='tm'>
                <p>Turno mañana</p>
                <a href=""><span>4°3</span></a>
                <a href=""><span>5°3</span></a>
                <a href=""><span>6°3</span></a>
              </div>
              <div className='tt'>
                <p>Turno Tarde</p>
                <a href=""><span>4°4</span></a>
                <a href=""><span>5°4</span></a>
                <a href=""><span>7°2</span></a>
              </div>
            </div>
          </div>
          <div className='caja'>
            <div className="titulo-course"> <HiOutlineDesktopComputer size={30} /> <h1>Informatica</h1></div>
            <div className='turnos'>
              <div className='tm'>
                <p>Turno mañana</p>
                <a href=""><span>4°1</span></a>
                <a href=""><span>5°1</span></a>
                <a href=""><span>6°1</span></a>
                <a href=""><span>7°1</span></a>
              </div>
              <div className='tt'>
                <p>Turno Tarde</p>
                <a href=""><span>4°2</span></a>
                <a href=""><span>5°2</span></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}