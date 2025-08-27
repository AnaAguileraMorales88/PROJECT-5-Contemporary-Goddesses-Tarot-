import { useState } from "react";

function Usuario({ onRegistro }) {
  const [nombre, setNombre] = useState("");

  const manejarEnvio = (e) => {
    e.preventDefault();

    const fechaHoy = new Date().toLocaleDateString("es-ES", {
      day: "2-digit",
      month: "long",
      year: "numeric",
    });

    const nuevoUsuario = { nombre, fecha: fechaHoy };

    if (onRegistro) {
      onRegistro(nuevoUsuario); 
    }
  };

  return (
    <section className="p-6 max-w-md mx-auto rounded-2xl shadow-md shadow-white">
      <form onSubmit={manejarEnvio} className="space-y-6 text-center">
        <div className="flex flex-col sm:flex-row items-center justify-center sm:space-x-4 space-y-4 sm:space-y-0">
          <label
            htmlFor="nombre"
            className="text-xl sm:text-2xl font-semibold text-white mt-6"
          >
            Nombre:
          </label>
          <input
            id="nombre"
            type="text"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            className="p-2 w-40 sm:w-48 text-center rounded-lg  bg-white text-black-600 placeholder-black mt-6"
            placeholder="Escribe tu nombre *"
            required
          />
        </div>
        <button
          type="submit"
          className="bg-[#C99AE9] text-[#040813] px-6 py-2 rounded-lg cursor-pointer hover:bg-[#FDDBA1] mt-6 mb-6 text-xl"
        >
          Guardar
        </button>
      </form>
    </section>
  );
}

export default Usuario;
