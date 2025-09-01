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
<section className="mt-6 p-4 sm:p-6 bg-[#1f1f2e] rounded-2xl shadow-lg max-w-full sm:max-w-3xl md:max-w-4xl mx-auto">
  <h2 className="text-[#FDDBA1] font-bold text-xl sm:text-2xl md:text-3xl mb-4 sm:mb-6 text-center">
    Historial de Tiradas
  </h2>
  {history.length === 0 ? (
    <p className="text-gray-400 text-center sm:text-left">
      No hay tiradas guardadas todavía.
    </p>
  ) : (
    history.map((spread) => (
      <article
        key={spread.id}
        className="mb-6 p-3 sm:p-4 bg-[#2a2a3b] rounded-xl shadow-inner"
      >
        <h3 className="text-[#BD85D8] font-semibold text-sm sm:text-base text-center sm:text-left">
          {spread.user} - {spread.date}
        </h3>
        <div className="flex flex-wrap gap-2 sm:gap-4 mt-3 sm:mt-4 justify-center sm:justify-start">
          {spread.cards.map((c) => (
            <figure
              key={c.id}
              className="w-[80px] sm:w-[100px] text-center"
            >
              <img
                src={c.image}
                alt={c.name}
                className="rounded-lg border border-[#FDDBA1] shadow-md"
              />
              <figcaption className="text-xs sm:text-sm text-[#FDDBA1] mt-1 sm:mt-2">
                {c.name}
              </figcaption>
            </figure>
          ))}
        </div>
        <div className="flex justify-center sm:justify-end mt-3 sm:mt-4">
          <DeleteHistory id={spread.id} onDelete={handleDelete} />
        </div>
      </article>
    ))
  )}
</section>

    <section className="mt-12 p-6 bg-[#1f1f2e] rounded-2xl shadow-lg max-w-4xl mx-auto">
      <h2 className="text-[#FDDBA1] font-bold text-2xl mb-6">
        Historial de Tiradas
      </h2>
      {history.length === 0 ? (
        <p className="text-gray-400">No hay tiradas guardadas todavía.</p>
      ) : (
        history.map((spread, index) => (
          <article
            key={index}
            className="mb-6 p-4 bg-[#2a2a3b] rounded-xl text-center"
          >
            <h3 className="text-[#BD85D8] font-semibold mb-4">
              {spread.user} - {spread.date}
            </h3>

            
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 justify-center max-w-[600px] mx-auto">
              {spread.cards.map((c) => (
                <figure key={c.id} className="text-center w-[140px] mx-auto">
                  <img
                    src={c.image}
                    alt={c.name}
                    className="w-[140px] h-auto rounded-lg border border-[#FDDBA1] shadow-md mx-auto"
                  />
                  <figcaption className="text-sm text-[#FDDBA1] mt-2">
                    {c.name}
                  </figcaption>

                  {c.goddessImage && (
                    <>
                      <img
                        src={c.goddessImage}
                        alt={c.goddessName}
                        className="w-[130px] h-[130px] object-cover rounded-full border-2 border-[#FDDBA1] shadow-md mt-4 mx-auto"
                      />
                      <p className="text-sm text-[#BD85D8] mt-2 font-semibold italic">
                        {c.goddessName}
                      </p>
                    </>
                  )}
                </figure>
              ))}
            </div>
          </article>
        ))
      )}
    </section>
  );
};

export default CardHistory;
