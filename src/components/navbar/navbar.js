import React, { useState, useEffect } from 'react';
import { Link } from 'gatsby';

import Backdrop from '../backdrop/backdrop';
import closeButton from '../../assets/images/close-btn.6857a554.svg';
import Navlinks from './navlinks';

const Navbar = () => {
  const [activeSidebar, setActiveSidebar] = useState(false);
  const [windowWidth, setWindowWidth] = useState(0);

  const toggleSidebar = () => {
    setActiveSidebar(!activeSidebar);
  };

  const isBackdropClicked = () => {
    setActiveSidebar(false);
  };

  useEffect(() => {
    let handleWindowSizeChange;
    handleWindowSizeChange = () => setWindowWidth(window.innerWidth);
    // set initial innerWidth when component mounts
    setWindowWidth(window.innerWidth);
    // Add event listener to update windowWidth in state
    window.addEventListener('resize', handleWindowSizeChange);
    return () => window.removeEventListener('resize', handleWindowSizeChange);
  }, [windowWidth]);

  let navigationComponent;
  if (windowWidth < 1200) {
    if (activeSidebar) {
      navigationComponent = (
        <>
          <Backdrop isBackdropClicked={isBackdropClicked}>
            <div className='sidebar__nav__links'>
              <button className='close__btn' onClick={toggleSidebar}>
                <img src={closeButton} alt='close' />
              </button>
              <Link className='nav-link' to='#about'>
                About Me
              </Link>
              <Link className='nav-link' to='#about'>
                Resume
              </Link>
              <Link className='nav-link' to='#about'>
                Project
              </Link>
              <Link className='nav-link' to='#about'>
                Contact
              </Link>
            </div>
          </Backdrop>
        </>
      );
    }
    if (!activeSidebar) {
      navigationComponent = (
        <button className='sidebar__burger' onClick={toggleSidebar}>
          <div />
          <div />
          <div />
        </button>
      );
    }
  } else {
    navigationComponent = <Navlinks />;
  }

  return (
    <nav className='navbar'>
      <div className='navbar-logo'>
        <Link to='/'>EWHAN HAN.</Link>
      </div>
      {navigationComponent}
    </nav>
  );
};

export default Navbar;
