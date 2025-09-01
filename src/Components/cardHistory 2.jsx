import { useEffect, useState } from "react";
import { getSpreads } from "../services/ApiHistory";

const CardHistory = () => {
  const [history, setHistory] = useState([]);

  useEffect(() => {
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

  return (
    <section className="mt-12 p-6 bg-[#1f1f2e] rounded-2xl shadow-lg max-w-4xl mx-auto">
      <h2 className="text-[#FDDBA1] font-bold text-2xl mb-6">
        Historial de Tiradas
      </h2>
      {history.length === 0 ? (
        <p className="text-gray-400">No hay tiradas guardadas todavía.</p>
      ) : (
        history.map((spread, index) => (
          <article key={index} className="mb-6 p-4 bg-[#2a2a3b] rounded-xl">
            <h3 className="text-[#BD85D8] font-semibold">
              {spread.user} - {spread.date}
            </h3>
            <div className="flex gap-4 mt-4 flex-wrap">
              {spread.cards.map((c) => (
                <figure key={c.id} className="w-[100px] text-center">
                  <img
                    src={c.image}
                    alt={c.name}
                    className="rounded-lg border border-[#FDDBA1] shadow-md"
                  />
                  <figcaption className="text-sm text-[#FDDBA1] mt-2">
                    {c.name}
                  </figcaption>
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
