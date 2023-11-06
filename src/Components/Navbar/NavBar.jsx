/* eslint-disable */
import React from 'react';
import { SlMenu } from 'react-icons/sl';
import selectors from './NavBar.module.css';

const NavBar = ({ openMenuHandler }) => {
  const openMenuHandlerFun = (e) => {
    openMenuHandler(e);
  };
  return (
    <>
      <header className={selectors.header}>
        <div className={selectors.logoContainer}>
          <a href="#home">
            <h1>Degisew</h1>
          </a>
        </div>

        <div className={selectors.navContainer}>
          <nav id={selectors.navBar}>
            <a href="#about">About Me</a>
            <a href="#projects">Projects</a>
            <a href="#skills"> Skills</a>
            <a href="#contact">Contact</a>
            <a
              href="https://drive.google.com/file/d/11kNacicOTkoS97xyJqYvcFLnlejGTZOM/view?usp=sharing"
              id={selectors.resume}
              target="_blank"
              rel="noopener noreferrer"
            >
              Resume
            </a>
          </nav>
        </div>
        <div className={selectors.menuBtnDiv}>
          <button type="button" className={selectors.MenuBtn} onClick={openMenuHandlerFun}>
            <SlMenu />
          </button>
        </div>
      </header>
    </>
  );
};

export default NavBar;
