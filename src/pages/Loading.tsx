import React from 'react';
import styled from '@emotion/styled';
import FadeIn from "../components/FadeIn";

const Loading: React.FC = () => {
  return (
    <LandingContainer>      
      <img src={"/assets/shadowtext.png"} alt="" 
      style={{ maxWidth: "1400px", paddingBottom:'40px',position: "absolute", bottom: "0", opacity:'65%',marginLeft:'-50px' }}
      />
      <img src={"/assets/pin.svg"} alt="" 
      style={{ maxWidth: "12px", paddingBottom:'20%', paddingLeft:'38.5%',position: "absolute", bottom: "0" }}
      />
      <h1 style={{color:'white', fontWeight:'300', position: "absolute", bottom:'0',right:'0', paddingRight:'20px', marginBottom:'15px', letterSpacing:'0.5px'}}>
        Loading...
      </h1>
      <FadeIn>
      <h2 style={{fontWeight:'300', color:'white', fontSize:'17px', paddingLeft:'36%', position: "absolute", bottom:'0', marginBottom:'25%', letterSpacing:'0.5px'}}>
        You've landed on <br/> Rosanne's Portfolio
      </h2>
      </FadeIn>
    </LandingContainer>
  );
};

const LandingContainer = styled.div`
  display: flex;
  flex-direction: column;
  overflow: hidden;
  position: relative;
  background-size: cover;
  background-image: url('/assets/bluebg.png');
  height:100vh;
  color: white;

  > h1 {
    font-family: 'Karla', sans-serif; /* Adding the Google Font 'Karla' */
    font-size: 15px;
  }
`;


export default Loading;
