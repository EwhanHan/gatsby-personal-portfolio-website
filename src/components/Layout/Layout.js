import React, { useState } from 'react';
import Navbar from '../navbar/navbar';
import Footer from '../footer/footer';
import '../../assets/scss/main.scss';
import { UserContext } from '../../utils/context/usercontext';

const Layout = props => {
  const [isSidebarActive, setIsSidebarActive] = useState(false);

  const showSidebar = () => {
    setIsSidebarActive(true);
  };

  const hideSidebar = () => {
    setIsSidebarActive(false);
  };

  return (
    <UserContext.Provider
      value={{
        isSidebarActive: isSidebarActive,
        showSidebar: showSidebar,
        hideSidebar: hideSidebar,
      }}
    >
      <div className='layout'>
        <Navbar />
        <main className='main__content'>{props.children}</main>
        <Footer />
      </div>
    </UserContext.Provider>
  );
};

export default Layout;
