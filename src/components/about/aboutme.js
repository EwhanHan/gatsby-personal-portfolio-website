import * as React from 'react';
import StyleWrapper from '../stylewrapper/stylewrapper';
import { StaticImage } from 'gatsby-plugin-image';
import { about as ABOUT_CONSTANT } from '../../assets/constants/constants';

const AboutMe = () => {
  return (
    <StyleWrapper>
      <div className='about' id='about'>
        <div className='about__heading'>
          <h3>{ABOUT_CONSTANT.title}</h3>
          <StaticImage
            className='profile-pic'
            src='../../assets/images/profile-pic.jpeg'
            placeholder='blurred'
            alt='cool-guy'
          />
          <div className='about__description'>{ABOUT_CONSTANT.description}</div>
        </div>
      </div>
    </StyleWrapper>
  );
};

export default AboutMe;
