import React from 'react';

import styled, { css } from 'styled-components';

const Title = styled.div`
  font-size: 24px;
  font-weight: 900;
  margin-bottom: 12px;
  text-align: center;
`;

const BoxContainer = styled.div`
  box-shadow: 0px 2px 15px -1px rgb(0 0 0 / 20%), 0px 1px 2px 0px rgb(0 0 0 / 14%), 0px 1px 17px 0px rgb(0 0 0 / 12%);
  border-radius: 8px;
  padding: 20px;
  width: 250px;
`;

const Actions = styled.div`
  margin-top: 12px;
  display: flex;
  button + button {
    margin-left: 12px;
  }
`;

const containedButton = css`
  color: white;
  background: #1976d2;
  border: 1px solid #1976d2;
`;

const outlinedButton = css`
  color: #1976d2;
  background: white;
  border: 1px solid #EEE;
`;

const Button = styled.button`
  width: 80px;
  height: 32px;
  padding: 0px 10px;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  &:hover {
    box-shadow: 0px 2px 1px -1px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%);
  }
  ${props => props.$variant === 'contained' ? containedButton : outlinedButton}
`;

const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  & > *:not(:first-child) {
    margin-top: 12px;
  }
`;

const Input = styled.input`
  box-shadow: none;
  border: 1px solid #EEE;
  border-radius: 4px;
  height: 32px;
  padding: 0px 12px;
`;

const Box = () => {
  return (
    <BoxContainer>
      <Title>
        Subscribe
      </Title>
      <InputGroup>
        <Input placeholder="mail@example.com" />
      </InputGroup>
      <Actions className="actions">
        <Button $variant="outlined">Cancel</Button>
        <Button $variant="contained">OK</Button>
      </Actions>
    </BoxContainer>
  )
};

export default Box;
