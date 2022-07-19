import React from 'react';
import styled from 'styled-components';

import Hero from './Hero';
import Card from './Card';

const Container = styled.div`
  padding: 60px;
  display: flex;
  gap: 20px;
`;

const Day11 = () => {
  return (
    <Container>
      {/* <Card content="Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old." />
      <Card content="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt." /> */}
      <Hero shortContent={true} />
      <Hero heroStyle={{ minHeight: 300, height: 'auto', paddingBottom: 20 }} />
    </Container>
  )
}

export default Day11;
