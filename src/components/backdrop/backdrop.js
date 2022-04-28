import * as React from 'react';

const Backdrop = ({ children, isBackdropClicked }) => {
  return (
    <div className='backdrop' onClick={isBackdropClicked}>
      {children}
    </div>
  );
};

export default Backdrop;
