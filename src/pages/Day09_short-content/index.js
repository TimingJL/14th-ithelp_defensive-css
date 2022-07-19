import React from 'react';

import styled from 'styled-components';
import Box from './Box';
import Card from './Card';

const Container = styled.div`
  padding: 400px;
`;

const Chips = styled.div`
  & > *:not(:first-child) {
    margin-left: 4px;
  }
`;

const Chip = styled.div`
  border: 1px solid #1976d2;
  color: #1976d2;
  display: inline-block;
  border-radius: 50px;
  padding: 0px 8px;
  min-width: 36px;
  text-align: center;
`;

const Day09 = () => {
  return (
    <Container>
      <Box />
      {/* <Card /> */}
      {/* <Chips>
        {
          // ['冰箱', '馬桶', '刮鬍刀', '烤箱', '咖啡機'].map((tag) => (
          ['夯', '帥', '刮鬍刀', '咖啡機'].map((tag) => (
            <Chip>{tag}</Chip>
          ))
        }
      </Chips> */}
    </Container>
  );
};

export default Day09;
