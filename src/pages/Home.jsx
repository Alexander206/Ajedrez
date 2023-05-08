import React from "react";

// Componentes
import Header from "../components/Header";
import Footer from "../components/Footer";
import Player from "../components/Player";
import Game from "../components/Game";

// Estilos
import "../styles/pages/home.scss";

// Variables
import img1 from "../assets/characters/characters_1.png";
import img2 from "../assets/characters/characters_2.png";

const Home = () => {
  return (
    <>
      <Header />
      <main className="main_game">
        <Game />

        <section className="players">
          <Player name="Player 1" img={img1} time="2:00" />

          <Player name="Player 2" img={img2} time="2:00" />
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Home;
