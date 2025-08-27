import { useState } from "react";

function Usuario({ onRegistro }) {
  const [nombre, setNombre] = useState("");
  const [mostrarModal, setMostrarModal] = useState(false);

  const manejarEnvio = (e) => {
    e.preventDefault();

    if (nombre.trim() === "") {
      setMostrarModal(true);
      return;
    }

    const fechaHoy = new Date().toLocaleDateString("es-ES", {
      day: "2-digit",
      month: "long",
      year: "numeric",
    });

    const nuevoUsuario = { nombre, fecha: fechaHoy };

    if (onRegistro) {
      onRegistro(nuevoUsuario); 
    }

    setNombre("");
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
            className="p-2 w-40 sm:w-48 text-center rounded-lg bg-white text-black placeholder-black mt-6"
            placeholder="Escribe tu nombre *"
          />
        </div>
        <button
          type="submit"
          className="bg-[#C99AE9] text-[#040813] px-6 py-2 rounded-lg cursor-pointer hover:bg-[#FDDBA1] mt-6 mb-6 text-xl"
        >
          Guardar
        </button>
      </form>

      {mostrarModal && (
        <div className="bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white/70 p-6 rounded-2xl shadow-lg text-center max-w-sm">
            <h2 className="text-xl font-bold text-red-600 mb-4">
              ⚠️ Campo vacío
            </h2>
            <p className="text-gray-700 mb-6">
              Por favor, ingresa tu nombre antes de continuar.
            </p>
            <button
              onClick={() => setMostrarModal(false)}
              className="bg-[#C99AE9] text-[#040813] cursor-pointer px-6 py-2 rounded-lg hover:bg-[#FDDBA1] transition"
            >
              Cerrar
            </button>
          </div>
        </div>
      )}
    </section>
  );
}

export default Usuario;

