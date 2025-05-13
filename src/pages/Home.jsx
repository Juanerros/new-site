import './css/home.css';

export default function Home() {
  return (
    <>
      <div className='about'>
        <div className='title'>
          <h1>Escuela de Educacion Secundaria Tecnica N°1</h1>
        </div>
        <div className='text'>
          <h2>Formando profesionales del futuro
            Nuestra escuela ofrece formación técnica de calidad en las áreas más demandadas del mercado laboral. <br />
            Prepárate para el futuro con nuestras tecnicaturas en Programación e Informática.</h2>
          <div className='buttons'>
            <input type="button" value="Inscribirse >" />
            <input type="button" value="Conocer más" />
          </div>

        </div>

        {/* Imagen generica de la escuela o proyecto tecnico */}
        <img src="" alt="" />
      </div>
    </>
  );
}