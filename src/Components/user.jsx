import { useState } from "react";
import TextInput from "./textInput";
import Modal from "./modals/popupAlert";

function UserInput({ onRegister }) {
  const [name, setName] = useState("");
  const [showModal, setShowModal] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (name.trim() === "") {
      setShowModal(true);
      return;
    }

    const todayDate = new Date().toLocaleDateString("en-US", {
      day: "2-digit",
      month: "long",
      year: "numeric",
    });

    const newUser = { name, date: todayDate };
    onRegister?.(newUser);

    setName("");
  };

  return (
    <section className="p-6 max-w-md mx-auto rounded-2xl shadow-md shadow-white">
      <form onSubmit={handleSubmit} className="space-y-6 text-center">
        <TextInput
          id="name"
          label="Nombre:"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Escribe tu nombre *"
        />

        <button
          type="submit"
          className="bg-[#C99AE9] text-[#040813] px-6 py-2 rounded-lg cursor-pointer hover:bg-[#FDDBA1] mt-6 mb-6 text-xl"
        >
          Guardar
        </button>
      </form>

      {showModal && (
        <Modal
          title="⚠️ Campo vacío"
          message="Por favor, ingresa tu nombre antes de continuar."
          onClose={() => setShowModal(false)}
        />
      )}
    </section>
  );
}

export default UserInput;

