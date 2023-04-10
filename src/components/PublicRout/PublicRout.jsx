import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectIsUserLogin } from '../../redax/selectors';

export const PublicRout = ({ component: Component, redirectTo = '/' }) => {
  const isLogin = useSelector(selectIsUserLogin);

  return isLogin ? <Navigate to={redirectTo} /> : Component;
};
