import fondo1 from "../assets/imagenes/Fondo.png";
import fondo2 from "../assets/imagenes/Fondo_2.png";

export default function Fondo({ children }) {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-start">

      <img
        src={fondo1}
        alt="fondo base morado con estrellas"
        className="absolute inset-0 w-full h-full object-cover"
      />

      <img
        src={fondo2}
        alt="fondo superpuesto de las constelaciones"
        className="absolute inset-0 w-full h-full object-cover opacity-50"
      />


      <div className="relative z-10 w-full">{children}</div>
    </div>
  );
}