import React from 'react';
import styled from 'styled-components';

const Background = styled.div`
  /* width: 600px; */
  /* height: 400px; */
  width: 100vw;
  height: 100vh;
  /* background: #B2C3DD; */
  /* overflow-y: auto; */
  /* padding: 12px; */
  position: relative;
  /* border-radius: 8px; */
  color: #5a5a5a;
  /* overscroll-behavior: contain; */

  display: flex;
`;

const Sidebar = styled.div`
  background: #97b2dc;
  width: 160px;
  height: 100vh;
  overflow: auto;
  flex: 0 0 160px;
  position: fixed;
  color: white;
  .sidebar__logo {
    font-size: 24px;
    font-weight: 900;
    padding: 20px 40px;;
  }
  .sidebar__menu-item {
    height: 60px;
    border-bottom: 1px solid #eee;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const Content = styled.div`
  padding: 12px;
  padding-left: 180px;
  /* overflow: auto; */
`;

const SidebarCase = () => {
  return (
    <Background>
      <Sidebar>
        <div className="sidebar__logo">Logo</div>
        <div className="sidebar__menu-item">Menu Item</div>
        <div className="sidebar__menu-item">Menu Item</div>
        <div className="sidebar__menu-item">Menu Item</div>
        <div className="sidebar__menu-item">Menu Item</div>
        <div className="sidebar__menu-item">Menu Item</div>
        <div className="sidebar__menu-item">Menu Item</div>
        <div className="sidebar__menu-item">Menu Item</div>
        <div className="sidebar__menu-item">Menu Item</div>
      </Sidebar>
      <Content>
        <div>
          <div style={{ fontSize: 24 }}>Start</div>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
          </p>
          <p>
            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
          </p>
          <p>
            Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
          </p>
        </div>
      </Content>
    </Background>
  )
}

export default SidebarCase;
