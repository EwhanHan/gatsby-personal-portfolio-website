import * as React from 'react';
import { Link } from 'gatsby';

const navlinks = () => {
  return (
    <div className='nav__links'>
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
  );
};

export default navlinks;
