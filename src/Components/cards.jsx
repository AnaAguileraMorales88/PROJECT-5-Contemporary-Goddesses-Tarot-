import { useEffect, useState } from "react";
import TarotCard from "../assets/images/Carta_Tarot.jpg";

const Cards = ({ userData }) => {
  const [cards, setCards] = useState([]);
  const [selectedCards, setSelectedCards] = useState([]);

  useEffect(() => {
    fetch("https://6872278c76a5723aacd3cbb3.mockapi.io/api/v1/tarot")
      .then((res) => res.json())
      .then((data) => setCards(data))
      .catch((error) => console.error("Error loading cards:", error));
  }, []);

  const handleSelection = (id) => {
    if (selectedCards.includes(id)) return;
    if (selectedCards.length >= 3) return;
    setSelectedCards([...selectedCards, id]);
  };

  return (
    <section className="flex flex-col items-center justify-center mt-15 px-0">
      <div className="flex justify-center items-center gap-[-10px] overflow-x-auto px-0 w-full max-w-full scrollbar-hide">
        <div className="flex space-x-[-120px]">
          {cards
            .filter((card) => !selectedCards.includes(card.id))
            .map((card) => (
              <div
                key={card.id}
                className="relative cursor-pointer w-[120px] sm:w-[140px] md:w-[160px] lg:w-[190px] aspect-[2/3.3] rounded-lg transition-transform duration-300 hover:-translate-x-3 hover:scale-101"
                onClick={() => handleSelection(card.id)}
              >
                <div className="transition-transform duration-700 transform-style-3d w-full h-full relative">
                  <img
                    src={TarotCard}
                    alt="Card back"
                    className="absolute w-full h-full rounded-lg backface-hidden border-2 border-[#FDDBA1]"
                  />
                  <img
                    src={card.imagen}
                    alt={card.nombre || "Card"}
                    className="absolute w-full h-full rounded-lg backface-hidden border-2 border-[#FDDBA1] transform rotate-y-180"
                  />
                </div>
              </div>
            ))}
        </div>
      </div>

      {selectedCards.length > 0 && (
        <div className="flex justify-center flex-wrap gap-10 mt-16 max-w-[1000px] w-full px-4">
          {cards
            .filter((card) => selectedCards.includes(card.id))
            .map((card, index) => (
              <div
                key={card.id}
                className="w-[180px] aspect-[2/3.5] relative animate-fall "
                style={{ animationDelay: `${index * 250}ms` }}
              >
                <img
                  src={card.arcaneImage.imageSrc}
                  alt={card.nombre || "Card"}
                  className="w-full h-full rounded-lg object-cover"
                />
                <p className="text-[#D3A85D] font-semibold mt-3 text-lg text-center">
                  {card.nombre}
                </p>
              </div>
            ))}
        </div>
      )}

      {userData && (
        <section className="text-center mt-10">
          <h3 className="text-xl text-[#D3A85D] sm:text-4xl font-bold mb-4 mt-8">
            Welcome, {userData.nombre}!
          </h3>
          <p className="text-white text-base sm:text-lg md:text-xl lg:text-1xl font-bold mb-4">
            Your last reading was recorded on <strong>{userData.fecha}</strong>
          </p>
        </section>
      )}
    </section>
  );
};

export default Cards;
