import React from 'react';
import styled from '@emotion/styled';
import '../styles/Home.css';

const Home: React.FC = () => {
  return (
    <HeaderContainer id="home">
      <TextContainer>
        <h1>Hi, I'm Rosanne.</h1>
        <GridContainer>
        <h2>currently</h2>
        <h3>studying</h3>
        <p>a SWE intern @ <mark>BMO Financial Group</mark></p>
        <h1>CS @ <mark>uWaterloo</mark></h1>
        </GridContainer>
      </TextContainer>
      <GradientCircle/>
    </HeaderContainer>
  );
};

const HeaderContainer = styled.main`
  position: relative;
  height: 100vh;
  overflow: hidden;
  display: flex;
`;

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  grid-template-rows: 1fr 1fr; /* Set grid template rows to create a 2x2 grid */
  gap: 20px; /* Adjust the gap as needed */
  grid-row-gap: 0; /* Remove the space between rows */
  margin-left: 0%;
  
  top: 300px;
  flex-direction: column;
  z-index: 10;
  > p {
    z-index: 1;
    font-size: 20px;
    text-align: left;
    font-family: 'Rubik', sans-serif; /* Adding the Google Font 'Karla' */
    font-weight: 400;
    color: black;
    width: 70%;
    margin-left: 33%;
    margin-top: 5px;
    margin-right: 100%;
  }
  > p mark {
    background-color: #DAE2F5;
    color: blue;
    border-radius: 5px;
    padding: 0px 5px;
    line-height: 1.3;
  }
  > h1 {
    z-index: 1;
    font-size: 20px;
    text-align: left;
    font-family: 'Rubik', sans-serif; /* Adding the Google Font 'Karla' */
    font-weight: 400;
    color: black;
    width: 70%;
    margin-left: 30%;
    margin-top: 5px;
    margin-right: 100%;
  }
  > h1 mark {
    background-color: #DAE2F5;
    color: blue;
    border-radius: 5px;
    padding: 0px 5px;
    line-height: 1.3;
  }
  > h2 {
    z-index: 1;
    font-size: 25px;
    text-align: left;
    font-family: 'Rubik', sans-serif; /* Adding the Google Font 'Karla' */
    font-weight: 600;
    font-style: italic;
    color: black;
    width: 70%;
    margin-left: 33%;
    margin-bottom: 0; /* Remove the spacing underneath the text */
    margin-right: 100%;
  }
  > h3 {
    z-index: 1;
    font-size: 25px;
    text-align: left;
    font-family: 'Rubik', sans-serif; /* Adding the Google Font 'Karla' */
    font-weight: 600;
    font-style: italic;
    color: black;
    width: 70%;
    margin-left: 30%;
    margin-bottom: 0; /* Remove the spacing underneath the text */
    margin-right: 100%;
  }
`;

const TextContainer = styled.div`
  display: flex;
  position: absolute;
  top: 250px;
  flex-direction: column;
  z-index: 10;
  > h1 {
    font-family: 'Karla', sans-serif; /* Adding the Google Font 'Karla' */
    font-size: 80px;
    font-weight: 400;
    text-align: left;
    color: black;
    width: 70vw;
    margin-top: 0px;
    margin-bottom: 0; /* Remove the spacing underneath the text */
    margin-left: 20%;
    margin-right: 10%;
    letter-spacing: 1px;
  }
`;

const GradientCircle = styled.div`
  width: 290px;
  height: 150px;
  transform: rotate(-0.167deg);
  flex-shrink: 0;
  border-radius: 316.616px;
  border: 1px solid #000;
  background: #FFE977;
  filter: blur(225px);
  margin-top: 25%;
  margin-left: 75%;
  margin-right: 10%;
  animation: pulsate 5s infinite; /* Add an animation with a name of 'pulsate', 2-second duration, and it will repeat infinitely */
  
  @keyframes pulsate {
    0% {
      transform: scale(0.95); /* Set the initial scale of the circle */
      filter: blur(200px); /* Apply the blur effect */
    }
    50% {
      transform: scale(1); /* Set the scale to 1 in the middle of the animation */
      filter: blur(150px); /* Decrease the blur effect */
      opacity: 0%;
    }
    100% {
      transform: scale(0.95); /* Return to the initial scale at the end of the animation */
      filter: blur(200px); /* Apply the blur effect again */
    }
  }
`;



export default Home;
