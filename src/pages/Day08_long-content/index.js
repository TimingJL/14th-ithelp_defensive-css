import React from 'react';
import styled from 'styled-components';

import Menu from './Menu';

const Container = styled.div`
  padding: 400px;
`;

const Box = styled.div`
  border: 1px solid #696969;
  hyphens: auto;
`;

const Day08 = () => {
  return (
    <Container>
      <Menu />
      {/* <Box>
      Most words are short & don't need to break. But Antidisestablishmentarianism is long. The width is set to min-content, with a max-width of 11em.
      </Box> */}
    </Container>
  );
};

export default Day08;
