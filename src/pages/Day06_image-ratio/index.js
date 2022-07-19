import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  padding: 100px;
`;

const ImageWithoutObjectFit = styled.img`
  object-fit: cover;
`;

const StyledAvatar = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 200px;
  .avatar__image {
    box-shadow: 0px 2px 15px -1px rgb(0 0 0 / 20%), 0px 1px 2px 0px rgb(0 0 0 / 14%), 0px 1px 17px 0px rgb(0 0 0 / 12%);
    border-radius: 100%;
  }
  .avatar__name {
    text-align: center;
    margin-top: 12px;
    font-size: 24px;
    font-weight: 900;
    color: #5c5c5c;
  }
`;

const Avatar = ({ url }) => {
  return (
    <StyledAvatar>
      <img className="avatar__image" src={url} alt="" width={200} height={140} />
      <div className="avatar__name">Taiming</div>
    </StyledAvatar>
  )
}

const Day06 = () => {
  return (
    <Container>
      {/* <ImageWithoutObjectFit src="https://i.imgur.com/5kY1pmb.jpg" alt="" width={100} height={100} /> */}
      {/* <ImageWithoutObjectFit src="https://i.imgur.com/5kY1pmb.jpg" alt="" width={100} height={100} /> */}
      {/* <Avatar url="https://i.imgur.com/pyXHzsn.png" /> */}
      <Avatar url="https://i.imgur.com/5kY1pmb.jpg" />
    </Container>
  );
};

export default Day06;
