import './App.css'
import Fondo from "./Componentes/fondo";
import Header from './Componentes/header';
import Descripcion from './Componentes/Descripcion';
import CartaAbajo from "./Componentes/cartasAbajoTarot/cartaAbajo";



function App() {
  return (
  <>
    <Fondo>
      <Header />
      <Descripcion />
      <CartaAbajo />
    </Fondo>
  </>
  )
}
export default App;