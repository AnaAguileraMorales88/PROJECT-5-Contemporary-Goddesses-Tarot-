import { useState, useRef } from "react";
import TextInput from "./Testing/textInput";
import Modal from "./modals/popupAlert";

function UserInput({ onRegister }) {
  const [name, setName] = useState("");
  const [showModal, setShowModal] = useState(false);
  const nameInputRef = useRef(null);

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

    const cardsSection = document.getElementById("cards-section");
    if (cardsSection) {
      cardsSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleCloseModal = () => {
    setShowModal(false);

    requestAnimationFrame(() => {
      if (nameInputRef.current) {
        nameInputRef.current.scrollIntoView({ behavior: "smooth", block: "center" });
        nameInputRef.current.focus();
      }
    });
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
          ref={nameInputRef}
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
          title="Campo vacío"
          message="Por favor, ingresa tu nombre antes de continuar."
          onClose={handleCloseModal}
        />
      )}
    </section>
  );
}

export default UserInput;





