import logo from "../../assets/images/logo.png";

const Header = () => {
  return (
    <header>
      <img
        src={logo}
        alt="logo pagina"
        className="block mx-auto w-90 sm:w-48 md:w-64 lg:w-100 mb-20 mt-15"
      />
    </header>
  );
};

export default Header;
