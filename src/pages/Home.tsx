import React, { useEffect, useState } from 'react';
import FadeIn from "../components/FadeIn";
import styled from '@emotion/styled';
import '../styles/Home.css';
import { Link as ScrollLink } from 'react-scroll';

const Home: React.FC = () => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    const updateScreenWidth = () => {
      setScreenWidth(window.innerWidth);
    };

    updateScreenWidth();

    window.addEventListener('resize', updateScreenWidth);

    return () => {
      window.removeEventListener('resize', updateScreenWidth);
    };
  }, []);

  const isMobile = screenWidth <= 500; // Adjust the breakpoint as needed

  return (
    <div id="home" className="header-container">      
      <div className="text-container">
      {isMobile ? (
          <h1>          
            <FadeIn delay={`1000ms`}>
              Rosanne Zhu is a software engineer
            </FadeIn>
          </h1>
        ) : (
          <>
            <h1>          
              <FadeIn delay={`1000ms`}>
                Rosanne Zhu is a
              </FadeIn>
            </h1>
            <h1>          
              <FadeIn delay={`1100ms`}>
                software engineer
              </FadeIn>
            </h1>
          </>
        )}
        <h2>
          <FadeIn delay={`1500ms`}>
          developing innovative solutions that elevate, <br/> simplify and transform digital landscapes.
          </FadeIn>
        </h2>
        <FadeIn delay={`2300ms`}>
          <div>
          <div className="desc-container">
            <div className="grid-container">
              <h2>currently</h2>
              <p>a Software Engineer Intern <br/>  @ 
              <a href="https://www.bmo.com/main/about-bmo/">
                <mark>
                  BMO Financial Group
                </mark>
                </a>
              </p>
            </div>
            <div className="grid-container">
              <h2>studying</h2>
              <h4>Computer Science & Artificial Intelligence <br/>  @ 
                <a href="https://uwaterloo.ca/">
                <mark>
                  the University of Waterloo
                  </mark>
                </a>
              </h4>
            </div>
          </div>
          </div>
        </FadeIn>
        <ScrollContainer>
          <p style={{ marginLeft:'180px', paddingTop:'0px', color: '#9F9F9F',paddingRight:'10px' }}
          onMouseOver={(e) => e.currentTarget.style.color = '#DDDDDD'}
          onMouseOut={(e) => e.currentTarget.style.color = '#9F9F9F'}>
          </p>
          <div>
          <FadeIn delay={`2700ms`}>
            <ScrollLink
            activeClass="active" to="about"
            spy={true} smooth={true} offset={-100}>
            <img src={"/assets/longarrow.svg"} 
              alt="long arrow"
              style={{paddingLeft:'10%', cursor: 'pointer', transition: 'transform 0.3s' }} 
              width='8px'
              color='black'
              onMouseOver={(e) => e.currentTarget.style.transform = 'translateY(5px)'}
              onMouseOut={(e) => e.currentTarget.style.transform = 'translateY(0)'}
              />
            </ScrollLink>
          </FadeIn>
          </div>
        </ScrollContainer>
      </div>
    </div>
  );
};

const ScrollContainer = styled.div`
  width: 10px;
  padding-left: 50px;
  margin-top: 280px;
  margin-left: 700px;
  display: flex;
  flex-direction: row;
  position: absolute;
  z-index: 10;
  > p {
    z-index: 1;
    font-size: 13px;
    text-align: right;
    font-family: 'Rubik', sans-serif; /* Adding the Google Font 'Karla' */
    font-weight: 400;
    color: #9F9F9F;
    width: 70%;
    margin-top: 115px;
    margin-right: 0%;
    line-height: 1;
    font-style: italic; 
  }
  > p mark {
    background-color: #DAE2F5;
    color: blue;
    border-radius: 6px;
    padding: 0px 5px;
  }

  animation: pulse 8s linear infinite;

  @keyframes pulse {
    0% {
      opacity: 70%    
    }
    25% {
      opacity: 80%;
    }
    50% {
      opacity: 60%;
    }
    100% {
      opacity: 65%
    }
  }
`;

export default Home;
