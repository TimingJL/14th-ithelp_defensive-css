import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  justify-content: center;
  min-height: 100vh;
`;

const Content = styled.div`
  width: min(calc(100vw - 40px), 1200px);
`;

const PageContainer = ({ children, ...props }) => (
  <Container {...props}>
    <Content>
      {children}
    </Content>
  </Container>
);

export default PageContainer;
