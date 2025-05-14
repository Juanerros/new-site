import './css/contact.css';
import Hero from '../components/Hero';

export default function Contact() {
  return (
    <>
      <Hero imageUrl="../../assets/imgs/plano-derecho.jpg">
        <h2>Contactos</h2>
        <p>Nuestros contactos</p>
      </Hero>
      
      <div className='contacto'>
        <h2>¿Donde nos encontramos?</h2>
        <h4>Güemes 2051, B1842 Monte Grande, Provincia de Buenos Aires</h4>
      </div>
      <div className='transporte'>
        <h2>Transportes que te acercan a la tecnica</h2>

      </div>
    </>
  );
}