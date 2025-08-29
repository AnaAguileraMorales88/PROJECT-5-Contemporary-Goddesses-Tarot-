const SelectedCards = ({ selectedCards, cards }) => {
  if (selectedCards.length === 0) return null;

  return (
    <div className="flex justify-center flex-wrap gap-10 mt-16 max-w-[1000px] w-full px-4">
      {cards
        .filter((card) => selectedCards.includes(card.id))
        .map((card, index) => (
          <figure
            key={card.id}
            className="w-[180px] aspect-[2/3.5] relative animate-fall"
            style={{ animationDelay: `${index * 250}ms` }}
          >
            <img
              src={card.arcaneImage.imageSrc}
              alt={card.arcaneName || "Card"}
              className="w-full h-full rounded-lg object-cover"
            />
            <figcaption className="text-[#D3A85D] font-semibold mt-3 text-lg text-center">
              {card.arcaneName}
            </figcaption>
          </figure>
        ))}
    </div>
  );
};

export default SelectedCards;