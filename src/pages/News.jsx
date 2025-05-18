import './css/news.css';
import Hero from '../components/Hero';

export default function News() {
  return (
    <>
      <Hero imageUrl="/imgs/plano-derecho.jpg">
        <h2>Novedades</h2>
        <p>Nuestras novedades</p>
      </Hero>

      <h2 className='title'>Actividades</h2>
      <div className="activitys">
        <article>
          <h3>Actividades para ingresantes de 1er año</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt delectus dolorem deserunt qui culpa, aspernatur, officia perspiciatis nesciunt reprehenderit explicabo porro accusantium. Reprehenderit sapiente incidunt asperiores saepe reiciendis modi a?
          </p>
          <div className="line"></div>
          <a href="#"><span>Ver actividades</span></a>
        </article>
        <article>
          <h3>Actividades para vacaciones de invierno</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt delectus dolorem deserunt qui culpa, aspernatur, officia perspiciatis nesciunt reprehenderit explicabo porro accusantium. Reprehenderit sapiente incidunt asperiores saepe reiciendis modi a?
          </p>
          <div className="line"></div>
          <a href="#"><span>Ver actividades</span></a>
        </article>
        <article>
          <h3>Actividades para demas</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt delectus dolorem deserunt qui culpa, aspernatur, officia perspiciatis nesciunt reprehenderit explicabo porro accusantium. Reprehenderit sapiente incidunt asperiores saepe reiciendis modi a?
          </p>
          <div className="line"></div>
          <a href="#"><span>Ver actividades</span></a>
        </article>
      </div>

      <h2 className='title'>Olimpiadas</h2>
      <div className="olim">
        <article className='conectar'>
          <h3>Olimpiadas de Programacion</h3>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Velit, provident neque quibusdam voluptates, asperiores esse nihil, sapiente beatae nulla quisquam iusto tempora sit? Commodi ab necessitatibus, deleniti soluta libero ea.</p>
          <div className="line"></div>
          <a href="#"><span>Ver evento</span></a>
        </article>
        <article className='conectar'>
          <h3>Olimpiadas de Programacion</h3>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Velit, provident neque quibusdam voluptates, asperiores esse nihil, sapiente beatae nulla quisquam iusto tempora sit? Commodi ab necessitatibus, deleniti soluta libero ea.</p>
          <div className="line"></div>
          <a href="#"><span>Ver evento</span></a>
        </article>
        <article className='conectar'>
          <h3>Olimpiadas de Programacion</h3>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Velit, provident neque quibusdam voluptates, asperiores esse nihil, sapiente beatae nulla quisquam iusto tempora sit? Commodi ab necessitatibus, deleniti soluta libero ea.</p>
          <div className="line"></div>
          <a href="#"><span>Ver evento</span></a>
        </article>
      </div>

      <h2 className='title'>Desbloqueo de netbook</h2>
      <article className='conectar'>
        <h3>Solucion para bloqueo de netbooks</h3>
        <div className="line"></div>
        <a href="#"><span>Ver solucion</span></a>
      </article>
    </>
  );
}