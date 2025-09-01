import { useState } from "react";
import { saveSpread } from "../services/ApiHistory";

const CardsResult = ({ selectedCards, cards, userData }) => {
  const [saved, setSaved] = useState(false); 

  const selected = selectedCards.map((id) =>
    cards.find((card) => card.id === id)
  );

  const labels = ["Pasado", "Presente", "Futuro"];

  const handleSave = async () => {
    const spread = {
      user: userData?.name || "Anónimo",
      date: new Date().toLocaleString(),
      cards: selected.map((card) => ({
        id: card.id,
        name: card.arcaneName,
        description: card.arcaneDescription,
        image: card.arcaneImage.imageSrc,
      })),
    };

      console.log("Intentando guardar spread:", spread);

    try {
      const res=await saveSpread(spread);
      console.log("Respuesta del backend:", res); 
      setSaved(true);
      return res;
    } catch (err) {
      console.error("Error al guardar la tirada:", err);
    }
  };

  return (
    <section className="mt-12 flex flex-col gap-12 max-w-5xl w-full px-4">
      {selected.map((card, index) => (
        <article
          key={card.id}
          className="bg-[#1F1F2E] p-6 rounded-2xl shadow-lg flex flex-col gap-6 items-center"
        >
          <h2 className="text-[#FDDBA1] font-bold text-4xl">{labels[index]}</h2>
          <img
            src={card.arcaneImage.imageSrc}
            alt={card.arcaneName || "Card"}
            className="w-[180px] aspect-[2/3] rounded-lg border-2 border-[#FDDBA1] shadow-md"
          />
          <h3 className="text-[#FDDBA1] font-bold text-3xl">{card.arcaneName}</h3>
          <p className="text-gray-300 text-base leading-relaxed max-w-3xl text-center">
            {card.arcaneDescription}
          </p>
          <div className="mt-6 flex flex-col items-center gap-4">
            <img
              src={card.goddessImage.imageSrc}
              alt={card.goddessName}
              className="w-[150px] h-[150px] object-cover rounded-full border-2 border-[#FDDBA1] shadow-md"
            />
            <h4 className="text-[#FDDBA1] font-semibold text-lg italic">
              {card.goddessName}
            </h4>
            <p className="text-gray-300 text-base leading-relaxed max-w-2xl text-center">
              {card.goddessDescription}
            </p>
          </div>
        </article>
      ))}

      {!saved ? (
        <button
          className="self-center bg-[#C99AE9] hover:bg-[#FDDBA1] text-black font-semibold px-6 py-3 rounded-xl shadow-lg transition cursor-pointer"
          onClick={handleSave}
        >
          Guardar tirada
        </button>
      ) : (
        <p className="text-center text-green-400 font-bold text-lg">
          ✅ Tirada guardada con éxito
        </p>
      )}
    </section>
  );
};

export default CardsResult;
