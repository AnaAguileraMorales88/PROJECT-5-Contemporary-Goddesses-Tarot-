import { MdDelete } from "react-icons/md";

const DeleteHistory = ({ id, onDelete }) => {
  return (
    <button
      onClick={() => onDelete(id)}
      className="p-3 hover:bg-[#FDDBA1] text-white rounded-full shadow-md transition-colors duration-300 cursor-pointer"
      title="Eliminar"
    >
      <MdDelete className="w-5 h-5" />
    </button>
  );
};

export default DeleteHistory;
