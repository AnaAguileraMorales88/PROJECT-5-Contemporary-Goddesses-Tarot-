import instagramIcono from "../assets/iconos/icono-insta.png";
import tiktokIcono from "../assets/iconos/icono-tiktok.png";
import xIcono from "../assets/iconos/icono-X.png"; 

export default function PiePagina() {
  
  return (
    <footer className="text-white py-6 mt-10">
      <div className="container mx-auto text-center space-y-4">
        
        <ul className="flex items-center justify-center gap-6">
          <li>
            <a

              href="https://instagram.com/tuusuario"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              title="Instagram"
            >
              <img src={instagramIcono} alt="Instagram" className="w-8 h-8 transition-transform duration-200 hover:scale-110" />
            </a>
          </li>

          <li>
            <a

              href="https://tiktok.com/@tuusuario"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="TikTok"
              title="TikTok"
            >
              <img src={tiktokIcono} alt="TikTok" className="w-8 h-8 transition-transform duration-200 hover:scale-110" />
            </a>
          </li>

          <li>
            <a

              href="https://x.com/tuusuario"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="X"
              title="X"
            >
              <img src={xIcono} alt="X" className="w-8 h-8 transition-transform duration-200 hover:scale-110" />
            </a>
          </li>
        </ul>

        <p className="text-base">
          &copy; {new Date().getFullYear()} Contemporary Goddesses Tarot. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
}