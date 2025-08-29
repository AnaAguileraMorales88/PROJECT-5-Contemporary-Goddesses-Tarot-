import { useEffect, useState } from "react";
import TarotCard from "../assets/images/Carta_Tarot.jpg";
import { getCards } from "../services/ApiCards";
import SelectedCards from "./selectedCards";

const shuffleArray = (array) => {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

const Cards = () => {
  const [cards, setCards] = useState([]);
  const [selectedCards, setSelectedCards] = useState([]);

useEffect(() => {
  const fetchCards = async () => {
    try {
      const data = await getCards();
      const shuffledData = shuffleArray(data);
      setCards(shuffledData);
    } catch (error) {
      console.error("Error loading cards:", error);
    }
  };

  fetchCards();
}, []);


  const handleSelection = (id) => {
    if (selectedCards.includes(id)) return;
    if (selectedCards.length >= 3) return;
    setSelectedCards([...selectedCards, id]);
  };

  return (
    <section className="flex flex-col items-center justify-center mt-15 px-0">
      <div className="flex justify-center items-center overflow-x-auto px-0 w-full max-w-full scrollbar-hide">
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
                    alt="Carta oculta"
                    className="absolute w-full h-full rounded-lg backface-hidden border-2 border-[#FDDBA1]"
                  />
                  <img
                    src={card.arcaneImage.imageSrc}
                    alt={card.arcaneName || "Card"}
                    className="absolute w-full h-full rounded-lg backface-hidden border-2 border-[#FDDBA1] transform rotate-y-180"
                  />
                </div>
              </div>
            ))}
        </div>
      </div>

      <SelectedCards selectedCards={selectedCards} cards={cards} />
    </section>

  );
};

export default Cards;
