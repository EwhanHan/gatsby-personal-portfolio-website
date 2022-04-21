import * as React from 'react';
import { motion } from 'framer-motion';

const hero = () => {
  return (
    <div className='hero'>
      <div className='hero__content'>
        <motion.div
          animate={{ opacity: 1, x: 25 }}
          initial={{ opacity: 0 }}
          transition={{ duration: 1 }}
        >
          <div className='title'>
            <h1>Hello!</h1>
            <h2>I'm Ewhan Han</h2>
            <h3>
              A <span className='text__highlight'>Frontend Developer</span>
            </h3>
          </div>
          <div className='description'>
            <p>New Software Engineering graduate!</p>
          </div>
        </motion.div>
        <div className='social-links'></div>
      </div>
    </div>
  );
};

export default hero;
