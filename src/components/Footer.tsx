import React from 'react';
import '../styles/Footer.css';
import { Link as ScrollLink } from 'react-scroll';

const Footer: React.FC = () => {

  return (
    <footer style={{display: 'flex', justifyContent:'space-between'}}>
      <div style={{fontWeight:'bold'}}>
        All rights reserved. ©
      </div>
      
      Built and designed by Rosanne Zhu. 
      
      <div style={{fontWeight:'bold'}}>
        <ScrollLink
            activeClass="active" to="home"
            spy={true} smooth={true} offset={-100}>
        BACK TO THE TOP ^
            </ScrollLink>
      </div>
    </footer>
  );
};

export default Footer