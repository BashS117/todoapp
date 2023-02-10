import DtDark from "../assets/DtDark.jpg";
import bgMDark from "../assets/bgMDark.jpg"
import bgMLight from "../assets/bgMLight.jpg"
import DtLight from "../assets/DtLight.jpg"

import iconsun from "../assets/iconsun.svg";
import iconMoon from "../assets/iconmoon.svg"
import React, { useEffect } from 'react';
import './Header.css';
import { TodoContext } from "../todoContext";

const Header = () => {
  const {setDarkMode,darkMode}= React.useContext(TodoContext);

  useEffect(()=>{
    document.body.className = "" |darkMode? "BgdarkMode":"BglightMode";
  }, [darkMode])

  useEffect(()=>{
    const form = document.querySelector('form');
    form.className =darkMode? "FormdarkMode CreateTodo":"FormlightMode CreateTodo";
  }, [darkMode])

    return (
        <header className="header">
      <div className="header-background">
        <picture>
          <source media="(min-width: 376px)" srcSet={darkMode?DtDark:DtLight }/>
          <img  src={darkMode?bgMDark:bgMLight} alt="Header background with gradient" />
        </picture>
      </div>
      <div className="header-title">
        <h1>TODO</h1>
        <div 
        onClick={setDarkMode}
        href="/">
          <img
            src={darkMode ? iconsun : iconMoon }
            alt="Moon button to turn on dark mode"
            title="Turn on dark mode"
          />
        </div>
      </div>
    </header>
    );
}

export {Header};

