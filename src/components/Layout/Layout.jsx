import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import Spiner from 'components/Spiner/Spiner';
import AuthMenu from 'components/AuthMenu/AuthMenu';
import UserMenu from 'components/UserMenu/UserMenu';
import Navigation from 'components/Navigation/Navigation';
import { Header } from './Layuot.styled';
import { useAuth } from 'components/hooks/Authhook';

const Layout = () => {
  const { isLoggedIn } = useAuth();
  return (
    <>
      <Header>
        <Navigation />
        {isLoggedIn ? <UserMenu /> : <AuthMenu />}
      </Header>
      <main>
        <Suspense fallback={<Spiner />}>
          <Outlet />
        </Suspense>
      </main>
    </>
  );
};
export default Layout;
