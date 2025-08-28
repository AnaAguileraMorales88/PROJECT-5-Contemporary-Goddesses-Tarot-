import Background from "./Components/background";
import Header from './Components/header';
import Description from './Components/description';
import Cards from "./Components/cards";
import UserInput from './Components/user';
import Footer from './Components/footer';
import { useState } from "react";
import './App.css';


function App() {
  const [userData, setUserData] = useState(null);

  return (
    <>
      <Background>
        <Header />
        <Description />
        <UserInput onRegistro={(user) => setUserData(user)} />
        <Cards userData={userData} />
        <Footer />
      </Background>
    </>
  );
}

export default App;
