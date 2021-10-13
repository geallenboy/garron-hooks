import React from 'react';
import { useAuth } from 'context/auth-context';
import { Button } from 'antd';
import { ProjectListScreen } from './project-list';
import styled from '@emotion/styled';
import { Row } from 'components/lib';

export const Authenticated = () => {
  const { logout } = useAuth();
  return (
    <Container>
      <Header between={true}>
        <HeaderLeft gap={true}>
          <h2>Logo</h2>
          <h2>项目</h2>
          <h2>用户</h2>
        </HeaderLeft>
        <HeaderRight>
          <Button onClick={logout}>登出</Button>
        </HeaderRight>
      </Header>
      <Main>
        <ProjectListScreen />
      </Main>
    </Container>
  );
};

const Container = styled.div`
  display: grid;
  grid-template-rows: 6rem 1fr;
  height: 100vh;
`;
const Main = styled.main``;
const HeaderRight = styled.div``;
const Header = styled(Row)``;

const HeaderLeft = styled(Row)``;
