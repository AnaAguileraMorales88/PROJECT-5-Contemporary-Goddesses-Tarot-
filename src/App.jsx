import './App.css';
import { useState } from "react";
import Fondo from "./Componentes/fondo";
import Header from './Componentes/header';
import Descripcion from './Componentes/descripcion';
import CartaAbajo from "./Componentes/cartaAbajo";
import Usuario from './Componentes/inputUsuario';

function App() {
  const [datosUsuario, setDatosUsuario] = useState(null);

  return (
    <>
      <Fondo>
        <Header />
        <Descripcion />
        <Usuario onRegistro={(usuario) => setDatosUsuario(usuario)} />
        <CartaAbajo datosUsuario={datosUsuario} />
      </Fondo>
    </>
  );
}

export default App;
