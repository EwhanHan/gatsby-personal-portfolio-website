import * as React from 'react';
import {
  FaLinkedinIn,
  FaInstagram,
  FaMailBulk,
  FaGithub,
} from 'react-icons/fa';

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
    id: 'projects',
    text: 'Projects',
  },
  {
    id: 'contact',
    text: 'Contact',
  },
];

const hero = {
  title: 'Hello!',
  subtitle: "I'm Ewhan Han",
  description: 'and new Software Engineering graduate based in London, Ontario!',
};

const socials = [
  {
    link: 'https://www.linkedin.com/in/ewhanhan/',
    icon: <FaLinkedinIn />,
  },
  {
    link: 'https://github.com/EwhanHan',
    icon: <FaGithub />,
  },
  {
    link: 'https://instagram.com/bichon_rufus',
    icon: <FaInstagram />,
  },
  {
    link: 'mailto:ewhan.han@gmail.com',
    icon: <FaMailBulk />,
  },
];

export { navDetails, hero, socials };
