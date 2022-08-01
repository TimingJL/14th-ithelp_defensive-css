import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  padding: 100px;
  display: flex;
  gap: 20px;
`;

const Box = styled.div`
  width: 200px;
  height: 150px;
  overflow-y: auto;
  padding: 20px;
  box-shadow: 0px 2px 15px -1px rgb(0 0 0 / 20%), 0px 1px 2px 0px rgb(0 0 0 / 14%), 0px 1px 17px 0px rgb(0 0 0 / 12%);
  border-radius: 8px;
  scrollbar-gutter: stable;
  .title {
    font-size: 24px;
  }
`;

const Day18 = () => <Container>
  <Box>
    <div className="title">Title</div>
    <div className="content">Contrary to popular <span style={{ background: 'yellow' }}>belief</span>, Lorem Ipsum is not simply random text.</div>
  </Box>
  <Box>
    <div className="title">Title</div>
    <div className="content" style={{ overflow: 'none' }}>Contrary to popular <span style={{ background: 'yellow' }}>belief</span>, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.</div>
  </Box>
</Container>

export default Day18;
