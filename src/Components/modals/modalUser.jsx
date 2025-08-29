    const ModalUser = ({ userData }) => {
        if (!userData) return null;

    return (
                <section className="text-center mt-10">
          <h3 className="text-xl text-[#D3A85D] sm:text-4xl font-bold mb-4 mt-8">
            ¡Bienvenid@ {userData.name}!
          </h3>
          <p className="text-white text-base sm:text-lg md:text-xl lg:text-1xl font-bold mb-4">
            Tu última tirada fue registrada el <strong>{userData.date}</strong>
          </p>
        </section>
      );
    };
    export default ModalUser;
