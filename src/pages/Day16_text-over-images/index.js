import React from 'react';
import styled from 'styled-components';

import duck from '../../assets/duck.jpeg';

const Container = styled.div`
  padding: 100px;
`;

const Image = styled.div`
  background-image: url(${props => props.src});
  background-size: cover;
  background-color: #8BC6EC;

  width: 400px;
  height: 225px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: 900;
  letter-spacing: 1px;
  font-size: 40px;
  border-radius: 8px;
  box-shadow: 0px 2px 15px -1px rgb(0 0 0 / 20%), 0px 1px 2px 0px rgb(0 0 0 / 14%), 0px 1px 17px 0px rgb(0 0 0 / 12%);
  /* text-shadow: 0.1em 0.1em 0.2em #eee; */
`;

// const Day16 = () => {
//   return (
//     <Container>
//       <Image src={'123'}>
//         Duck
//       </Image>
//     </Container>
//   )
// }

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
  height: 100vh;
  @media (min-width: 600px) {
    display: grid;
    grid-template-columns: 250px 1fr;
    gap: 1rem;
  }
`;

const Day16 = () => {
  return (
    <Wrapper>
      <div style={{ background: 'pink' }}>Aside</div>
      <div>Main</div>
    </Wrapper>

  )
}

export default Day16;
