import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import { Link as ScrollLink } from 'react-scroll';
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
    <div className={`nav-container ${isTop ? 'transparent' : 'white'}`}>
      <ContainerIcon>
      <FadeIn delay={`200ms`}>
      <div className="home-nav">
        <ul id="icon-navigation" className={`icon-navigation ${visible ? 'visible' : ''}`}>          
            <ScrollLink
            activeClass="active" to="home"
            spy={true} smooth={true} offset={-100}>
              rz
            </ScrollLink>
          </ul>
        </div>
        </FadeIn>
      </ContainerIcon>
      <ContainerLeft>
      <div>
      <FadeIn delay={`300ms`}>      
        <div className="left-nav">
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
    <div style={{backdropFilter:'blur(0.1rem)'}}>
      <FadeIn delay={`400ms`}>
      <div className="right-nav">
          <ul id="primary-navigation" className={`primary-navigation ${visible ? 'visible' : ''}`}>
          <li>
            <ScrollLink
              activeClass="active" to="about"
              spy={true} smooth={true} offset={-100}>
              <p>
              About
            </p>
            </ScrollLink>
          </li>
          <li style={{width: '200px'}}>
            <ScrollLink
              activeClass="active" to="projects"
              spy={true} smooth={true} offset={-100}>
              <p>
              Software Creations
            </p>
            </ScrollLink>
          </li>
          <li style={{width: '200px'}}>
            <ScrollLink
              activeClass="active" to="contact"
              spy={true} smooth={true}>
                <p style={{backgroundColor:'#1E1E1E', color:'white', borderRadius:'30px', width: '60%', fontWeight:'200'}}>
                  Let's Talk
                </p>
            </ScrollLink>
          </li>
          </ul>
        </div>
        <Filter className="flt_svg hide" xmlns="http://www.w3.org/2000/svg">
          <defs>6
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
    </div>
  );
};

const ContainerIcon = styled.div`
  width: 3vw;
  height: 40px;
`;

const ContainerLeft = styled.div`
  width: 30vw;
  height: 40px;
`;

const ContainerRight = styled.div`
  width: 57vw;
  height: 40px;
  margin-right: -50px;
`;

const Filter = styled.svg`
  visibility: hidden;
`

export default NavBar