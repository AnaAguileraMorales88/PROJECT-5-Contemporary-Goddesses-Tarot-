import { useEffect, useState } from "react";
import { FaCircleArrowUp } from "react-icons/fa6";

export default function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-6 right-6 z-50 transition-opacity duration-300 
        ${isVisible ? "opacity-100" : "opacity-0 pointer-events-none"} cursor-pointer`}
    >
      <FaCircleArrowUp
        className="w-12 h-12 text-white drop-shadow-lg hover:text-[#C99AE9] active:scale-95 transition-transform"
      />
    </button>
  );
}