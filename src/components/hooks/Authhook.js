import { useSelector } from 'react-redux';
import authSelectors from 'redux/Auth/authSelectors';

export const useAuth = () => {
  const isLoggedIn = useSelector(authSelectors.getLoggedIn);
  const isFetchingCurrentUser = useSelector(
    authSelectors.selectIsFetchingCurrentUser
  );
  const user = useSelector(authSelectors.getUserName);

  return {
    isLoggedIn,
    isFetchingCurrentUser,
    user,
  };
};
