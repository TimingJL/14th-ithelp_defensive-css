import React from 'react';
import styled from 'styled-components';
import ConfirmModal from './ConfirmModal';
import Dropdown from './Dropdown';

const Container = styled.div`
  padding: 60px;
  display: flex;
  gap: 20px;
`;

const Button = styled.div`
  min-width: 80px;
  background: #6cb31b;
  color: white;
  padding: 0px 12px;
  /* color: white; */
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 4px;

  /* white-space: nowrap; */
`;

const Day12 = () => {
  return (
    <Container>
      {/* <Button>
        Sign up
      </Button>
      <Button>
        Subscribe Now
      </Button> */}
      {/* <Button style={{ whiteSpace: 'nowrap' }}>
        Subscribe Now
      </Button> */}
      {/* <ConfirmModal /> */}
      <Dropdown />
    </Container>
  )
}

export default Day12;
