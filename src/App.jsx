import { Routes, Route } from "react-router-dom";
import Background from "./Components/Global/background";
import Navbar from "./Components/Global/navbar";
import Header from "./Components/Global/header";
import Description from "./Components/Cards/description";
import Cards from "./Components/Cards/cards";
import CommentCards from "./Components/Cards/commentCards";
import UserInput from "./Components/Cards/user";
import Footer from "./Components/Global/footer";
import CardHistory from "./Components/History/cardHistory";
import ScrollToTopButton from "./Components/Global/scrollToTopButton";
import { useState } from "react";
import "./App.css";

function App() {
  const [userData, setUserData] = useState(null);

  return (
    <Background>
      <Navbar />
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Description />
              <UserInput onRegister={(user) => setUserData(user)} />
              <CommentCards />
              <Cards userData={userData} />
            </>
          }
        />

        <Route path="/history" element={<CardHistory />} />
      </Routes>
      <Footer />
      <ScrollToTopButton />
    </Background>
  );
}

export default App;
