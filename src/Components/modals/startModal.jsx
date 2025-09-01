import { forwardRef } from "react";

const StartModal = forwardRef(({ userData }, ref) => {
    if (!userData) return null;

    return (
        <section ref={ref} className="text-center mt-10">
            <h3 className="text-xl text-[#D3A85D] sm:text-4xl  mb-4 mt-8">
                ¡Escucha al universo, <strong>{userData.name}!</strong>
            </h3>
        </section>
    );
});

export default StartModal;
