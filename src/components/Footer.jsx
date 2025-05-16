import './css/footer.css'
import Logo from '/imgs/logo.png'
import { FiInstagram } from "react-icons/fi";
import { LiaFacebookSquare } from "react-icons/lia";
import { CgYoutube } from "react-icons/cg";
import { FaMapMarkerAlt } from "react-icons/fa";

export default function Footer() {
    return (
        <>
            <footer >
                <div className="logo">
                    <img src={Logo} alt="Logo" />
                    <h2>Escuela de educación secundaria tecnica N°1</h2>
                </div>
                <div className="redes">
                    <a href="https://www.instagram.com/tecnica1mg/?hl=es" target="_blank" rel="noopener noreferrer"><FiInstagram size={26} color='black'/></a>
                    <a href="https://www.facebook.com/people/Escuela-Secundaria-T%C3%A9cnica-N1-Esteban-Echeverria/100064875789538/" target="_blank" rel="noopener noreferrer"><LiaFacebookSquare size={32} color='black' /></a>
                    <a href="https://www.youtube.com/@tec6916" target="_blank" rel="noopener noreferrer"><CgYoutube size={32} color='black' /></a>
                    <a href="https://www.google.com/maps/@-34.8404532,-58.4643271,3a,75y,192.23h,90t/data=!3m7!1e1!3m5!1saLsaprjar3iEqbdTolB9rg!2e0!6shttps:%2F%2Fstreetviewpixels-pa.googleapis.com%2Fv1%2Fthumbnail%3Fcb_client%3Dmaps_sv.tactile%26w%3D900%26h%3D600%26pitch%3D0%26panoid%3DaLsaprjar3iEqbdTolB9rg%26yaw%3D192.23!7i16384!8i8192?entry=ttu&g_ep=EgoyMDI1MDUxMy4xIKXMDSoASAFQAw%3D%3D" target="_blank" rel="noopener noreferrer"><FaMapMarkerAlt size={22} color='black' /></a>
                </div>
            </footer>
            <p className='copy'>&copy; {new Date().getFullYear()} Escuela de educación secundaria tecnica N°1. Todos los derechos reservados.</p>
            <p>Desarrolada por Eze y Juan</p>
        </>
    )
}