import { useEffect, useState } from "react";
import { getSpreads, deleteSpread, deleteAllSpreads } from "../services/ApiHistory";
import DeleteHistory from "./deleteHistory";
import ClearHistory from "./clearHistory";
import AlertPopup from "./modals/popupAlert";

const CardHistory = () => {
  const [history, setHistory] = useState([]);
  const [showAlert, setShowAlert] = useState(false); 

  useEffect(() => {
    const fetchHistory = async () => {
      try {
        const data = await getSpreads();
        setHistory(data.reverse());
      } catch (err) {
        console.error("Error cargando historial:", err);
      }
    };
    fetchHistory();
  }, []);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const handleDelete = async (id) => {
    try {
      await deleteSpread(id);
      setHistory((prev) => prev.filter((spread) => spread.id !== id));
    } catch (err) {
      console.error("Error eliminando tirada:", err);
    }
  };

  const handleClearHistory = () => {
    setShowAlert(true); 
  };

  const confirmClearHistory = async () => {
    setShowAlert(false); 
    try {
      await deleteAllSpreads();
      setHistory([]);
    } catch (err) {
      console.error("Error eliminando todo el historial:", err);
    }
  };

  return (
<section className="relative max-w-4xl mx-auto px-4 sm:px-6 md:px-8">
  <section className="mt-6 p-6 bg-[#1f1f2e] rounded-2xl shadow-lg relative">
    <h2 className="text-[#FDDBA1] font-bold text-2xl sm:text-4xl text-center relative mb-7">
      TIRADAS GUARDADAS
      {history.length > 0 && (
        <ClearHistory
          onClear={handleClearHistory}
          className="absolute right-0 top-1/2 transform -translate-y-1/2"
        />
      )}
    </h2>

    {history.length === 0 ? (
      <p className="text-gray-400 text-center mt-6">
        No hay tiradas guardadas todavía.
      </p>
    ) : (
      history.map((spread) => (
        <article
          key={spread.id}
          className="mb-8 p-4 sm:p-6 bg-[#2a2a3b] rounded-xl shadow-inner"
        >
          <h3 className="text-[#BD85D8] font-semibold text-base sm:text-lg text-center mb-4">
            {spread.user} - {spread.date}
          </h3>

          <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 justify-center max-w-[800px] mx-auto">
            {spread.cards.map((c) => (
              <figure key={c.id} className="text-center">
                <img
                  src={c.image}
                  alt={c.name}
                  className="w-[140px] h-auto rounded-lg border border-[#FDDBA1] shadow-md mx-auto"
                />
                <figcaption className="text-sm text-[#FDDBA1] mt-2">{c.name}</figcaption>

                {c.goddessImage && (
                  <div className="mt-4 flex flex-col items-center">
                    <img
                      src={c.goddessImage}
                      alt={c.goddessName}
                      className="w-[120px] h-[120px] object-cover rounded-full border-2 border-[#FDDBA1] shadow-md"
                    />
                    <p className="text-sm text-[#BD85D8] mt-2 font-semibold italic">
                      {c.goddessName}
                    </p>
                  </div>
                )}
              </figure>
            ))}
          </section>

          <div className="flex justify-center sm:justify-end mt-4">
            <DeleteHistory id={spread.id} onDelete={handleDelete} />
          </div>
        </article>
      ))
    )}
  </section>


  {showAlert && (
    <AlertPopup
      title="Vaciar historial"
      message="¿Seguro que quieres vaciar todo el historial?"
      onClose={() => setShowAlert(false)}
    >
      <div className="flex justify-center gap-4 mt-4">
        <button
          onClick={confirmClearHistory}
          className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition cursor-pointer"
        >
          Sí
        </button>
        <button
          onClick={() => setShowAlert(false)}
          className="bg-gray-300 text-black px-4 py-2 rounded-lg hover:bg-gray-400 transition cursor-pointer"
        >
          No
        </button>
      </div>
    </AlertPopup>
  )}
</section>

  );
};

export default CardHistory;
