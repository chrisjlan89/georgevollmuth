import React, { useState, useEffect } from "react";
import logo from "../assets/kiY0cf8W_400x400.jpeg";
import sssh from "../assets/4322048679713255248.jpg";
import bg from "../assets/171872_star-wars-star-backgrounds.jpg";
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

const fadein = keyframes`
   0% {
      transform:  scale(0);
      opacity: 0
    }

    25% {
        transform:  scale(1.2);
      opacity: 1
    }

    50% {
        transform:  scale(1.4);
      opacity: 1
    }

    100% {
      transform:  scale(1);
      opacity: 1
    }

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
  background-image: url(${bg});
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
    animation: crawl 70s linear;
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

  .enter-final {
    animation: ${fadein} 6s linear;
  }

  .outro {
    display: flex;
    justify-content: center;
  }

  .shh-george {
    width: 30%;
    display: flex;
    align-self: center;
  }
`;

export const Home = () => {
  const [animationDone, setAnimationDone] = useState(false);
  const [fadeIn, setFadeIn] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setAnimationDone(true);
    }, 70000);
  }, []);

  useEffect(() => {
    if (animationDone) {
      setFadeIn(true);
    }
  }, [animationDone]);

  const onSkip = () => {
    clearTimeout();

    setAnimationDone(true);
  };

  const onReload = () => {
    clearTimeout();
    setAnimationDone(false);
  };
  return !animationDone ? (
    <StarWarsStyles>
      <ButtonStyles onClick={onSkip}>Skip</ButtonStyles>
      <audio autoPlay={!animationDone}>
        <source src={themesong} type="audio/ogg" />
      </audio>
      <section className="star-wars">
        <div className="crawl">
          <div className="title">
            <p>Episode IV</p>
            <h1>A New Costo Reset</h1>
            <img src={logo} className="App-logo" alt="logo" />
          </div>

          <p>
            It is a period of unrest for the youngish George Vollmuth he has
            exhausted himself beyond recovery but his manger expects him to
            build a SECTIONAL!
          </p>
          <p>
            The battle is long and taxing, but George prevails. With his manager
            on her heels, she gains further ground on George by having him move
            melons. Pushed to the brink of collapse, hope seems all but lost for
            our hero.
          </p>
          <p>
            Against all odds he emerges victorius yet battered. George jumps in
            his 2008 Ford Fusion to race home and escape the Evil Costco and
            deliver the car to EMMA and to regroup with CHARLIE who doesnt
            really like him very much anyway.
          </p>
          <p>
            Thanks to the efforts of the Rebels, George can have a fun night
            watching the Devils lose and play Fortnite or Apex. The long awaited
            Disney trip is now upon him as he tries to avoid the evil cosnt
          </p>
          <div className="outro">
            <img src={sssh} className="shh-george" alt="logo" />
          </div>
        </div>
      </section>
    </StarWarsStyles>
  ) : (
    <StarWarsStyles className={!fadeIn ? "d" : "enter-final"}>
      <div className="enter">
        <div className="enter-final">
          <img src={logo} />
        </div>
        <EnterButtonStyles>
          <Link to="/enter"> Enter</Link>
        </EnterButtonStyles>
        <ButtonStyles onClick={onReload}>Reload</ButtonStyles>
      </div>
    </StarWarsStyles>
  );
};

export default Home;
