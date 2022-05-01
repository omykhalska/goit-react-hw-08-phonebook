import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import Navigation from 'components/Navigation';
import { Header, Main, Footer } from './Layout.styled';

const Layout = () => {
  return (
    <>
      <Header>
        <Navigation />
      </Header>
      <Main>
        <Suspense fallback="">
          <Outlet />
        </Suspense>
      </Main>
      <Footer>FOOTER</Footer>
    </>
  );
};

export default Layout;
