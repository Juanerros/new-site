import './css/news.css';

export default function News() {
  return (
    <>
      <div className="hero">
        <h2>Novedades</h2>
        <p>Nuestras novedades</p>
      </div>
      <h2 className='title'>Actividades</h2>
      <div className="activitys">
        <article>
          <h3>Actividades para ingresantes de 1er año</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt delectus dolorem deserunt qui culpa, aspernatur, officia perspiciatis nesciunt reprehenderit explicabo porro accusantium. Reprehenderit sapiente incidunt asperiores saepe reiciendis modi a?
          </p>
          <div className="line"></div>
          <a href="#">Ver actividades</a>
        </article>
        <article>
          <h3>Actividades para vacaciones de invierno</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt delectus dolorem deserunt qui culpa, aspernatur, officia perspiciatis nesciunt reprehenderit explicabo porro accusantium. Reprehenderit sapiente incidunt asperiores saepe reiciendis modi a?
          </p>
          <div className="line"></div>
          <a href="#">Ver actividades</a>
        </article>
        <article>
          <h3>Actividades para demas</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt delectus dolorem deserunt qui culpa, aspernatur, officia perspiciatis nesciunt reprehenderit explicabo porro accusantium. Reprehenderit sapiente incidunt asperiores saepe reiciendis modi a?
          </p>
          <div className="line"></div>
          <a href="#">Ver actividades</a>
        </article>
      </div>

      <h2 className='title'>Desbloqueo de netbook</h2>
      <article className='conectar'>
        <h3>Solucion para bloqueo de netbooks</h3>
        <div className="line"></div>
        <a href="#">Ver solucion</a>
      </article>
    </>
  );
}