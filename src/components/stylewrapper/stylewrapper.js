import React from 'react';

const stylewrapper = props => {
  return (
    <section className='hero'>
      <article>
        <div className='hero__content'>{props.children}</div>
      </article>
    </section>
  );
};

export default stylewrapper;
