import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Navigation } from 'components/Navigation';
import { Header, Container, Main } from './Layout.styled';

export const Layout = () => {
  return (
    <>
      <Header>
        <Container>
          <Navigation />
        </Container>
      </Header>
      <Main>
        <Container>
          <Suspense fallback="">
            <Outlet />
          </Suspense>
        </Container>
      </Main>
    </>
  );
};
