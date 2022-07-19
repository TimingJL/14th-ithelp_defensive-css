import React from 'react';
import styled from 'styled-components';
import MenuIcon from '@mui/icons-material/Menu';

const Background = styled.div`
  background: url('https://static.newmobilelife.com/wp-content/uploads/2018/09/iPhone-XS-1-for-iPhone-X.jpg');
  width: 100%;
  height: 100%;
  background-position: center;
  background-size: cover;
  height: 100vh;
`;

const Navigation = styled.div`
  display: flex;
  justify-content: space-between;
  height: 52px;
  align-items: center;
  padding: 0px 24px;
  background: #6CB31B;
  color: white;
  .logo {
    font-size: 24px;
    font-weight: bold;
  }
`;

const Menu = styled.div`
  background: #000;
  padding: 30px 0px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  box-shadow: 0px 2px 15px -1px rgb(0 0 0 / 20%), 0px 1px 2px 0px rgb(0 0 0 / 14%), 0px 1px 17px 0px rgb(0 0 0 / 12%);
  .menu-item {
    color: white;
    height: 60px;
    padding: 0px 20px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

const MobileNavigation = () => {
  return (
    <Background>
      <Navigation>
        <div className="logo">Logo</div>
        <div><MenuIcon /></div>
      </Navigation>
      <Menu>
        <div className="menu-item">公司簡介</div>
        <div className="menu-item">解決方案</div>
        <div className="menu-item">客戶案例</div>
        <div className="menu-item">方案費用</div>
        <div className="menu-item">行銷聯盟</div>
        <div className="menu-item">最新消息</div>
        <div className="menu-item">投資人專區</div>
        <div className="menu-item">聯絡我們</div>
      </Menu>
    </Background>
  )
}

export default MobileNavigation;
