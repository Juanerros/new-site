import './css/home.css';
import { FaCode } from "react-icons/fa6";
import { HiOutlineDesktopComputer } from "react-icons/hi";
import { IoIosArrowForward } from "react-icons/io";
import { RiToolsFill } from "react-icons/ri";

export default function Home() {
  return (
    <>
      <div className='about'>
        <div className='text'>
          <h1>Formando profesionales del futuro <br /></h1>
          <h2>Nuestra escuela ofrece formación técnica de calidad en las áreas más demandadas del mercado laboral. <br />
            Prepárate para el futuro con nuestras tecnicaturas en Programación e Informática.</h2>
          <div className='buttons'>
            <input type="button" value="Inscribirse" />
            <input type="button" value="Conoce más" />
          </div>
        </div>
      </div>
      <div className='section'>
        <div className='tecnicaturas'>
          <div className='box'>
            <div className='title'>
              <div className='icon'><RiToolsFill size={30} /></div>
              <h2>Ciclo Básico</h2>
            </div>
            <p>Conocimiento básico del uso de herramientas</p>
            <div className='lista'>
              <h4><div className='icon'><IoIosArrowForward /></div>Aprendimiento de herramientas</h4>
              <h4><div className='icon'><IoIosArrowForward /></div>Planificación y acción</h4>
              <h4><div className='icon'><IoIosArrowForward /></div>Dibujo tecnico y caligrafia</h4>
              <h4><div className='icon'><IoIosArrowForward /></div>Uso de madera y metales</h4>
            </div>
            <input type="button" value="Cursos" className='btn-tecnicaturas' />
          </div>
          <div className='box'>
            <div className='title'>
              <div className='icon'><FaCode size={30} /></div>
              <h2>Tecnicatura en Programación</h2>
            </div>
            <p>Desarrollo de software y aplicaciones</p>
            <div className='lista'>
              <h4><div className='icon'><IoIosArrowForward /></div>Programacion orientada a objetos</h4>
              <h4><div className='icon'><IoIosArrowForward /></div>Desarrollo web full-stack</h4>
              <h4><div className='icon'><IoIosArrowForward /></div>Bases de datos y SQL</h4>
              <h4><div className='icon'><IoIosArrowForward /></div>Desarrollo de aplicaciones moviles</h4>
            </div>
            <input type="button" value="Cursos" className='btn-tecnicaturas' />
          </div>
          <div className='box'>
            <div className='title'>
              <div className='icon'><HiOutlineDesktopComputer size={30} /></div>
              <h2>Tecnicatura en Informática</h2>
            </div>
            <p>Gestión de sistemas y redes</p>
            <div className='lista'>
              <h4><div className='icon'><IoIosArrowForward /></div>Administración de sistemas operativos</h4>
              <h4><div className='icon'><IoIosArrowForward /></div>Redes y seguridad informática</h4>
              <h4><div className='icon'><IoIosArrowForward /></div>Virtualización y cloud computing</h4>
              <h4><div className='icon'><IoIosArrowForward /></div>Soporte técnico y mantenimiento</h4>
            </div>
            <input type="button" value="Cursos" className='btn-tecnicaturas' />
          </div>
        </div>
      </div>
    </>
  );
}