import './css/home.css';

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

        {/* Imagen generica de la escuela o proyecto tecnico */}
        <img src="" alt="" />
      </div>
      <div className='section'>
        <div className='tecnicaturas'>
          <div className='box'>
            <h2>Tecnicatura en Programación</h2>
            <p>Desarrollo de software y aplicaciones</p>
            <div className='lista'>
              <h4>Programacion orientada a objetos</h4>
              <h4>Desarrollo web full-stack</h4>
              <h4>Bases de datos y SQL</h4>
              <h4>Desarrollo de aplicaciones moviles</h4>
            </div>
            <input type="button" value="Cursos" className='btn-tecnicaturas' />
          </div>
          <div className='box'>
            <h2>Tecnicatura en Informática</h2>
            <p>Gestión de sistemas y redes</p>
            <div className='lista'>
              <h4>Administración de sistemas operativos</h4>
              <h4>Redes y seguridad informática</h4>
              <h4>Virtualización y cloud computing</h4>
              <h4>Soporte técnico y mantenimiento</h4>
            </div>
            <input type="button" value="Cursos" className='btn-tecnicaturas' />
          </div>
        </div>
      </div>
    </>
  );
}