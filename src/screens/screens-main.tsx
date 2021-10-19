import React from 'react';
import { useAuth } from 'context/auth-context';
import { Button, Dropdown, Menu } from 'antd';
import { ProjectListScreen } from './project-list';
import { ReactComponent as SoftwareLogo } from 'assets/software-logo.svg';
import styled from '@emotion/styled';
import { ButtonNoPadding, Row } from 'components/lib';
import { ProjectPopover } from 'components/project-popover';
import { UserPopover } from 'components/user-popover';
import { Navigate, Route, Routes } from 'react-router';
import { ProjectScreen } from './project';
import { resetRoute } from 'utils';
import { ProjectModal } from './project-list/project-modal';

export default function ScreensMain() {
  return (
    <Container>
      <PageHeader />
      <Main>
        <Routes>
          <Route path={'/projects'} element={<ProjectListScreen />} />
          <Route path={'/projects/:projectId/*'} element={<ProjectScreen />} />
          <Navigate to={'/projects'} />
        </Routes>
      </Main>
      <ProjectModal />
    </Container>
  );
}

const PageHeader = () => {
  return (
    <Header between={true}>
      <HeaderLeft gap={true}>
        <ButtonNoPadding type={'link'} onClick={resetRoute}>
          <SoftwareLogo width={'18rem'} color={'rgb(38, 132, 255)'} />
        </ButtonNoPadding>
        <ProjectPopover />
        <UserPopover />
      </HeaderLeft>
      <HeaderRight>
        <User />
      </HeaderRight>
    </Header>
  );
};
const User = () => {
  const { logout, user } = useAuth();
  return (
    <Dropdown
      overlay={
        <Menu>
          <Menu.Item key={'logout'}>
            <Button onClick={logout} type={'link'}>
              登出
            </Button>
          </Menu.Item>
        </Menu>
      }
    >
      <Button type={'link'} onClick={(e) => e.preventDefault()}>
        Hi, {user?.name}
      </Button>
    </Dropdown>
  );
};

const Container = styled.div`
  display: grid;
  grid-template-rows: 6rem 1fr;
  height: 100vh;
`;
const Main = styled.main``;
const HeaderRight = styled.div``;
// grid-area 用于给 grid 元素子元素起名
const Header = styled(Row)`
  padding: 3.2rem;
  box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.1);
  z-index: 1;
`;

const HeaderLeft = styled(Row)``;
