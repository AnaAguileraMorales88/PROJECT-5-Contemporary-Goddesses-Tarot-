import instagramIcon from "../assets/icons/icono-insta.png";
import tiktokIcon from "../assets/icons/icono-tiktok.png"
import xIcon from "../assets/icons/icono-x.png"

export default function Footer() {
  return (
    <footer className="text-white py-6 mt-10">
      <div className="container mx-auto text-center space-y-4">
        <ul className="flex items-center justify-center gap-6">
          <li>
            <a
              href="https://instagram.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              title="Instagram"
            >
              <img src={instagramIcon} alt="Instagram" className="w-8 h-8 transition-transform duration-200 hover:scale-110" />
            </a>
          </li>

          <li>
            <a
              href="https://tiktok.com/@yourusername"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="TikTok"
              title="TikTok"
            >
              <img src={tiktokIcon} alt="TikTok" className="w-8 h-8 transition-transform duration-200 hover:scale-110" />
            </a>
          </li>

          <li>
            <a
              href="https://x.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="X"
              title="X"
            >
              <img src={xIcon} alt="X" className="w-8 h-8 transition-transform duration-200 hover:scale-110" />
            </a>
          </li>
        </ul>

        <p className="text-base">
          &copy; {new Date().getFullYear()} Diosas Místicas Tarot. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
}
