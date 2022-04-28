import * as React from 'react';
import StyleWrapper from '../stylewrapper/stylewrapper';
import { StaticImage } from 'gatsby-plugin-image';

const AboutMe = () => {
  return (
    <StyleWrapper>
      <div className='about' id='about'>
        <div className='about__heading'>
          <h3>😊 about me</h3>
          <StaticImage
            className='profile-pic'
            src='../../assets/images/profile-pic.jpeg'
            placeholder='blurred'
            alt='cool-guy'
          />
          <div className='about__description'>
            <p>
              I am currently a student at Western University and set to graduate
              with a Bachelor's of Engineering Science in{' '}
              <span className='text__highlight'>Software Engineering</span>. I
              am also finishing my long-term internship with IBM and now{' '}
              <span className='text__highlight'>
                actively seeking a full-time
              </span>{' '}
              position to start my career!
            </p>
            <p>
              In my free time I am spending time with my new puppy, working out,
              or tinkering with keyboards.
            </p>
          </div>
        </div>
      </div>
    </StyleWrapper>
  );
};

export default AboutMe;
