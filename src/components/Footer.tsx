import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import { Link as ScrollLink } from 'react-scroll';
import FadeIn from "./FadeIn";
import '../styles/Footer.css';

const Footer: React.FC = () => {

  return (
    <footer style={{display: 'flex', justifyContent:'space-between'}}>
      <div style={{fontWeight:'bold'}}>
        All rights reserved. ©
      </div>
      
      Built and designed by Rosanne Zhu. 
      
      <div style={{fontWeight:'bold'}}>
        BACK TO THE TOP ^
      </div>
    </footer>
  );
};

export default Footer