import React from 'react';
import styled from '@emotion/styled';
import '../styles/Home.css';

const Home: React.FC = () => {
  return (
    <HeaderContainer>
      <TextContainer>
        <h1>Hi, I'm Rosanne.</h1>
        <GridContainer>
        <h2>currently</h2>
        <h3>studying</h3>
        <p>a SWE intern @ BMO Financial Group</p>
        <h1>CS @ uWaterloo</h1>
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
    font-size: 24px;
    text-align: left;
    font-family: 'Rubik', sans-serif; /* Adding the Google Font 'Karla' */
    font-weight: 400;
    color: black;
    width: 70%;
    margin-left: 33%;
    margin-top: 15px;
    margin-right: 100%;
  }
  > h1 {
    z-index: 1;
    font-size: 24px;
    text-align: left;
    font-family: 'Rubik', sans-serif; /* Adding the Google Font 'Karla' */
    font-weight: 400;
    color: black;
    width: 70%;
    margin-left: 30%;
    margin-top: 15px;
    margin-right: 100%;
  }
  > h2 {
    z-index: 1;
    font-size: 30px;
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
    font-size: 30px;
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
  top: 210px;
  flex-direction: column;
  z-index: 10;
  > p {
    z-index: 1;
    font-size: 24px;
    text-align: left;
    font-family: 'Rubik', sans-serif; /* Adding the Google Font 'Karla' */
    font-weight: 400;
    color: black;
    width: 70%;
    margin-left: 22%;
    margin-right: 10%;
  }
  > h2 {
    z-index: 1;
    font-size: 30px;
    text-align: left;
    font-family: 'Rubik', sans-serif; /* Adding the Google Font 'Karla' */
    font-weight: 600;
    font-style: italic;
    color: black;
    width: 70%;
    margin-bottom: 0; /* Remove the spacing underneath the text */
    margin-left: 22%;
    margin-right: 10%;
  }
  > h1 {
    font-family: 'Karla', sans-serif; /* Adding the Google Font 'Karla' */
    font-size: 100px;
    font-weight: 400;
    text-align: left;
    color: black;
    width: 70vw;
    margin-top: 0px;
    margin-bottom: 0; /* Remove the spacing underneath the text */
    margin-left: 20%;
    margin-right: 10%;
  }
  > button {
    width: 300px;
    height: 80px;
    background-color: black;
    color: white;
    font-family: 'Rubik', sans-serif; /* Adding the Google Font 'Rubik' */
    font-size: 20px;
    font-style: italic;
    border-radius: 12px;
    border: none;
    align-self: center;
    margin-top: 40px;
    transition: 300ms;
    cursor: pointer;
    :hover {
      background-color: white;
      color: black;
    }
  }
`;

const LeftText = styled.div`
  z-index: 1;
  font-size: 24px;
  text-align: left;
  font-family: 'Karla', sans-serif;
  font-weight: 500;
  font-style: italic;
  color: black;
  width: 30%; /* Adjust the width as needed */
`;

const RightText = styled.div`
  z-index: 1;
  font-size: 24px;
  text-align: left;
  font-family: 'Karla', sans-serif;
  font-weight: 500;
  font-style: italic;
  color: black;
  width: 30%; /* Adjust the width as needed */
`;

const GradientCircle = styled.div`
  width: 310.98px;
  height: 316.616px;
  transform: rotate(-0.167deg);
  flex-shrink: 0;
  border-radius: 316.616px;
  border: 1px solid #000;
  background: #FFE977;
  filter: blur(225px);
  margin-top: 15%;
  margin-left: 75%;
  margin-right: 10%;
`;


export default Home;
