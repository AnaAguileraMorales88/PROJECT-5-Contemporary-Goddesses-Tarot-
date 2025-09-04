import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 bg-[#1f1f2e] text-[#FDDBA1] px-6 py-4 shadow-md">
      <ul className="flex justify-center gap-8 text-lg font-semibold">
        <li>
          <Link
            to="/"
            className="hover:text-[#BD85D8] transition-colors"
          >
            INICIO
          </Link>
        </li>
        <li>
          <Link
            to="/history"
            className="hover:text-[#BD85D8] transition-colors"
          >
            HISTORIAL
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
