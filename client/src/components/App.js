import React, { useEffect } from 'react';

import Navbar from './navbar/Navbar';
import store from '../store';
import setAuthToken from '../util/setAuthToken';
import RegisterModal from './navbar/register/RegisterModal';
import LoginModal from './navbar/login/LoginModal';
import LogoutModal from './navbar/logout/logoutModal';
import ResultModal from './util/ResultModal';
import Footer from './footer/footer';
import { loadUser } from '../actions/auth';

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

const App = ({ children }) => {
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);

  return (
    <div>
      <Navbar />
      <RegisterModal />
      <LoginModal />
      <LogoutModal />
      <ResultModal />
      {children}
      <Footer />
    </div>
  );
};

export default App;
