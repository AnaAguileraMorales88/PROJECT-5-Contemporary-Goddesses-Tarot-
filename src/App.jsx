import './App.css';
import { useState } from "react";
import Fondo from "./Componentes/fondo";
import Header from './Componentes/Header';
import Descripcion from './Componentes/descripcion';
import CartaAbajo from "./Componentes/cartaAbajo";
import Usuario from './Componentes/inputUsuario';
import PiePagina from './Componentes/PiePagina';

function App() {
  const [datosUsuario, setDatosUsuario] = useState(null);

  return (
    <>
      <Fondo>
        <Header />
        <Descripcion />
        <Usuario onRegistro={(usuario) => setDatosUsuario(usuario)} />
        <CartaAbajo datosUsuario={datosUsuario} />
        <PiePagina />
      </Fondo>
    </>
  );
}

export default App;
