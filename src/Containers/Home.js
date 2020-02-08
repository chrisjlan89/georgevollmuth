import React, { useState, useEffect } from "react";
import logo from "../assets/kiY0cf8W_400x400.jpeg";
import themesong from "../assets/Star Wars Theme Song By John Williams.mp3";
import styled, { keyframes } from "styled-components";
import { Link } from "react-router-dom";

const ButtonStyles = styled.button`
  margin-left: 20px;
  margin-top: 20px;
  padding: 10px;
  border-radius: 5px;
  font-size: 12px;
`;

const EnterButtonStyles = styled.button`
  padding: 10px;
  border-radius: 6px;
  font-size: 20vh;
  letter-spacing: 4px;
  text-decoration: none;
  transition: 3s;

  a {
    text-decoration: none;
    color: black;

    :hover {
      color: white;
    }
  }
  :hover {
    border: solid 5px white;
    background: black;
    color: white;
    text-decoration: none;

    transform: scale(2);
  }
`;
const slowlygrow = keyframes`

  0% {
     transform : scale(0)
  }
  1% {
     transform : scale(.04)
  }
  2% {
     transform : scale(.08)
  }
  3% {
     transform : scale(.12)
  }
  4% {
     transform : scale(.16)
  }
  
     5% {
     transform : scale(.2)
  }

  6% {
      transform : scale(.24)
  }

  7% {
     transform : scale(.3)
  }
  8% {
     transform : scale(.34)
  }
  9% {
     transform : scale(.38)
  }

    10% {
      transform : scale(.44)
  }
11% {
     transform : scale(.5)
  }

    12% {
      transform : scale(.4)
  }
  13% {
     transform : scale(.3)
  }

    14% {
      transform : scale(.34)
  }
  15% {
     transform : scale(.4)
  }

    16% {
      transform : scale(.44)
  }

`;
const StyledApp = styled.div`
  .App {
    text-align: center;
  }

  .App-logo {
    height: 40vmin;
    pointer-events: none;
  }

  @media (prefers-reduced-motion: no-preference) {
    .App-logo {
      animation: ${slowlygrow} infinite 30s linear;
    }
  }

  .App-header {
    background-color: #282c34;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: calc(10px + 2vmin);
    color: white;
  }

  .App-link {
    color: #61dafb;
  }

  @keyframes App-logo-spin {
    from {
      transform: rotate(0deg) scale(0);
    }

    to {
      transform: rotate(360deg) scale(1.6);
    }
  }
`;

const StarWarsStyles = styled.div`
  width: 100%;
  height: 100vh;
  background: #000;
  overflow: hidden;

  .fade {
    position: relative;
    width: 100%;
    min-height: 60vh;
    top: -25px;
    background-image: linear-gradient(0deg, transparent, black 75%);
    z-index: 1;
  }

  .star-wars {
    display: flex;
    justify-content: center;
    position: relative;
    height: 800px;
    color: #feda4a;
    font-family: "Pathway Gothic One", sans-serif;
    font-size: 500%;
    font-weight: 600;
    letter-spacing: 6px;
    line-height: 150%;
    perspective: 400px;
    text-align: justify;
  }

  .crawl {
    position: relative;
    top: 9999px;
    transform-origin: 50% 100%;
    animation: crawl 60s linear;
  }

  .crawl > .title {
    font-size: 90%;
    text-align: center;
  }

  .crawl > .title h1 {
    margin: 0 0 100px;
    text-transform: uppercase;
  }

  @keyframes crawl {
    0% {
      top: 0;
      transform: rotateX(20deg) translateZ(0);
    }
    100% {
      top: -6000px;
      transform: rotateX(25deg) translateZ(-2500px);
    }
  }

  .enter {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }
`;

export const Home = () => {
  const [animationDone, setAnimationDone] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setAnimationDone(true);
    }, 53000);
  }, []);

  const onSkip = () => {
    clearTimeout();

    setAnimationDone(true);
  };
  return !animationDone ? (
    <StarWarsStyles>
      <ButtonStyles onClick={onSkip}>Skip</ButtonStyles>
      <audio autoPlay={!animationDone}>
        <source src={themesong} type="audio/ogg" />
      </audio>
      <section class="star-wars">
        <div class="crawl">
          <div class="title">
            <p>Episode IV</p>
            <h1>A New Hope</h1>
            <img src={logo} className="App-logo" alt="logo" />
          </div>

          <p>
            It is a period of civil war. Rebel spaceships, striking from a
            hidden base, have won their first victory against the evil Galactic
            Empire.
          </p>
          <p>
            During the battle, Rebel spies managed to steal secret plans to the
            Empire’s ultimate weapon, the DEATH STAR, an armored space station
            with enough power to destroy an entire planet.
          </p>
          <p>
            Pursued by the Empire’s sinister agents, Princess Leia races home
            aboard her starship, custodian of the stolen plans that can save her
            people and restore freedom to the galaxy…
          </p>
        </div>
      </section>
    </StarWarsStyles>
  ) : (
    <StarWarsStyles>
      <div className="enter">
        <EnterButtonStyles>
          <Link to="/enter"> Enter</Link>
        </EnterButtonStyles>
      </div>
    </StarWarsStyles>
  );
};

export default Home;
