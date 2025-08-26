import fondo1 from "../assets/imagenes/Fondo.png";
import fondo2 from "../assets/imagenes/Fondo_2.png";

export default function Background({ baseImage, overlayImage}) {
  return (
    <div className="relative min-h-screen flex items-center justify-center">
      {/* Imagen de fondo base */}
      <img
        src={fondo1}
        alt="fondo base"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Imagen que se superpone */}
      <img
        src={fondo2}
        alt="fondo superpuesto"
        className="absolute inset-0 w-full h-full object-contain opacity-80"
      />
    </div>
  );
}