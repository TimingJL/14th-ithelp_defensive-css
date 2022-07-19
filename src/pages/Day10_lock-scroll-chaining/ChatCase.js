import React from 'react';
import styled from 'styled-components';

const Background = styled.div`
  width: 600px;
  height: 400px;
  overflow-y: auto;
  /* padding: 12px; */
  position: relative;
  border-radius: 4px;
  color: #5a5a5a;
  overscroll-behavior: contain;
  box-shadow: 0px 2px 1px -1px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%);
`;

const NavBar = styled.div`
  background: #B2C3DD;
  height: 40px;
`;

const Logo = styled.div`
  color: white;
  font-weight: 900px;
  padding: 10px;
  font-size: 18px;
`;

const ChatBox = styled.div`
  position: absolute;
  bottom: 0px;
  right: 20px;
  background: white;
  width: 200px;
  height: 300px;
  overflow: auto;
  border-radius: 8px 8px 0px 0px;
  box-shadow: 0px 2px 15px -1px rgb(0 0 0 / 20%), 0px 1px 2px 0px rgb(0 0 0 / 14%), 0px 1px 17px 0px rgb(0 0 0 / 12%);
  display: flex;
  flex-direction: column;
  .chat-box__header {
    flex: 0 0 30px;
    line-height: 30px;
    padding: 0px 10px;
  }
  .chat-box__content {
    background: #B2C3DD;
    flex: 1 1 auto;
    padding: 10px;
  }
  .chat-box__bottom {
    flex: 0 0 30px;
    line-height: 30px;
    padding: 0px 10px;
    color: #c1c1c1;
  }
  .chat-box__message {
    background: white;
    border-radius: 4px;
    width: 100px;
    padding: 10px;
    position: relative;
  }
`;

const ChatCase = () => {
  return (
    <Background>
      <NavBar>
        <Logo>Logo</Logo>
      </NavBar>
      <div style={{ padding: 12 }}>
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
      <ChatBox>
        <div className="chat-box__header">Chat</div>
        <div className="chat-box__content">
          <div className="chat-box__message">Lorem Ipsum is simply dummy text of the printing</div>
          <div className="chat-box__message" style={{ marginLeft: '60px', marginTop: 10 }}>Contrary to popular belief, Lorem Ipsum</div>
          <div className="chat-box__message" style={{ marginTop: 10 }}>be distracted by the readable content of a page</div>
        </div>
        <div className="chat-box__bottom">
          Write message...
        </div>
      </ChatBox>
    </Background>
  )
}

export default ChatCase;
