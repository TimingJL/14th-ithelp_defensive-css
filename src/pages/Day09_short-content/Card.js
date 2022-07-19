import React from 'react';
import styled from 'styled-components';

const CardContainer = styled.div`
  width: 360px;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0px 2px 15px -1px rgb(0 0 0 / 20%), 0px 1px 2px 0px rgb(0 0 0 / 14%), 0px 1px 17px 0px rgb(0 0 0 / 12%);
`;

const CardMedia = styled.div`
  background-image: url('https://i.imgur.com/PLtqtAX.jpg');
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  width: 100%;
  height: 200px;
  position: relative;
  border-radius: 8px 8px 0px 0px;
`;

const CardContent = styled.div`
  padding: 20px 20px 30px;
  font-size: 28px;
  font-weight: 600;
  letter-spacing: 1px;
`;

const Stars = styled.div`
  img + img {
    margin-left: 4px;
  }
  margin-bottom: 8px;
`;

const Tag = styled.div`
  display: inline-block;
  padding: 8px 12px;
  border-radius: 0px 50px 50px 0px;
  background: #ffeb3b;
  position: absolute;
  top: 40px;
  left: 0px;
  transform: translateY(-50%);
`;

const Card = ({ tag = '葡萄' }) => {
  return (
    <CardContainer>
      <CardMedia>
        <Tag>{tag}</Tag>
      </CardMedia>
      <CardContent>
        <Stars>
          <img src="https://uxwing.com/wp-content/themes/uxwing/download/36-arts-graphic-shapes/star.png" alt="" width="28" height="28" />
          <img src="https://uxwing.com/wp-content/themes/uxwing/download/36-arts-graphic-shapes/star.png" alt="" width="28" height="28" />
          <img src="https://uxwing.com/wp-content/themes/uxwing/download/36-arts-graphic-shapes/star.png" alt="" width="28" height="28" />
          <img src="https://uxwing.com/wp-content/themes/uxwing/download/36-arts-graphic-shapes/star.png" alt="" width="28" height="28" />
          <img src="https://uxwing.com/wp-content/themes/uxwing/download/36-arts-graphic-shapes/star.png" alt="" width="28" height="28" />
        </Stars>
        <div>Grape</div>
        <div style={{ fontSize: 14, marginTop: 12, color: '#6b6b6b' }}>
          Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.
        </div>
      </CardContent>
    </CardContainer>
  );
};

export default Card;