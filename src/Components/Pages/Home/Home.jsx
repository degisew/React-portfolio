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
          <a href="#skills" onClick={closeMenuHandlerFun}>
            {' '}
            Skills
          </a>
          <a href="#projects" onClick={closeMenuHandlerFun}>
            Projects
          </a>
          <a href="#contact" onClick={closeMenuHandlerFun}>
            Contact
          </a>
          <a
            href="https://drive.google.com/file/d/1VubHmPHIVxRea8TNNWRx6aTTUvnT-pX4/view?usp=sharing"
            id={selectors.resume}
            target="_blank"
            rel="noopener noreferrer"
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
            A passionate and versatile Software developer dedicated to crafting 
            meaningful and efficient solutions. Pair-programming and remote
            work aficionado. Skilled in problem solving and I use code as a tool to write the solution.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Home;
