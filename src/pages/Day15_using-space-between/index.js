import React from 'react';
import styled from 'styled-components';

import bird from '../../assets/bird.jpeg';
import duck from '../../assets/duck.jpeg';
import eagle from '../../assets/eagle.jpeg';
import frog from '../../assets/frog.jpeg';
import snake from '../../assets/snake.jpeg';

const Container = styled.div`
  padding: 100px;
  display: flex;
  justify-content: space-between;
`;

const Image = styled.div`
  background-image: url(${props => props.src});
  background-size: cover;
  width: 250px;
  height: 200px;
  margin-top: 20px;
`;

const Day15 = () => {
  return (
    <Container>
      <Image src={bird} />
      <Image src={duck} />
      <Image src={eagle} />
      <Image src={frog} />
      <Image src={snake} />
    </Container>
  )
}

export default Day15;
