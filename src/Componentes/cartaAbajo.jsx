import { useEffect, useState } from "react";
import CartaTarot from "../assets/imagenes/Carta_Tarot.jpg";

const CartaAbajo = ({ datosUsuario }) => {
  const [cartas, setCartas] = useState([]);
  const [cartasSeleccionadas, setCartasSeleccionadas] = useState([]);

  useEffect(() => {
    fetch("https://6872278c76a5723aacd3cbb3.mockapi.io/api/v1/tarot")
      .then((res) => res.json())
      .then((data) => setCartas(data))
      .catch((error) => console.error("Error al cargar las cartas:", error));
  }, []);

  const manejarSeleccion = (id) => {
    if (cartasSeleccionadas.includes(id)) return;
    if (cartasSeleccionadas.length >= 3) return;
    setCartasSeleccionadas([...cartasSeleccionadas, id]);
  };

  return (
    <section className="flex flex-col items-center justify-center mt-10 px-0">
      {/* Fila superior: cartas boca abajo (solo las NO seleccionadas) */}
      <div className="flex justify-center items-center gap-[-10px] overflow-x-auto px-0 w-full max-w-full scrollbar-hide">
        <div className="flex space-x-[-120px]">
          {cartas
            .filter((carta) => !cartasSeleccionadas.includes(carta.id)) 
            .map((carta) => (
              <div
                key={carta.id}
                className="relative cursor-pointer w-[120px] sm:w-[140px] md:w-[160px] lg:w-[190px] aspect-[2/3.3] rounded-lg transition-transform duration-300 hover:-translate-y-3 hover:scale-101"
                onClick={() => manejarSeleccion(carta.id)}
              >
                <div className="transition-transform duration-700 transform-style-3d w-full h-full relative">
                  {/* Cara trasera */}
                  <img
                    src={CartaTarot}
                    alt="Carta boca abajo"
                    className="absolute w-full h-full rounded-lg backface-hidden border-2 border-[#D3A85D]"
                  />

                  {/* Cara delantera */}
                  <img
                    src={carta.imagen}
                    alt={carta.nombre || "Carta"}
                    className="absolute w-full h-full rounded-lg backface-hidden border-2 border-[#D3A85D] transform rotate-y-180"
                  />
                </div>
              </div>
            ))}
        </div>
      </div>

      {/* Cartas seleccionadas abajo */}
      {cartasSeleccionadas.length > 0 && (
        <div className="flex justify-center flex-wrap gap-10 mt-16 max-w-[1000px] w-full px-4">
          {cartas
            .filter((carta) => cartasSeleccionadas.includes(carta.id))
            .map((carta, index) => (
              <div
                key={carta.id}
                className="w-[180px] aspect-[2/3.3] relative animate-fall rounded-lg border-2 border-[#D3A85D]"
                style={{ animationDelay: `${index * 250}ms` }}
              >
                <img
                  src={carta.imagen}
                  alt={carta.nombre || "Carta"}
                  className="w-full h-full rounded-lg object-cover"
                />
                <p className="text-[#D3A85D] font-semibold mt-3 text-lg text-center">
                  {carta.nombre}
                </p>
              </div>
            ))}
        </div>
      )}

      {/* Mensaje para el usuario */}
      {datosUsuario && (
        <section className="text-center mt-10">
          <h3 className="text-xl text-[#D3A85D] sm:text-4xl font-bold mb-4 mt-8">
            ¡Bienvenid@, {datosUsuario.nombre}!
          </h3>
          <p className="text-white text-base sm:text-lg md:text-xl lg:text-1xl font-bold mb-4">
            Tu última tirada fue registrada el{" "}
            <strong>{datosUsuario.fecha}</strong>
          </p>
        </section>
      )}
    </section>
  );
};

export default CartaAbajo;