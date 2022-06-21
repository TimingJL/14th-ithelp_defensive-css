import React from 'react';
import styled, { css } from 'styled-components';
import PageContainer from '../../components/PageContainer';

const Title = styled.div`
  font-size: 24px;
  font-weight: 900;
  margin-bottom: 12px;
`;

const BoxContainer = styled.div`
  box-shadow: 0px 2px 15px -1px rgb(0 0 0 / 20%), 0px 1px 2px 0px rgb(0 0 0 / 14%), 0px 1px 17px 0px rgb(0 0 0 / 12%);
  border-radius: 8px;
  padding: 20px;
  width: 450px;
  /* .actions :not(:first-child) {
    margin-left: 12px;
  } */
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
  width: 120px;
  height: 40px;
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

const Box = () => {
  return (
    <BoxContainer>
      <Title>
        Are you sure?
      </Title>
      <div>
        It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.
      </div>
      <Actions className="actions">
        <Button $variant="outlined">Cancel</Button>
        <Button $variant="contained">Confirm</Button>
        <Button $variant="contained">Confirm</Button>
      </Actions>
    </BoxContainer>
  )
};

const Input = styled.input`
  border-radius: 4px;
  border: 1px solid #EEE;
  font-size: 24px;
  padding: 8px 12px;
`;

const Textarea = styled.textarea`
  margin-top: 12px;
  border-radius: 4px;
  border: 1px solid #EEE;
  font-size: 24px;
  padding: 8px 12px;
  height: 150px;
`;

const Form = () => {
  return (
    <BoxContainer style={{ display: 'flex', flexDirection: 'column', marginTop: '40px' }}>
      <Input placeholder="Title" />
      <Textarea placeholder="description" />
      <Actions className="actions">
        <Button $variant="outlined">Cancel</Button>
        <Button $variant="contained">Submit</Button>
        <Button $variant="contained">Submit</Button>
      </Actions>
    </BoxContainer>
  )
}

const Day04 = () => {
  return (
    <PageContainer style={{ padding: '60px 0px' }}>
      <Box />
      <Form />
    </PageContainer>
  );
};

export default Day04;
