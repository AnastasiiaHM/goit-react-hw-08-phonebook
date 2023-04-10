import styled from 'styled-components';
import { NavLink as BaseNavLink } from 'react-router-dom';

export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  background-color: lavender;
  padding-top: 60px;
  padding-bottom: 60px;
  padding-right: 100px;
  padding-left: 100px;
`;

export const NavLink = styled(BaseNavLink)`
  font-size: 30px;
  color: #483d8b;
  font-weight: 800;
  margin-right: 50px;
  text-decoration: none;

  &.active {
    border: solid 1px #483d8b;
    border-radius: 6px;
    padding: 7px 18px;
  }
`;
