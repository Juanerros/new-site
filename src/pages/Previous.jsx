import './css/previous.css';

export default function Previous() {
  return (
    <>
      <div className='hero-courses' >
        <div className="imgs">
          <img src="/imgs/lampara.jpeg" alt="lampara" />
          <img src="/imgs/robot.jpeg" alt="robot" />
          <img src="/imgs/juego.jpeg" alt="juego" />
        </div>
        <div className='hero-text'>
          <h2>Previas</h2>
          <p>Por si te llevaste materias</p>
        </div>
      </div>
      <div className="div-previas">
        <h2>¿Te llevaste materias de <span>aula</span> en Ciclo Basico?</h2>
        <p>Materias de aula 1er hasta 3er año</p>
      </div>
      <div className="contenedor-previas">
        <div className='previa'>
          <h1> Ciencias Naturales </h1>
          <div className='materias'>
            <a href=""><span> Ciencias Naturales 1° </span></a>
          </div>
        </div>
        <div className='previa'>
          <h1> Ciencias Sociales </h1>
          <div className='materias'>
            <a href=""><span> Ciencias Sociales 1° </span></a>
          </div>
        </div>
        <div className='previa'>
          <h1>Matemáticas</h1>
          <div className='materias'>
            <a href=""><span>Matemática 1°</span></a>
            <a href=""><span>Matemática 2°</span></a>
            <a href=""><span>Matemática 3°</span></a>
          </div>
        </div>
        <div className='previa'>
          <h1>Inglés</h1>
          <div className='materias'>
            <a href=""><span>Inglés 1°</span></a>
            <a href=""><span>Inglés 2°</span></a>
            <a href=""><span>Inglés 3°</span></a>
          </div>
        </div>
        <div className='previa'>
          <h1> Historia </h1>
          <div className='materias'>
            <a href=""><span> Historia 2°</span></a>
            <a href=""><span> Historia 3°</span></a>
          </div>
        </div>
        <div className='previa-edfisica'>
          <h1> Ed. Fisica </h1>
          <div className='materias'>
            <a href=""><span> Ed. Fisica 1°</span></a>
            <a href=""><span> Ed. Fisica 2°</span></a>
            <a href=""><span> Ed. Fisica 3°</span></a>
            <a href=""><span> Ed. Fisica 4°</span></a>
            <a href=""><span> Ed. Fisica 5°</span></a>
            <a href=""><span> Ed. Fisica 6°</span></a>
          </div>
        </div>
        <div className="div-previas">
          <h2>¿Te llevaste materias de <span>taller</span> en Ciclo Basico?</h2>
          <p>Materias de taller 1er hasta 3er año</p>
        </div>
      </div>
    </>
  );
}