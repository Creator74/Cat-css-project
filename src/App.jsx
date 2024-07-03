import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { useEffect, useRef } from "react";
import meowSound from "./assets/meow-Sound.mp3";
import headerImage from "./assets/header-cat-image.jpg";
import nyanCatImage from "./assets/nyan-cat-image.jpg";
import nyanCatSound from "./assets/nyan-cat-sound.mp3";
import persianCatImage from "./assets/persian-cat-image.jpg";
import moniCatImage from "./assets/moni-cat-image.jpeg";

function Header({ setHeaderHeight }) {
  // const headerRef = useRef(null);

  // useEffect(() => {
  //   const updateHeaderHeight = () => {
  //     if (headerRef.current) {
  //       const headerHeight = headerRef.current.clientHeight;
  //       console.log("Header height:", headerHeight);
  //       setHeaderHeight(headerHeight);
  //     }
  //   };

  //   updateHeaderHeight();
  //   window.addEventListener("resize", updateHeaderHeight);
  //   return () => window.removeEventListener("resize", updateHeaderHeight);
  // }, [setHeaderHeight]);

  return (
    <div className="header-container">
      <img src={headerImage} alt="Header-cat-image" className="header-image" />
      <div className="header-text-top">
        <h1>Listen to the Cats</h1>
        <p>Tap on speaker icon to play</p>
      </div>
      <div className="header-text-bottom">
        <p>Powered by My Dying Computer</p>
      </div>
    </div>
  );
}

function Chicklet() {
  const catImages = [
    headerImage,
    headerImage,
    headerImage,
    moniCatImage,
    persianCatImage,
    nyanCatImage,
  ];

  const catSounds = [
    meowSound,
    meowSound,
    meowSound,
    meowSound,
    meowSound,
    nyanCatSound,
  ];

  const catLinks = [
    "https://www.thesprucepets.com/all-about-tabby-cats-552489",
    "https://www.thesprucepets.com/all-about-tabby-cats-552489",
    "https://www.thesprucepets.com/all-about-tabby-cats-552489",
    "https://www.thesprucepets.com/all-about-tabby-cats-552489",
    "https://www.thesprucepets.com/all-about-tabby-cats-552489",
    "https://www.nyan.cat/",
  ];

  const [playingAudios, setPlayingAudios] = useState(Array(6).fill(null));
  function playMeowSound(index) {
    
    const currentAudio = playingAudios[index];

    if (currentAudio) {
      currentAudio.pause();
      currentAudio.currentTime = 0;
    }

    const audio = new Audio(catSounds[index]);
    audio.play();

    const newPlayingAudios = [...playingAudios];
    newPlayingAudios[index] = audio;
    setPlayingAudios(newPlayingAudios);
  }

  function handleRedirect (index) {
    const link = catLinks[index]
    window.open(link, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="content-container">
      <div className="content">
        {catImages.map((image, index) => (
          <div className="box" key={index}>
            <img src={image} alt={`Cat ${index + 1}`} />
            <p>Cat: Breed</p>
            <div className="button-container">
              <button className="order-btn" onClick={() => handleRedirect(index)}>
                Know More
              </button>
              <button
                className="speaker-btn"
                onClick={() => playMeowSound(index)}
              >
                🔊
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function MyApp() {
  // const [headerHeight, setHeaderHeight] = useState(0);

  // useEffect(() => {
  //   document.documentElement.style.setProperty(
  //     "--header-height",
  //     `${headerHeight}px`
  //   );
  // }, [headerHeight]);

  return (
    <div>
      {/* <Header setHeaderHeight={setHeaderHeight} /> */}
      <Header />
      <div className="app">
        <Chicklet />
      </div>
    </div>
  );
}
