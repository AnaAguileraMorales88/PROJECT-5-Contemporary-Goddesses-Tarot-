import CartaTarot from "../../assets/imagenes/Carta_Tarot.jpg";

const CartaAbajo = ({ datosUsuario }) => {
  return (
    <section className="flex flex-col items-center justify-center mt-10 px-4">
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-20 text-center">
        <div>
          <h3 className="text-[#D3A85D] font-[Lugrasimo] text-2xl sm:text-3xl md:text-3xl mb-3">
           Pasado
          </h3>
          <img
            src={CartaTarot}
            alt="Carta de Tarot boca abajo - Pasado"
           className="w-40 sm:w-48 md:w-56 lg:w-64 shadow-2xl shadow-black/60 rounded-lg cursor-pointer hover:scale-103 transition-transform duration-300 border-2 border-[#D3A85D]"
          />
        </div>

        <div>
          <h3  className="text-[#D3A85D] font-[Lugrasimo] text-2xl sm:text-3xl md:text-3xl mb-3">Presente</h3>
          <img
            src={CartaTarot}
            alt="Carta de Tarot boca abajo - Presente"
           className="w-40 sm:w-48 md:w-56 lg:w-64 shadow-2xl shadow-black/60 rounded-lg cursor-pointer hover:scale-103 transition-transform duration-300 border-2 border-[#D3A85D]"
          />
        </div>

        <div>
          <h3  className="text-[#D3A85D] font-[Lugrasimo] text-2xl sm:text-3xl md:text-3xl mb-3">Futuro</h3>
          <img
            src={CartaTarot}
            alt="Carta de Tarot boca abajo - Futuro"
           className="w-40 sm:w-48 md:w-56 lg:w-64 shadow-2xl shadow-black/60 rounded-lg cursor-pointer hover:scale-103 transition-transform duration-300 border-2 border-[#D3A85D]"
          />
        </div>
      </div>

      {datosUsuario && (
        <section className="text-center mt-10">
          <h3 className="text-xl text-[#D3A85D] sm:text-4xl font-bold mb-4 mt-8">
            ¡ Bienvenid@, {datosUsuario.nombre} !
          </h3>
          <p className="text-white text-base sm:text-lg md:text-xl lg:text-1xl font-bold mb-4">
         Tu última tirada fue registrada el <strong>{datosUsuario.fecha}</strong>
          </p>
        </section>
      )}
    </section>
  );
};

export default CartaAbajo;
