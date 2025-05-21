import { Link } from 'react-router-dom';
import './css/notfound.css';

export default function NotFound() {
  return (
    <>
      <h1>404 - Página no encontrada</h1>
      <Link className='btn-volver' to={'/'}>Volver a inicio</Link>
    </>
  );
}