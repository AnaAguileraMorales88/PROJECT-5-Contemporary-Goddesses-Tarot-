import { useEffect } from "react";

function AlertPopup({ message, onClose }) {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/40 z-50">
      <div className="bg-white p-6 rounded-2xl shadow-lg text-center max-w-sm">
        <h2 className="text-xl font-bold text-red-600 mb-4">⚠️ Campo vacío</h2>
        <p className="text-gray-700 mb-6">{message}</p>
        <button
          onClick={onClose}
          className="bg-[#C99AE9] text-[#040813] px-6 py-2 rounded-lg hover:bg-[#FDDBA1] transition"
        >
          Cerrar
        </button>
      </div>
    </div>
  );
}

export default AlertPopup;