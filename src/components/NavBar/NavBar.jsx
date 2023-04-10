import { Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { selectIsUserLogin } from '../../redax/selectors';

import { NavBarAuth } from '../NavBarAuth/NavBarAuth';
import { NavBarUser } from '../NavBarUser/NavBarUser';

import { NavLink, Nav } from './NavBar.styled';
export const NavBar = () => {
  const isLogIn = useSelector(selectIsUserLogin);
  return (
    <>
      <Nav>
        {' '}
        <div>
          <NavLink style={{ color: 'black' }} to="/">
            PhoneBook
          </NavLink>
          {isLogIn && <NavLink to="/myContacts">My contacts</NavLink>}
        </div>
        {isLogIn ? <NavBarUser /> : <NavBarAuth />}
      </Nav>

      <Outlet />
    </>
  );
};
