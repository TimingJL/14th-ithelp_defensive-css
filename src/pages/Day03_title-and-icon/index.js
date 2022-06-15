import React from 'react';
import styled, { css } from 'styled-components';
import PageContainer from '../../components/PageContainer';

const showMargin = css`
  background: orange;
  padding: -1px;
  & > * {
    background: white;
  }
  padding-right: 20px;
`;

const Cards = styled.div`
  & > * {
    margin: 30px 0px;
  }
`;

const CardContainer = styled.div`
  box-shadow: 0px 2px 15px -1px rgb(0 0 0 / 20%), 0px 1px 2px 0px rgb(0 0 0 / 14%), 0px 1px 17px 0px rgb(0 0 0 / 12%);
  border-radius: 8px;
  padding: 20px;
  width: 450px;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start; // 置頂
  line-height: 24px; // 調整行高
`;

const Title = styled.div`
  font-size: 24px;
  font-weight: 900;
  ${props => props.$showMargin && showMargin}
`;

const Icon = styled.div``;

const Content = styled.div`
  margin-top: 20px;
`;

const LabelContainer = styled.div`
  display: flex;
  justify-content: space-between;
  color: #362f2f;
`;

const Form = styled.div`
  width: 450px;
`;

const Input = styled.input`
  border: 1px solid #b9b9b9;
  width: 100%;
  height: 40px;
  font-size: 24px;
  border-radius: 8px;
  margin-top: 8px;
  padding: 8px 12px;
  box-sizing: border-box;
`;

const Card = (props) => {
  return (
    <CardContainer>
      <Header>
        <Title $showMargin={props.$showMargin}>
          <div>{props.title}</div>
        </Title>
        <Icon>
          <img src="https://cdn-icons-png.flaticon.com/512/1242/1242392.png" width="24" height="24" alt="" />
        </Icon>
      </Header>
      <Content>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged
      </Content>
    </CardContainer>
  );
};

const Day03 = () => {
  const inputValue = "Trending Topics";
  return (
    <PageContainer style={{ padding: '60px 0px' }}>
      <Cards>
        <Card title="Trending Topics" />
        <Card title="Trending Topics with a longer title" $showMargin={true} />
        <Card title="Trending Topics with a longer and longer title" $showMargin={true} />
        <Card title="Trending Topics with a longer and longer and longer and longer and longer title" />
      </Cards>
      <Form>
        <LabelContainer>
          <div>Title</div>
          <div>{`${inputValue.length}/20`}</div>
        </LabelContainer>
        <Input value={inputValue} />
      </Form>
    </PageContainer>
  );
};

export default Day03;
