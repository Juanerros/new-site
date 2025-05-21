import './css/courses.css';
import { FaCode } from "react-icons/fa6";
import { HiOutlineDesktopComputer } from "react-icons/hi";
import { RiToolsFill } from "react-icons/ri";


export default function Courses() {
  return (
    <>
      <div className='contenedor'>
        <div className='cajaCB'>
          <div className="titulo-course"> <RiToolsFill size={30} /> <h1>Ciclo Básico</h1></div>
          <div className='turnos'>
            <div className='tm'>
              <a href="">1°1</a>
              <a href="">1°3</a>
              <a href="">2°1</a>
              <a href="">2°3</a>
              <a href="">3°1</a>
              <a href="">3°3</a>
            </div>
            <div className='tt'>
              <a href="">1°2</a>
              <a href="">1°4</a>
              <a href="">1°6</a>
              <a href="">2°2</a>
              <a href="">2°4</a>
              <a href="">2°6</a>
              <a href="">3°2</a>
              <a href="">3°4</a>
              <a href="">3°6</a>
            </div>
          </div>
        </div>
        <div className="cajasColumn">
          <div className='caja'>
            <div className="titulo-course"><FaCode size={30} /><h1>Programación</h1></div>
            <div className='turnos'>
              <div className='tm'>
                <a href="">4°3</a>
                <a href="">5°3</a>
                <a href="">6°3</a>
              </div>
              <div className='tt'>
                <a href="">4°4</a>
                <a href="">5°4</a>
                <a href="">7°2</a>
              </div>
            </div>
          </div>
          <div className='caja'>
            <div className="titulo-course"> <HiOutlineDesktopComputer size={30} /> <h1>Informatica</h1></div>
            <div className='turnos'>
              <div className='tm'>
                <a href="">4°1</a>
                <a href="">5°1</a>
                <a href="">6°1</a>
                <a href="">7°1</a>
              </div>
              <div className='tt'>
                <a href="">4°2</a>
                <a href="">5°2</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}