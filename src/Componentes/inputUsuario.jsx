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
    <section className="p-6 max-w-md mx-auto rounded-2xl shadow-md">
      <form onSubmit={manejarEnvio} className="space-y-6 text-center">
        <div className="flex flex-col sm:flex-row items-center justify-center sm:space-x-4 space-y-4 sm:space-y-0">
          <label
            htmlFor="nombre"
            className="text-xl sm:text-2xl font-semibold text-white "
          >
            Nombre:
          </label>
          <input
            id="nombre"
            type="text"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            className="p-1 w-40 sm:w-48 text-center bg-white text-gray-600 placeholder-gray-400"
            placeholder="Escribe tu nombre *"
            required
          />
        </div>
        <button
          type="submit"
          className="bg-[#C99AE9] text-[#040813] px-6 py-2 rounded-lg cursor-pointer hover:bg-[#D3A85D] mt-6 mb-8 text-xl"
        >
          Guardar
        </button>
      </form>
    </section>
  );
}

export default Usuario;
