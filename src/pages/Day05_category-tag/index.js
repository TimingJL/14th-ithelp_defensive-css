import React from 'react';
import styled from 'styled-components';


const Container = styled.div`
  padding: 100px;
  display: flex;
  gap: 40px;
`;

const CardContainer = styled.div`
  width: 360px;
  /* min-height: 400px; */
  /* height: 320px; */
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
  padding: 12px 20px;
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

  /* max-width: 120px; */
  /* text-overflow: ellipsis; */
  /* overflow: hidden; */
  /* white-space: nowrap; */
  /* white-space: nowrap; */
`;

const Tags = styled.div`
  display: flex;
  gap: 4px;
`;

const NewTag = styled.div`
  display: inline-flex;
  font-size: 12px;
  border: 1px solid #e9e9e9;
  padding: 4px 8px;
  margin-bottom: 8px;
  border-radius: 50px;
  align-items: center;
  & > img {
    margin-right: 8px;
  }
`;

const Card = ({ tag }) => {
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
        {/* <div style={{ fontSize: 14, marginTop: 12, color: '#6b6b6b' }}>
          Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.
        </div> */}
      </CardContent>
    </CardContainer>
  );
};

const NewCard = ({ tags }) => {
  return (
    <CardContainer>
      <CardMedia />
      <CardContent>
        <Tags>
          {
            tags.map((tag) => (
              <NewTag key={tag}>
                <img src="https://s3.amazonaws.com/freestock-prod/450/freestock_571071286.jpg" alt="" width={16} height={16} />
                {tag}
              </NewTag>
            ))
          }
        </Tags>
        <div>Grape</div>
        <div style={{ fontSize: 14, marginTop: 12, color: '#6b6b6b' }}>
          Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.
        </div>
        <Stars style={{ marginTop: 8 }}>
          <img src="https://uxwing.com/wp-content/themes/uxwing/download/36-arts-graphic-shapes/star.png" alt="" width="28" height="28" />
          <img src="https://uxwing.com/wp-content/themes/uxwing/download/36-arts-graphic-shapes/star.png" alt="" width="28" height="28" />
          <img src="https://uxwing.com/wp-content/themes/uxwing/download/36-arts-graphic-shapes/star.png" alt="" width="28" height="28" />
          <img src="https://uxwing.com/wp-content/themes/uxwing/download/36-arts-graphic-shapes/star.png" alt="" width="28" height="28" />
          <img src="https://uxwing.com/wp-content/themes/uxwing/download/36-arts-graphic-shapes/star.png" alt="" width="28" height="28" />
        </Stars>
      </CardContent>
    </CardContainer>
  )
}

const Day05 = () => {
  return (
    <Container>
      <Card tag="Fruit" />
      <Card tag="Fruit with a bit longer and longer title" />
      {/* <NewCard tags={["Fruit"]} /> */}
      {/* <NewCard tags={["Fruit", "Juicy"]} /> */}
      {/* <NewCard tags={["Fruit with a bit longer title"]} /> */}
    </Container>
  );
};

export default Day05;
