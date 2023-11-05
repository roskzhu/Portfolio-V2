import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import { Link as ScrollLink } from 'react-scroll';
import '../styles/Navbar.css';

const Nav: React.FC = () => {
  const [visible, setVisible] = useState(false);
  const [isClicked] = useState(false);

  const toggleNav = () => {
    setVisible(!visible);
  };

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
    <div>
    <header className={`primary ${isTop ? 'transparent' : 'white'}`}>
      <button onClick={toggleNav} className="mobile-nav-toggle" aria-controls="primary-naviation" aria-expanded={visible}>
        <span className="sr-only">Menu</span>
      </button>

      <nav>
        <NavContainer isClicked={isClicked}>
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
        </NavContainer>
        
      </nav>
    </header>
    {/* <header className={`primary ${isTop ? 'transparent' : 'white'}`} style={{marginLeft:'850px'}}>
      <button onClick={toggleNav} className="mobile-nav-toggle" aria-controls="primary-naviation" aria-expanded={visible}>
        <span className="sr-only">Menu</span>
      </button>

      <nav>
        <NavContainer isClicked={isClicked}>
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
              activeClass="active" to="footer"
              spy={true} smooth={true}>
              <p>
              CONTACT
            </p>
            </ScrollLink>
          </li>
        </ul>
        </NavContainer>
        
      </nav>
    </header> */}
    </div>
  );
};


interface NavContainerProps {
  isClicked: boolean;
}

const NavContainer = styled.div<NavContainerProps>`
  color: ${({ isClicked }) => (isClicked ? '#651FFF' : 'initial')};
  font-weight: ${({ isClicked }) => (isClicked ? 'bold' : 'initial')};
  width: 60vw;
  height: 70px;
  transition: background 0.5s;
  background-color: transparent;
  margin-left: 0%;
  -moz-background-clip: text;
  -moz-text-fill-color: transparent;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  .link {
    text-decoration: bold;
  }
  p {
    font-family: 'Rubik', 
    font-weight: 500;
    font-size: 16px;
    color: black;
    display: flex;
    align-items: left;
    justify-content: left;
    cursor: pointer;
    :hover {
      font-weight: bold;
      color: blue; 
    }
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 10px; /* Adjust the border-radius to make the edges rounded */
  }
`;


export default Nav;
