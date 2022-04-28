import * as React from 'react';
import StyleWrapper from '../stylewrapper/stylewrapper';
import ResumePDF from '../../assets/downloads/Ewhan_Han_Resume_New_Grad_2022_v2.pdf';
import { FaDownload } from 'react-icons/fa';

const Resume = () => {
  return (
    <StyleWrapper>
      <div id='resume' className='resume'>
        <h3>📃 View my resume</h3>
        <a href={ResumePDF} download className='resume__download__btn'>
          <FaDownload /> Download
        </a>
      </div>
    </StyleWrapper>
  );
};

export default Resume;
