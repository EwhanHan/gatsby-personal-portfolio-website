import React from 'react';
import StyleWrapper from '../stylewrapper/stylewrapper';
import {
  contact as CONTACT_CONSTANT,
  socials,
} from '../../assets/constants/constants';
import Highlight from '../highlighter/highlighter';
import { StaticImage } from 'gatsby-plugin-image';

const Contact = () => {
  return (
    <StyleWrapper>
      <div id='contact' className='contact'>
        <h3>{CONTACT_CONSTANT.title}</h3>
        <p>{CONTACT_CONSTANT.description}</p>
        <div className='contact__profile'>
          <StaticImage
            className='contact-pic'
            src='../../assets/images/profile-pic.jpeg'
            placeholder='blurred'
            alt='cool-guy'
          />
          <div className='profile__details'>
            <strong>{CONTACT_CONSTANT.profile.name}</strong>
            <br />
            <a href={`mailto:${CONTACT_CONSTANT.profile.email}`}>
              <Highlight type='primary'>
                {CONTACT_CONSTANT.profile.email}
              </Highlight>
            </a>
          </div>
        </div>
        <div className='social-links__contact'>
          {socials.map((social, index) => {
            if (index === socials.length - 1) return;
            return (
              <a
                key={index}
                className='social-link__contact'
                href={social.link}
                target='_blank'
                rel='noopener noreferrer'
              >
                {social.icon}
                {social.name}
              </a>
            );
          })}
        </div>
      </div>
    </StyleWrapper>
  );
};

export default Contact;
