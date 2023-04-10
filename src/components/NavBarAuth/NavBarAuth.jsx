import { NavLink } from '../NavBar/NavBar.styled';

export const NavBarAuth = () => {
  return (
    <div>
      <NavLink to="/register">Sign up</NavLink>
      <NavLink to="/logIn">Log in</NavLink>
    </div>
  );
};
