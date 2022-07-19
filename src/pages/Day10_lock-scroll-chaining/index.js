import React from 'react';
import styled from 'styled-components';

import ModalCase from './ModalCase';
import SidebarCase from './SidebarCase';
import DropdownCase from './DropdownCase';
import ChatCase from './ChatCase';

const Container = styled.div`
  padding: 400px;
`;

const Day10 = () => {
  return (
    <Container>
      {/* <ModalCase /> */}
      {/* <SidebarCase /> */}
      <ChatCase />
    </Container>
  )
}

export default Day10;
