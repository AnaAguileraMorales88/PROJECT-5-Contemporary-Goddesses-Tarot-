import { useEffect, useState } from "react";
import { getSpreads, deleteSpread } from "../services/ApiHistory";
import DeleteHistory from "./deleteHistory";

const CardHistory = () => {
  const [history, setHistory] = useState([]);

  useEffect(() => {
    window.scrollTo(0, 0);
    const fetchHistory = async () => {
      try {
        const data = await getSpreads();
        setHistory(data.reverse());
      } catch (err) {
        console.error("Error loading history:", err);
      }
    };
    fetchHistory();
  }, []);

  const handleDelete = async (id) => {
    try {
      await deleteSpread(id);
      setHistory((prev) => prev.filter((spread) => spread.id !== id));
    } catch (err) {
      console.error("Error eliminando tirada:", err);
    }
  };

  return (
    <section className="mt-6 p-6 bg-[#1f1f2e] rounded-2xl shadow-lg max-w-4xl mx-auto">
      <h2 className="text-[#FDDBA1] font-bold text-2xl sm:text-3xl mb-6 text-center">
        Historial de Tiradas
      </h2>

      {history.length === 0 ? (
        <p className="text-gray-400 text-center">No hay tiradas guardadas todavía.</p>
      ) : (
        history.map((spread) => (
          <article
            key={spread.id}
            className="mb-8 p-4 sm:p-6 bg-[#2a2a3b] rounded-xl shadow-inner"
          >
            <h3 className="text-[#BD85D8] font-semibold text-base sm:text-lg text-center mb-4">
              {spread.user} - {spread.date}
            </h3>

           
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 justify-center max-w-[800px] mx-auto">
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
            </div>

           
            <div className="flex justify-center sm:justify-end mt-4">
              <DeleteHistory id={spread.id} onDelete={handleDelete} />
            </div>
          </article>
        ))
      )}
    </section>
  );
};

export default CardHistory;
