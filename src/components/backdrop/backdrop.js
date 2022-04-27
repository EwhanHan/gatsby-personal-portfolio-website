import * as React from 'react';

const backdrop = ({ children, isBackdropClicked }) => {
  return (
    <div className='backdrop' onClick={isBackdropClicked}>
      {children}
    </div>
  );
};

export default backdrop;
