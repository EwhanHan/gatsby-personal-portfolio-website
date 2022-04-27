import * as React from 'react';
import closeButton from '../../assets/images/close-btn.svg';
import { Link } from 'gatsby';
import Backdrop from '../backdrop/backdrop';

import { navDetails } from '../../assets/constants/constants';

const sidebar = props => {
  return (
    <>
      <Backdrop isBackdropClicked={props.isBackdropClicked}>
        <div className='sidebar__nav__links'>
          <button className='close__btn' onClick={props.toggleSidebar}>
            <img src={closeButton} alt='close' />
          </button>
          {navDetails.map((nav, index) => {
            return (
              <Link className='nav__link' to={`#${nav.id}`} key={index}>
                {nav.text}
              </Link>
            );
          })}
        </div>
      </Backdrop>
    </>
  );
};

export default sidebar;
