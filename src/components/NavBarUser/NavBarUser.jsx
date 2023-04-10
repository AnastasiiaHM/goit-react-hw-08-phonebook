import { useSelector, useDispatch } from 'react-redux';

import { selectUser } from '../../redax/selectors';

import { fetchLogOut } from '../../redax/operations';

import {
  UserMenu,
  UserEmail,
  LogoutBtn,
} from '../NavBarUser/NavBarUser.styled';

export const NavBarUser = () => {
  const { email } = useSelector(selectUser);
  const dispatch = useDispatch();

  const onLogOut = () => {
    dispatch(fetchLogOut());
  };
  return (
    <UserMenu>
      <UserEmail>{email}</UserEmail>

      <LogoutBtn onClick={onLogOut}>Log out</LogoutBtn>
    </UserMenu>
  );
};
