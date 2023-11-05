import React from 'react';
import styled from '@emotion/styled';
import '../styles/Home.css';

const Home: React.FC = () => {
  return (
    <HeaderContainer id="home">
      <TextContainer>
        <h1>Hi! I'm Rosanne.</h1>
        <h2>I’m a full stack software engineer developing digital solutions for complex problems.</h2>
        <GridContainer>
          <h2>currently</h2>
          <h3>studying</h3>
          <p>a SWE intern @ <mark>BMO Financial Group</mark></p>
          <h1>CS & AI @ <mark>uWaterloo</mark></h1>
        </GridContainer>
      </TextContainer>

    </HeaderContainer>
  );
};

const HeaderContainer = styled.main`
  position: relative;
  height: 75vh;
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
    font-size: 15px;
    text-align: left;
    font-family: 'Rubik', sans-serif; /* Adding the Google Font 'Karla' */
    font-weight: 400;
    color: black;
    width: 70%;
    margin-left: 32%;
    margin-top: 0px;
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
    font-size: 15px;
    text-align: left;
    font-family: 'Rubik', sans-serif; /* Adding the Google Font 'Karla' */
    font-weight: 400;
    color: black;
    width: 70%;
    margin-left: -30%;
    margin-top: 0px;
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
    font-size: 20px;
    text-align: left;
    font-family: 'Rubik', sans-serif; /* Adding the Google Font 'Karla' */
    font-weight: 600;
    font-style: italic;
    color: black;
    width: 70%;
    margin-left: 32%;
    margin-bottom: 0; /* Remove the spacing underneath the text */
    margin-right: 100%;
  }
  > h3 {
    z-index: 1;
    font-size: 20px;
    text-align: left;
    font-family: 'Rubik', sans-serif; /* Adding the Google Font 'Karla' */
    font-weight: 600;
    font-style: italic;
    color: black;
    width: 70%;
    margin-left: -30%;
    margin-bottom: 0; /* Remove the spacing underneath the text */
    margin-right: 100%;
  }
`;

const TextContainer = styled.div`
  display: flex;
  position: absolute;
  top: 130px;
  flex-direction: column;
  z-index: 10;
  width: 100%;
  margin-left: -5%;
  > h1 {
    font-family: 'Karla', sans-serif; /* Adding the Google Font 'Karla' */
    font-size: 80px;
    font-weight: 400;
    text-align: left;
    color: black;
    width: 70vw;
    margin-top: -2%;
    margin-bottom: 0; /* Remove the spacing underneath the text */
    margin-left: 20%;
    margin-right: 10%;
    letter-spacing: 1px;
  }
  > h2 {
    font-family: 'Karla', sans-serif; 
    font-size: 43px;
    font-weight: 400;
    text-align: left;
    color: #202020;
    width: 70vw;
    margin-top: 0px;
    margin-bottom: 0; 
    margin-left: 20%;
    margin-right: 10%;
    letter-spacing: 1px;
  }
`;




export default Home;
