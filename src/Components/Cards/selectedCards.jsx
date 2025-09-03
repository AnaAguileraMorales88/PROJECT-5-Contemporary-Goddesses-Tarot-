const SelectedCards = ({ selectedCards, cards }) => {
  if (selectedCards.length === 0) return null;

  return (
    <section className="flex justify-center flex-wrap gap-10 mt-16 max-w-[1000px] w-full px-4">
      {selectedCards.map((id, index) => {
        const card = cards.find((c) => c.id === id);
        return (
          <figure
            key={id}
            className="flex flex-col items-center w-[180px] animate-fall"
            style={{ animationDelay: `${index * 250}ms` }}
          >
            <img
              src={card.arcaneImage.imageSrc}
              alt={card.arcaneName || "Card"}
              className="w-full aspect-[2/3] object-contain rounded-lg"
            />
            <figcaption className="text-[#D3A85D] font-semibold mt-3 text-lg text-center">
              {card.arcaneName}
            </figcaption>
          </figure>
        );
      })}
    </section>
  );
};

export default SelectedCards;
