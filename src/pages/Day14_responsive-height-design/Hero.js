import React from 'react';
import styled from 'styled-components';
import Box from '@mui/material/Box';
import Skeleton from '@mui/material/Skeleton';

const HeroSection = styled.section`
  /* height: max(1000px, 100vh); */
  height: 1000px;
  @media (min-height: 1000px) {
    height: 100vh;
  }
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  .hero-wording {
    margin-top: 30vh;
    margin-left: 60px;
    h1 {
      font-size: 72px;
      margin-bottom: 30px;
    }
    h2 {
      font-size: 60px;
      margin-bottom: 20px;
    }
    div {
      font-size: 40px;
    }
    z-index: 10;
  }
  .hero-images {
    position: relative;
  }
`;

const Image = styled.img`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 400px;
  height: 600px;
  object-fit: cover;
  border-radius: 12px;
  z-index: 10;
  box-shadow: 0px 2px 15px -1px rgb(0 0 0 / 20%), 0px 1px 2px 0px rgb(0 0 0 / 14%), 0px 1px 17px 0px rgb(0 0 0 / 12%);
`;

const OtherSection = styled.section`
  height: 100vh;
  background: #D7DDE5;
  position: relative;
`;

const Hero = () => {
  return (
    <div>
      <HeroSection>
        <div className="hero-wording">
          <h1>響應式高度設計</h1>
          <h2>防禦性 CSS</h2>
          <div>打造「以防萬一」的匠人心態</div>
        </div>
        <div className="hero-images">
          <Image src="https://i.imgur.com/nptmEy2.jpg" alt="" />
          <Image src="https://i.imgur.com/Lr3BxAq.jpg" alt="" style={{ left: 120, top: 600 }} />
        </div>
      </HeroSection>
      <OtherSection>
        <Box sx={{ padding: '60px' }}>
          <Skeleton sx={{ width: '50vw', marginBottom: '20px' }} />
          <Skeleton animation="wave" />
          <Skeleton animation={false} />
        </Box>
      </OtherSection>
    </div>
  )
}

export default Hero;
