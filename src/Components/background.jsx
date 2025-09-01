import fondo1 from "../assets/images/Fondo.png";
import constelacion1 from "../assets/images/constelacion1.png";
import estrellas from "../assets/images/estrellas.png";

export default function Background({ children }) {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-start">
      <img
        src={fondo1}
        alt="fondo base morado con estrellas"
        className="absolute inset-0 w-full h-full object-cover"
      />

      <img
        src={constelacion1}
        alt="fondo superpuesto de las constelaciones"
        className="absolute top-0 right-0 w-165 max-lg:w-150 max-md:w-48 max-sm:w-55 h-auto opacity-80"
      />

      <img
        src={estrellas}
        alt="fondo superpuesto de las constelaciones"
        className="absolute top-130 left-0 w-300 max-lg:w-150 max-md:w-48 max-sm:w-180 md:top-80 h-auto opacity-80 transition-all duration-300 ease-in-out"
      />

      <div className="relative z-10 w-full">{children}</div>
    </section>
  );
}
