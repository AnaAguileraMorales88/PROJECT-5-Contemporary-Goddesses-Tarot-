import logo from "../assets/imagenes/logo.png";  
const Header = () => {
    return (
<header>
  <img src= {logo} alt="logo pagina" className="block mx-auto w-32 sm:w-32 md:w-48 lg:w-80 my-8" />

</header>
    )
}

export default Header;