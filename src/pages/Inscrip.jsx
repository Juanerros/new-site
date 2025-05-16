import './css/inscrip.css';
import gifIntro from '/gifs/intro.gif';

export default function Inscrip() {
  return (
    <>
      <img src={gifIntro} alt="GIF" className='gif' />
      <h1>Inscripción</h1>
      <h2>¡Bienvenido a la sección de inscripción!</h2>
    </>
  );
}