import React from 'react';

import Navbar from '../navbar/navbar';

import '../../assets/scss/main.scss';

const Layout = props => {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main className='main_content'>{props.children}</main>
    </>
  );
};

export default Layout;
