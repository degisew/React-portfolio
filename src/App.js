import React, { useState, useEffect } from 'react';
import NavBar from './Components/Navbar/NavBar';
import AboutMe from './Components/Pages/About/AboutMe';
import ContactMe from './Components/Pages/Contact/ContactMe';
import Home from './Components/Pages/Home/Home';
import Projects from './Components/Pages/Projects/Projects';
import Skills from './Components/Pages/Skills/Skills';

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
  function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }
  return (
    <main>
      <NavBar openMenuHandler={openMenuHandler} />
      <Home menu={showMenu} closeMenuHandler={closeMenuHandler} />
      <AboutMe />
      <Projects />
      <Skills />
      <ContactMe />
      <div className="backToTop">
        <button
          aria-label="Back to top"
          type="button"
          id="myBtn"
          onClick={topFunction}
        >
          <svg
            stroke="currentColor"
            fill="#ffffff"
            strokeWidth="0"
            viewBox="0 0 512 512"
            className="jss38"
            height="4em"
            width="4em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M256 464c114.9 0 208-93.1 208-208S370.9 48 256 48 48 141.1 48 256s93.1 208 208 208zm0-244.5l-81.1 81.9c-7.5 7.5-19.8 7.5-27.3 0s-7.5-19.8 0-27.3l95.7-95.4c7.3-7.3 19.1-7.5 26.6-.6l94.3 94c3.8 3.8 5.7 8.7 5.7 13.7 0 4.9-1.9 9.9-5.6 13.6-7.5 7.5-19.7 7.6-27.3 0l-81-79.9z" />
          </svg>
        </button>
      </div>
    </main>
  );
}

export default App;
