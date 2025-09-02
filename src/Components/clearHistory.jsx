const ClearHistory = ({ onClear }) => {
  return (
    <button
      onClick={onClear}
className="
  absolute right-2 md:right-0 top-1/2 transform -translate-y-1/2
  bg-[#392F52] hover:bg-red-700 text-white
  text-[10px] sm:text-xs md:text-base
  px-2 py-1 sm:px-2 sm:py-1 md:px-3 md:py-1.5
  rounded-lg shadow-md transition cursor-pointer
"

    >
      Eliminar historial
    </button>
  );
};

export default ClearHistory;

