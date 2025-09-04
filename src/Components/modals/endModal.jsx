const EndModal = ({ userData }) => {
    if (!userData) return null;

    const fechaFormateada = new Date(userData.date).toLocaleDateString("es-ES", {
        day: "2-digit",
        month: "long",
        year: "numeric",
    });

    return (
        <section className="text-center mt-10">
            <p className="text-white text-base sm:text-lg md:text-xl lg:text-3xl mb-4">
                Tu última tirada fue registrada el: <strong>{fechaFormateada}</strong>
            </p>
        </section>
    );
};

export default EndModal;
