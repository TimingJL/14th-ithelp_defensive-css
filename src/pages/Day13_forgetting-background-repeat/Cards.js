import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  padding: 60px;
  display: flex;
  gap: 20px;
`;

const Media = styled.div`
  background: url(${props => props.src});
  width: 300px;
  height: 200px;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;

const CardContainer = styled.div`
  position: relative;
  .title {
    position: absolute;
    bottom: 0px;
    left: 0px;
    width: 100%;
    box-sizing: border-box;
    padding: 6px 20px;
    color: white;
    background: #000000a1
  }
`;

const Card = ({ src, title }) => {
  return (
    <CardContainer>
      <Media src={src} />
      {/* <div className="title">{title}</div> */}
    </CardContainer>
  )
}

const Cards = () => {
  return (
    <Container>
      {/* <Card src="https://i.imgur.com/qQsadOM.jpg" title="眼鏡蛇" /> */}
      <Card src="https://i.imgur.com/4pzJUmD.png" title="黑面琵鷺" />
      <Card src="https://i.imgur.com/wE5l7Ja.jpg" title="貓頭鷹" />
      <Card src="https://i.imgur.com/53sDXlE.jpg" title="貓" />
    </Container>
  )
}

export default Cards;
