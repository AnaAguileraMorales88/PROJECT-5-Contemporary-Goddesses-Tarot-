import { useEffect, useState, useRef } from "react";
import TarotCard from "../assets/images/Carta_Tarot.jpg";
import { getCards } from "../services/ApiCards";
import SelectedCards from "./selectedCards";
import CardsResult from "./CardsResult";
import AlertPopup from "./modals/popupAlert";
import StartModal from "./modals/startModal";
import EndModal from "./modals/endModal";

const shuffleArray = (array) => {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

const Cards = ({ userData }) => {
  const [cards, setCards] = useState([]);
  const [selectedCards, setSelectedCards] = useState([]);
  const [showResults, setShowResults] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");

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
    if (!userData?.name || userData.name.trim() === "") {
      setAlertMessage("Por favor, rellena tu nombre antes de seleccionar cartas.");
      setShowAlert(true);
      return;
    }

    if (selectedCards.includes(id)) return;
    if (selectedCards.length >= 3) {
      setAlertMessage("Ya seleccionaste el máximo de 3 cartas.");
      setShowAlert(true);
      return;
    }

    setSelectedCards([...selectedCards, id]);
  };

  useEffect(() => {
    if (selectedCards.length === 3 && buttonRef.current) {
      buttonRef.current.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  }, [selectedCards]);

  const startRef = useRef(null);
  const buttonRef = useRef(null);

  return (
    <section
      id="cards-section"
      className="flex flex-col items-center justify-center mt-15 px-0"
    >
      <div className="flex justify-center items-center overflow-x-auto px-0 w-full max-w-full scrollbar-hide">
        <div className="flex space-x-[-120px]">
          {cards
            .filter((card) => !selectedCards.includes(card.id))
            .map((card) => (
              <figure
                key={card.id}
                className="relative cursor-pointer w-[120px] sm:w-[140px] md:w-[160px] lg:w-[190px] aspect-[2/3.3] rounded-lg transition-transform duration-300 hover:-translate-x-3 hover:scale-101"
                onClick={() => handleSelection(card.id)}
              >
                <img
                  src={TarotCard}
                  alt="Hidden card"
                  className="absolute w-full h-full rounded-lg border-2 border-[#FDDBA1]"
                />
              </figure>
            ))}
        </div>
      </div>

      <SelectedCards selectedCards={selectedCards} cards={cards} />

      {selectedCards.length === 3 && !showResults && (
        <button
          ref={buttonRef}
          className="mt-8 px-6 py-2 bg-[#FDDBA1] text-black font-semibold rounded-2xl shadow-md hover:bg-[#BD85D8] transition cursor-pointer"
          onClick={() => {
            setShowResults(true);
            setTimeout(() => {
              startRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
            }, 100);
          }}
        >
          Mostrar Resultados
        </button>
      )}

      {showResults && (
        <>
          <StartModal ref={startRef} userData={userData} />
          <CardsResult selectedCards={selectedCards} cards={cards} userData={userData} />
          <EndModal userData={userData} />
        </>
      )}


      {showAlert && (
        <AlertPopup
          title="Atención"
          message={alertMessage}
          onClose={() => setShowAlert(false)}
        />
      )}
    </section>
  );
};

export default Cards;

