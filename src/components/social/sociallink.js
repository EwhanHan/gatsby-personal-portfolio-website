import * as React from 'react';

const socialLink = props => {
  let socials =
    props.socials.length !== 0 ? (
      <div className='social-links'>
        {props.socials.map((social, index) => {
          return (
            <a
              key={index}
              className='social-link'
              href={social.link}
              target='_blank'
              rel='noopener noreferrer'
            >
              {social.icon}
            </a>
          );
        })}
      </div>
    ) : null;
  return socials;
};

export default socialLink;
