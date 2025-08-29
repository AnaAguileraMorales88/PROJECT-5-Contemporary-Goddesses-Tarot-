const CardsResult = ({ selectedCards, cards }) => {
    const selected = selectedCards.map((id) =>
        cards.find((card) => card.id === id)
    );
    const labels = ["Pasado", "Presente", "Futuro"];

    return (
        <section className="mt-12 flex flex-col gap-12 max-w-5xl w-full px-4">
            {selected.map((card, index) => (
                <article
                    key={card.id}
                    className="bg-[#1f1f2e] p-6 rounded-2xl shadow-lg flex flex-col gap-6 items-center"
                >

                    <h2 className="text-[#FDDBA1] font-bold text-2xl">
                        {labels[index]}
                    </h2>

                    <img
                        src={card.arcaneImage.imageSrc}
                        alt={card.arcaneName || "Card"}
                        className="w-[180px] aspect-[2/3] rounded-lg border-2 border-[#FDDBA1] shadow-md"
                    />
                    <h3 className="text-[#FDDBA1] font-bold text-xl">
                        {card.arcaneName}
                    </h3>
                    <p className="text-gray-300 text-base leading-relaxed max-w-2xl text-center">
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
        </section>
    );
};

export default CardsResult;
