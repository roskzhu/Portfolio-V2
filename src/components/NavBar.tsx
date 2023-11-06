import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import { Link as ScrollLink } from 'react-scroll';
import EmailRoundedIcon from "@material-ui/icons/EmailRounded";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
import FadeIn from "./FadeIn";
import '../styles/Navbar.css';

const NavBar: React.FC = () => {
  const [visible] = useState(false);

  const [isTop, setIsTop] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const top = window.scrollY < 100;
      if (top !== isTop) {
        setIsTop(top);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isTop]);

  return (
    <NavContainer>
      <ContainerLeft>
      <div style={{backdropFilter:'blur(0.1rem)'}}>
      <FadeIn>
        <div className={`left-nav ${isTop ? 'transparent' : 'white'}`}>
        <ul id="primary-navigation" className={`primary-navigation ${visible ? 'visible' : ''}`}>
        <li>
            <ScrollLink
              activeClass="active" to="home"
              spy={true} smooth={true}>
              <p>
              HOME  
            </p>
            </ScrollLink>
          </li>
          <li>
            <ScrollLink
              activeClass="active" to="about"
              spy={true} smooth={true} offset={-130}>
              <p>
              ABOUT
            </p>
            </ScrollLink>
          </li>
          <li>
            <ScrollLink
              activeClass="active" to="experience"
              spy={true} smooth={true} offset={-130}>
              <p>
              WORK
            </p>
            </ScrollLink>
          </li>
          <li>
            <ScrollLink
              activeClass="active" to="footer"
              spy={true} smooth={true}>
              <p>
              CONTACT
            </p>
            </ScrollLink>
          </li>
          </ul>
        </div>
        <Filter className="flt_svg hide" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <filter id="flt_tag">
              <feGaussianBlur in="SourceGraphic" stdDeviation="8" result="blur" />  
              <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9" result="flt_tag" />
              <feComposite in="SourceGraphic" in2="flt_tag" operator="atop"/>
            </filter>
          </defs>
        </Filter>
      </FadeIn>
      </div>
    </ContainerLeft>
    <ContainerRight>
    <div style={{backdropFilter:'blur(0.1rem)', marginLeft:'15px'}}>
      <FadeIn delay={`300ms`}>
      <div className={`right-nav ${isTop ? 'transparent' : 'white'}`}>
          <a href="mailto:rosannezhu@gmail.com" style={{color:'#0F0F0F'}}>
            <EmailRoundedIcon style={{ fontSize: 25, marginRight: '45px', marginTop: '5px'  }}></EmailRoundedIcon>
          </a>
          <a href="https://github.com/roskzhu" style={{color:'#0F0F0F'}}>
            <GitHubIcon style={{ fontSize: 22, marginRight: '45px', marginTop: '5px'  }}></GitHubIcon>
          </a>
          <a href="https://www.linkedin.com/in/rosanne-zhu" style={{color:'#0F0F0F'}}>
            <LinkedInIcon style={{ fontSize: 27, marginTop: '5px' }}></LinkedInIcon>
          </a>
        </div>
        <Filter className="flt_svg hide" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <filter id="flt_tag">
              <feGaussianBlur in="SourceGraphic" stdDeviation="8" result="blur" />  
              <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9" result="flt_tag" />
              <feComposite in="SourceGraphic" in2="flt_tag" operator="atop"/>
            </filter>
          </defs>
        </Filter>
        </FadeIn>
        </div>
      </ContainerRight>
    </NavContainer>
  );
};

const NavContainer = styled.div`
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  margin-top: 30px;
  width: 100vw;
  z-index: 9999;
  .hide {
    display: none;
  }
`;

const ContainerRight = styled.div`
  width: 22vw;
  height: 40px;
`;

const ContainerLeft = styled.div`
  width: 63vw;
  height: 40px;
`;

const Filter = styled.svg`
  visibility: hidden;
`

export default NavBar