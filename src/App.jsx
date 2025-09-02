import { Routes, Route } from "react-router-dom";
import Background from "./Components/background";
import Navbar from "./Components/navbar";
import Header from "./Components/header";
import Description from "./Components/description";
import Cards from "./Components/cards";
import CommentCards from "./Components/CommentCards";
import UserInput from "./Components/user";
import Footer from "./Components/footer";
import CardHistory from "./Components/cardHistory";
import ScrollToTopButton from "./Components/scrollToTopButton";
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
