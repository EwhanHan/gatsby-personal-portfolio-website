import React, { useState, useEffect } from 'react';
import Sidebar from '../sidebar/sidebar';
import Navlinks from './navlinks';
import { motion } from 'framer-motion';

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
        <Sidebar
          toggleSidebar={toggleSidebar}
          isBackdropClicked={isBackdropClicked}
        />
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
    <motion.header
      animate={{ opacity: 1, x: 0 }}
      initial={{ opacity: 0, x: '-100vw' }}
      transition={{ duration: 1 }}
    >
      <nav className='navbar'>{navigationComponent}</nav>
    </motion.header>
  );
};

export default Navbar;
