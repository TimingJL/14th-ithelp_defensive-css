import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  box-shadow: 0px 2px 15px -1px rgb(0 0 0 / 20%), 0px 1px 2px 0px rgb(0 0 0 / 14%), 0px 1px 17px 0px rgb(0 0 0 / 12%);
  border-radius: 4px;
  width: 340px;
  overflow: hidden;
  .title {
    height: 48px;
    display: flex;
    align-items: center;
    padding: 0px 24px;
    font-size: 16px;
    background: #f3ffe6;
    color: #696969;
    font-weight: 700;
  }
  .content {
    padding: 12px 24px;
    font-size: 14px;
  }
  .actions {
    padding: 0px 24px;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    height: 48px;
    gap: 16px;
    border-top: 1px solid #e6e6e6;
  }
`;

const Button = styled.div`
  width: 100px;
  /* background: #E3F3E7; */
  /* color: white; */
  height: 32px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 2px;
  /* white-space: nowrap; */
`;

const ConfirmModal = () => {
  return (
    <Container>
      <div className="title">Subscribe Now</div>
      <div className="content">
        At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti?
      </div>
      <div className="actions">
        <Button style={{ border: '1px solid #6cb31b', color: '#6cb31b' }}>Cancel</Button>
        <Button style={{ background: '#6cb31b', border: '1px solid #6cb31b', color: 'white' }}>Confirm</Button>
      </div>
    </Container>
  )
}

export default ConfirmModal;
