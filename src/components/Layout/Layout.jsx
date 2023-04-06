import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import Spiner from 'components/Spiner/Spiner';
import AuthMenu from 'components/AuthMenu/AuthMenu';
import UserMenu from 'components/UserMenu/UserMenu';
import Navigation from 'components/Navigation/Navigation';
import { Header } from './Layuot.styled';
import { useSelector } from 'react-redux';
import authSelectors from 'redux/Auth/authSelectors';

const Layout = () => {
  const isLoggin = useSelector(authSelectors.getIsLoggin);
  return (
    <>
      <Header>
        <Navigation />
        {isLoggin ? <UserMenu /> : <AuthMenu />}
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
