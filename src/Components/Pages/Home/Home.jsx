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
            {" "}
            Skills
          </a>
          <a href="#projects" onClick={closeMenuHandlerFun}>
            Projects
          </a>
          <a href="#contact" onClick={closeMenuHandlerFun}>
            Contact
          </a>
          <a
            href="https://drive.google.com/file/d/1LdPJDFw2CcpswCY0z-3T_xw8qWkC09W9/view?usp=sharing"
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
          <div className={selectors.job}>
            I build the backend that powers great products.
          </div>
        </div>
        <div className={selectors.description}>
          <p>
            I build backend systems mostly with Python, Django, and FastAPI. I'm
            focusing on code that’s clear, tested, well documented, and does
            what it’s supposed to. I enjoy working through real-world problems,
            thinking about how things fit together, and making sure the pieces
            don’t fall apart six months later. I like working remotely, thinking
            through systems, and building things that last.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Home;
