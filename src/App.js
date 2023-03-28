import React, { useState, useEffect } from 'react';
import NavBar from './Components/Navbar/NavBar';
import AboutMe from './Components/Pages/About/AboutMe';
import ContactMe from './Components/Pages/Contact/ContactMe';
import Home from './Components/Pages/Home/Home';
import Projects from './Components/Pages/Projects/Projects';
import Skills from './Components/Pages/Skills/Skills';
// import Testimonal from "./Pages/Testimonals/Testimonal";

function App() {
  const [showMenu, setShowMenu] = useState(false);
  const openMenuHandler = (e) => {
    e.preventDefault();
    setShowMenu(!showMenu);
  };
  const closeMenuHandler = () => {
    setShowMenu(false);
  };

  useEffect(() => {
    if (showMenu) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'scroll';
    }
  }, [showMenu]);
  return (
    <main>
      <NavBar openMenuHandler={openMenuHandler} />
      <Home menu={showMenu} closeMenuHandler={closeMenuHandler} />
      <AboutMe />
      <Skills />
      <Projects />
      {/* <Testimonal /> */}
      <ContactMe />
    </main>
  );
}

export default App;
