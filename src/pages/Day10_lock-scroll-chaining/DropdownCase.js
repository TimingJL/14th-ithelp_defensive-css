import React from 'react';
import styled from 'styled-components';

const Background = styled.div`
  width: 600px;
  height: 400px;
  background: #B2C3DD;
  overflow-y: auto;
  padding: 12px;
  position: relative;
  border-radius: 8px;
  color: #5a5a5a;
  overscroll-behavior: contain;
`;

const DropdownWrapper = styled.div`
  position: relative;
  display: inline-flex;
  flex-direction: column;
`;

const Button = styled.div`
  margin-top: 30px;
  background: #1976d2;
  display: inline-block;
  height: 40px;
  border-radius: 4px;
  color: white;
  width: 120px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Menu = styled.div`
  position: absolute;
  top: 74px;
  background: #FFFFFF;
  display: inline-block;
  border-radius: 8px;
  width: 200px;
  height: 200px;
  box-shadow: 0px 2px 1px -1px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%);
  overflow: auto;
  .menu__item {
    height: 40px;
    border-bottom: 1px solid #eee;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;


const DropdownCase = () => {
  return (
    <Background>
      <DropdownWrapper>
        <Button>Dropdown</Button>
        <Menu>
          <div className="menu__item">Menu Item</div>
          <div className="menu__item">Menu Item</div>
          <div className="menu__item">Menu Item</div>
          <div className="menu__item">Menu Item</div>
          <div className="menu__item">Menu Item</div>
          <div className="menu__item">Menu Item</div>
          <div className="menu__item">Menu Item</div>
          <div className="menu__item">Menu Item</div>
        </Menu>
      </DropdownWrapper>
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
    </Background>
  )
}

export default DropdownCase;
