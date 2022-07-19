import React from 'react';
import styled from 'styled-components';

const Background = styled.div`
  background: black;
  background-image: url('https://i.imgur.com/8JsfyHQ.jpg');
  /* background-image: url('https://i.pinimg.com/736x/ca/62/00/ca62002125c9bddd10e66bad2a971688--huntsville-alabama-autumn-fall.jpg'); */
  /* background-position: center; */
  width: 100vw;
  height: 100vh;
  /* background-size: cover; */
  background-position: center;
  background-repeat: no-repeat;
`;

const Mask = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100vw;
  height: 100vh;
  background: white;
  z-index: 999;
  opacity: 0.2;
`;

const Title = styled.div`
  color: white;
  position: absolute;
  top: 35%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 80px;
  letter-spacing: 10px;
  font-weight: 900;
`;

const Nav = styled.div`
  display: flex;
  justify-content: space-between;
  height: 62px;
  align-items: center;
  padding: 0px 24px;
  color: white;
  font-weight: 700;
  .logo {
    font-size: 24px;
  }
  .end {
    display: flex;
    gap: 20px;
  }
`;

const HeroSection = () => {
  return (
    <Background>
      <Mask />
      <Title>基隆嶼</Title>
      <Nav>
        <div className="start">
          <div className="logo">旅遊網</div>
        </div>
        <div className="end">
          <div>地形</div>
          <div>歷史</div>
          <div>植物</div>
          <div>氣候</div>
        </div>
      </Nav>
    </Background>
  )
}

export default HeroSection;
