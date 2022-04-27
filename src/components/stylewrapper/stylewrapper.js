import React from 'react';

const stylewrapper = props => {
  return (
    <section className='hero'>
      <div className='hero__content'>{props.children}</div>
    </section>
  );
};

export default stylewrapper;
