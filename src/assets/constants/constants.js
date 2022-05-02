import * as React from 'react';
import {
  FaLinkedinIn,
  FaInstagram,
  FaMailBulk,
  FaGithub,
} from 'react-icons/fa';
import Highlight from '../../components/highlighter/highlighter';

const navDetails = [
  {
    id: 'about',
    text: 'About Me',
  },
  {
    id: 'resume',
    text: 'Resume',
  },
  {
    id: 'contact',
    text: 'Contact',
  },
];

const hero = {
  title: '👋 Hello!',
  subtitle: "I'm Ewhan Han",
  description:
    '📍 and new Software Engineering graduate based in London, Ontario!',
};

const socials = [
  {
    link: 'https://www.linkedin.com/in/ewhanhan/',
    icon: <FaLinkedinIn />,
    name: 'LinkedIn',
  },
  {
    link: 'https://github.com/EwhanHan',
    icon: <FaGithub />,
    name: 'GitHub',
  },
  {
    link: 'https://instagram.com/bichon_rufus',
    icon: <FaInstagram />,
    name: 'Instagram',
  },
  {
    link: 'mailto:ewhan.han@gmail.com',
    icon: <FaMailBulk />,
    name: 'Email',
  },
];

const about = {
  title: '😊 About Me',
  description: (
    <>
      <p>
        I am currently a student at Western University and set to graduate with
        a Bachelor's of Engineering Science in{' '}
        <Highlight type='primary'>Software Engineering</Highlight>. I am also
        finishing my long-term internship with IBM and now{' '}
        <Highlight type='primary'>actively seeking a full-time</Highlight>{' '}
        position to start my career!
      </p>
      <p>
        In my free time I am spending time with my new puppy, working out, or
        tinkering with keyboards.
      </p>
    </>
  ),
};

const contact = {
  title: '📞 Contact Me',
  description: `Thank you for visiting my website :) this is a continuing work in
  progress! Please feel free to reach out to me at anytime with the
  links provided below!`,
  profile: {
    name: 'Ewhan Han',
    email: 'ewhan.han@gmail.com',
  },
};

export { navDetails, hero, socials, about, contact };
