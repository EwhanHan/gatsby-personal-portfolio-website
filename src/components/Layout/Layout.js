import React from 'react';
import Navbar from '../navbar/navbar';
import Footer from '../footer/footer'
import '../../assets/scss/main.scss';

const Layout = props => {
  return (
    <div className='layout'>
      <Navbar />
      <main className='main__content'>{props.children}</main>
      <Footer/>
    </div>
  );
};

export default Layout;
