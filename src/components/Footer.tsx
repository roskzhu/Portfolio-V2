import React from 'react';
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