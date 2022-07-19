import styled from 'styled-components';
import { useNavigate } from "react-router-dom";

const FlexContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.div`
  font-size: 48px;
  font-weight: 700;
  margin: 40px 0px;
`;

const GridContainer = styled.div`
  width: min(calc(100vw - 40px), 1200px);
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 20px;
`;

const Block = styled.div`
  border: 1px solid #EEEEEE;
  border-radius: 8px;
  height: 120px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 900px;
  font-size: 24px;
  cursor: pointer;
  transition: box-shadow 0.2s ease-in-out;
  &:hover {
    transition: box-shadow 0.2s ease-in-out;
    box-shadow: 0px 2px 15px -1px rgb(0 0 0 / 20%), 0px 1px 2px 0px rgb(0 0 0 / 14%), 0px 1px 17px 0px rgb(0 0 0 / 12%);
  }
`;

const blocks = [
  {
    index: 3,
    title: 'Title and Icon'
  },
  {
    index: 4,
    title: 'Buttons'
  },
  {
    index: 5,
    title: 'Category Tag'
  },
  {
    index: 6,
    title: 'Image ratio'
  },
  {
    index: 7,
    title: 'Flexbox wrapping'
  },
  {
    index: 8,
    title: 'Long Content'
  },
  {
    index: 9,
    title: 'Short Content'
  },
  {
    index: 10,
    title: 'Lock Scroll Chaining'
  },
  {
    index: 11,
    title: 'Using Fixed Height'
  },
  {
    index: 12,
    title: 'Using Fixed Width'
  },
  {
    index: 13,
    title: 'Forgetting Background Repeat'
  },
  {
    index: 14,
    title: 'Responsive Height Design'
  },
];

const formatNumber = (num) => {
  if (num < 10) {
    return `0${num}`;
  }
  return `${num}`;
}

function Home() {
  const navigate = useNavigate();

  return (
    <FlexContainer>
      <Title>
        Defensive CSS
      </Title>
      <GridContainer>
        {
          blocks.map((block) => (
            <Block
              key={block.index}
              onClick={() => {
                navigate(`/day${formatNumber(block.index)}`)
              }}
            >
              {`[Day${formatNumber(block.index)}] ${block.title}`}
            </Block>
          ))
        }
      </GridContainer>
    </FlexContainer>
  );
}

export default Home;
