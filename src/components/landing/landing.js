import * as React from 'react';
import {
  hero as HERO_CONSTANTS,
  socials,
} from '../../assets/constants/constants';
import StyleWrapper from '../stylewrapper/stylewrapper';
import SocialLink from '../social/sociallink';
import Highlight from '../highlighter/highlighter';

const landing = () => {
  return (
    <StyleWrapper>
      <div className='landing'>
        <div className='title'>
          <h1>{HERO_CONSTANTS.title}</h1>
          <h2>{HERO_CONSTANTS.subtitle}</h2>
          <h3>
            A <Highlight type='secondary'>Frontend Developer</Highlight>
          </h3>
          <div className='description'>
            <p>{HERO_CONSTANTS.description}</p>
          </div>
        </div>
        <SocialLink socials={socials} />
      </div>
    </StyleWrapper>
  );
};

export default landing;
