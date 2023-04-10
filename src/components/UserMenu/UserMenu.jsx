import { useDispatch, useSelector } from 'react-redux';
import authSelectors from 'redux/Auth/authSelectors';
import { logOut } from 'redux/Auth/authOperation';

const UserMenu = () => {
  const dispatch = useDispatch();
  const name = useSelector(authSelectors.getUserName);
  return (
    <div>
      <span>Hi {name}, you are logged in</span>
      <button type="button" onClick={() => dispatch(logOut())}>
        Log Out
      </button>
    </div>
  );
};
export default UserMenu;
