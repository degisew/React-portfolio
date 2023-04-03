import React, { useState, useEffect } from 'react';
import NavBar from './Components/Navbar/NavBar';
import AboutMe from './Components/Pages/About/AboutMe';
import ContactMe from './Components/Pages/Contact/ContactMe';
import Home from './Components/Pages/Home/Home';
import Projects from './Components/Pages/Projects/Projects';
import Skills from './Components/Pages/Skills/Skills';
import ScrollTopBtn from './Components/Scrolltop/ScrollTopBtn';

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

  useEffect(() => {
    const mybutton = document.getElementById('myBtn');
    function scrollFunction() {
      if (
        document.body.scrollTop > 20 || document.documentElement.scrollTop > 20
      ) {
        mybutton.style.display = 'block';
      } else {
        mybutton.style.display = 'none';
      }
    }
    // When the user scrolls down 20px from the top of the document, show the button
    window.onscroll = () => {
      scrollFunction();
    };
  });
  // When the user clicks on the button, scroll to the top of the document
  const topFunction = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  };
  return (
    <main>
      <NavBar openMenuHandler={openMenuHandler} />
      <Home menu={showMenu} closeMenuHandler={closeMenuHandler} />
      <AboutMe />
      <Projects />
      <Skills />
      <ContactMe />
      <ScrollTopBtn topFunction={topFunction} />
    </main>
  );
}

export default App;
