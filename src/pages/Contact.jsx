import './css/contact.css';
import Hero from '../components/Hero';
import { FaBusAlt } from "react-icons/fa";
import { FaTrainSubway } from "react-icons/fa6";

export default function Contact() {
  return (
    <>
      <Hero imageUrl="../../assets/imgs/plano-derecho.jpg">
        <h2>Contactos</h2>
        <p>Nuestros contactos</p>
      </Hero>
      <div className='contact-section'>
        <div className='contacto'>
          <h2>¿Donde nos encontramos?</h2>
          <h4>Güemes 2051, B1842 Monte Grande, Provincia de Buenos Aires</h4>
        </div>
        <div className='porte'>
          <h2>Transporte que te acercan a la técnica</h2>

          <div className='trans'>
            <div className='transporte'>
              <FaBusAlt size={60} />
              <div className='lineas'>
                <h4>Líneas de colectivo</h4>
                <li>501 - ramal 4.</li>
                <li>501 - ramal 5.</li></div>
            </div>
            <div className='transporte'>
              <FaTrainSubway size={60} />
              <div className='lineas'>
                <h4>Líneas de tren</h4> <br />
                <li>Línea Roca, Tren Ezeiza.</li>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}