import { Route, Routes } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { GlobalStyle } from '../GlobalStales';

import { NavBar } from './NavBar/NavBar';
import { HomePage } from '../pages/homePage/HomePage';
import { MyContacts } from '../pages/myContacts/MyContacts';
import { Register } from '../pages/register/register';
import { LogIn } from '../pages/logIn/LogIn';
import { PrivateRout } from '../components/PrivateRout/PrivateRout';
import { PublicRout } from '../components/PublicRout/PublicRout';
import { fetchGetCurrent } from '../redax/operations';

export const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchGetCurrent());
  }, [dispatch]);
  return (
    <>
      <Routes>
        <Route path="/" element={<NavBar />}>
          <Route index element={<HomePage />} />

          <Route
            path="/myContacts"
            element={
              <PrivateRout redirectTo="/logIn" component={<MyContacts />} />
            }
          />

          <Route
            path="/register"
            element={
              <PublicRout redirectTo="/myContacts" component={<Register />} />
            }
          />
          <Route
            path="/logIn"
            element={
              <PublicRout redirectTo="/myContacts" component={<LogIn />} />
            }
          />
        </Route>
      </Routes>
      <GlobalStyle />
    </>
  );
};
