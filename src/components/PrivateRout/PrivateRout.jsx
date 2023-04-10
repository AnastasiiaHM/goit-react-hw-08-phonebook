import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectIsUserLogin, selectIsRefreshing } from '../../redax/selectors';

export const PrivateRout = ({ component: Component, redirectTo = '/' }) => {
  const isLogin = useSelector(selectIsUserLogin);
  const isRefreshing = useSelector(selectIsRefreshing);
  return !isLogin && !isRefreshing ? <Navigate to={redirectTo} /> : Component;
};
