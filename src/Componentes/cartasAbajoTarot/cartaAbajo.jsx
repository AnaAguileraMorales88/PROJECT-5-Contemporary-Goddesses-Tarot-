import CartaTarot from "../../assets/imagenes/Carta_Tarot.jpg";

const CartaAbajo = () => {
  return (
    <section className="flex flex-col items-center justify-center mt-10 px-4">
      {/* Contenedor de las cartas */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-20 text-center">
        
        {/* Carta Pasado */}
        <div>
          <h3 className="text-[#D3A85D] font-[Lugrasimo] text-xl mb-3">Pasado</h3>
          <img
            src={CartaTarot}
            alt="Carta de Tarot boca abajo - Pasado"
            className="w-40 sm:w-48 md:w-56 lg:w-64 shadow-2xl shadow-black/60 rounded-lg cursor-pointer hover:scale-103 transition-transform duration-300"
          />
        </div>

        {/* Carta Presente */}
        <div>
          <h3 className="text-[#D3A85D] font-[Lugrasimo] text-xl mb-3">Presente</h3>
          <img
            src={CartaTarot}
            alt="Carta de Tarot boca abajo - Presente"
            className="w-40 sm:w-48 md:w-56 lg:w-64 shadow-2xl shadow-black/60 rounded-lg cursor-pointer hover:scale-103 transition-transform duration-300"
          />
        </div>

        {/* Carta Futuro */}
        <div>
          <h3 className="text-[#D3A85D] font-[Lugrasimo] text-xl mb-3">Futuro</h3>
          <img
            src={CartaTarot}
            alt="Carta de Tarot boca abajo - Futuro"
            className="w-40 sm:w-48 md:w-56 lg:w-64 shadow-2xl shadow-black/60 rounded-lg cursor-pointer hover:scale-103 transition-transform duration-300"
          />
        </div>

      </div>
    </section>
  );
};

export default CartaAbajo;