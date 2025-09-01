import { FaTrash } from "react-icons/fa"; // icono de basura de FontAwesome

const DeleteHistory = ({ id, onDelete }) => {
  return (
    <button
      onClick={() => onDelete(id)}
      className="p-2 bg-[#C99AE9] hover:bg-[#b055ed] text-white rounded-full shadow-md transition-colors duration-300 cursor-pointer"
      title="Eliminar"
    >
      <FaTrash className="w-5 h-5" />
    </button>
  );
};

export default DeleteHistory;
