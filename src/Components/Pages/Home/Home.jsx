/* eslint-disable */
import React from 'react';
import selectors from './Home.module.css';

const Home = ({ closeMenuHandler, menu }) => {
  const closeMenuHandlerFun = (e) => {
    closeMenuHandler(e);
  };
  let mobileMenu;
  if (menu) {
    mobileMenu = (
      <div className={selectors.mobileMenu}>
        <button type="button" onClick={closeMenuHandlerFun}>
          <span>X</span>
        </button>
        <div className={selectors.mobileMenuItems}>
          <a href="#about" onClick={closeMenuHandlerFun}>
            About Me
          </a>
          <a href="#experience" onClick={closeMenuHandlerFun}>
            {' '}
            Experience
          </a>
          <a href="#projects" onClick={closeMenuHandlerFun}>
            Projects
          </a>
          <a href="#contact" onClick={closeMenuHandlerFun}>
            Contact
          </a>
          <a
            href="https://docs.google.com/document/d/1TOY9uKGxlkVb5bK8gEZmcgrvAm5k2krAh1R-eowCYaU/edit?usp=sharing"
            id={selectors.resume}
          >
            Resume
          </a>
        </div>
      </div>
    );
  }
  return (
    <section id={selectors.home}>
      {mobileMenu}
      <div className={selectors.mainDiv}>
        <div className={selectors.hi}>
          <p>Hi, I&apos;m</p>
        </div>
        <div className={selectors.nameJobDiv}>
          <div className={selectors.name}>Degisew Mengist</div>
          <div className={selectors.job}>I build things for the web!</div>
        </div>
        <div className={selectors.description}>
          <p>
            I am a Front-end developer and open-source enthusiast with a love
            for clean code and accessible design. Pair-programming and remote
            work aficionado. Fluent in multiple languages, frameworks, and
            technologies, and capable of ramping up quickly and efficiently.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Home;
