import React from 'react';
import styled from 'styled-components';

const WebSite = styled.div`
  box-shadow: 0px 2px 1px -1px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%);
  border-radius: 4px;
  overflow: hidden;
  width: 800px;
`;

const HeroSection = styled.div`
  height: 300px;
  width: 800px;
  background-color: #4158D0;
  background-image: linear-gradient(43deg, #4158D0 0%, #C850C0 46%, #FFCC70 100%);
  .title {
    color: white;
    font-weight: 900;
    font-size: 48px;
    text-align: center;
    padding: 100px 0px 30px;
    vertical-align: middle;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  .description {
    color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .text {
    width: 400px;
    position: relative;
    text-align: center;
  }
`;

const ItemSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
  gap: 60px;
  .item {
    width: 120px;
    height: 120px;
    background: #EEE;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

const Hero = ({ shortContent, heroStyle }) => {
  return (
    <WebSite>
      <HeroSection style={heroStyle}>
        <div className="title">Defensive CSS</div>
        <div className="description">
          {!shortContent && <div className="text">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</div>}
          {shortContent && <div className="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt</div>}
        </div>
      </HeroSection>
      <ItemSection>
        <div className="item">Solution A</div>
        <div className="item">Solution B</div>
        <div className="item">Solution C</div>
        <div className="item">Solution D</div>
      </ItemSection>
    </WebSite>
  )
}

export default Hero;
