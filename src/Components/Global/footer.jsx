import SocialLinks from "./socialLinks"

export default function Footer() {
  return (
    <footer className="text-white py-6 mt-10">
      <div className="container mx-auto text-center space-y-4">
        <SocialLinks />
        <p className="text-base">
          &copy; {new Date().getFullYear()} Diosas Místicas Tarot. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
}

