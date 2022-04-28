import * as React from 'react';
import { Link } from 'gatsby';
import { navDetails } from '../../assets/constants/constants';

const Navlinks = () => {
  return (
    <>
      <div className='navbar__logo'>
        <Link to='/'>eh.</Link>
      </div>
      <div className='nav__links'>
        {navDetails.map((nav, index) => {
          return (
            <Link className='nav__link' to={`#${nav.id}`} key={index}>
              {nav.text}
            </Link>
          );
        })}
      </div>
    </>
  );
};

export default Navlinks;
