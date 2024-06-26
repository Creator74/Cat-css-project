import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { useEffect, useRef } from 'react';
import meowSound from "./assets/meow-Sound.mp3"
import headerImage from "./assets/header-cat-image.jpg";

function Header() {
  const headerRef = useRef(null);

  useEffect(() => {
    const updateMarginTop = () => {
      if (headerRef.current) {
        const headerHeight = headerRef.current.clientHeight;
        document.documentElement.style.setProperty('--header-height', `${headerHeight}px`);
      }
    };

    updateMarginTop();
    window.addEventListener('resize', updateMarginTop);
    return () => window.removeEventListener('resize', updateMarginTop);
  }, []);

  return (
    <div className="header-container" ref={headerRef}>
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
  const catImages = [headerImage, headerImage, headerImage, headerImage, headerImage, headerImage];
  
  const playMeowSound = () => {
    const audio = new Audio(meowSound);
    audio.play();
  };

  return (
    <div className="content">
      {catImages.map((image, index) => (
        <div className="box" key={index}>
          <img src={image} alt={`Cat ${index + 1}`} />
          <p>Cat: Breed</p>
          <div className="button-container">
            <button className="order-btn">Order Now</button>
            <button className="speaker-btn" onClick={playMeowSound}>🔊</button>
          </div>
        </div>
      ))}
    </div>
  );
}


export default function MyApp() {
  return (
    <div>
      <Header />
      <div className="app">
        <Chicklet />
      </div>
    </div>
  );
}