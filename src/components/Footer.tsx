import React, { useState } from 'react';
import { string, z }  from "zod";
import '../styles/Footer.css';
// import linkedin from '../res/linkedin.png';
// import github from '../res/github.png';

const schema = z.object({
  name: string().min(1, { message: 'Name is required!' }),
  email: string().email(),
  message: string().min(1, { message: 'Message is required!' }),
});

const Footer: React.FC = () => {
  return (
    <footer className='foot'>
      <hr color="hr-style" />
      <div className='line'>
        <div className='left'>
          <p>LET'S BUILD SOMETHING IMPACTFUL.</p>
          <p>Resume is available upon request.</p>
          <div className="links-container">
            <a href="mailto:rosannezhu@gmail.com">
              Email</a> <br/>
            <a href="https://www.linkedin.com/in/rosanne-zhu" target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a> <br/>
            <a href="https://github.com/roskzhu" target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
          </div>  
        </div>
      </div>
    </footer>
  )
}

export default Footer;
