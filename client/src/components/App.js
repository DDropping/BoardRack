import React, { useEffect } from 'react';

import Navbar from './navbar/Navbar';
import store from '../store';
import setAuthToken from '../util/setAuthToken';
import RegisterModal from './navbar/register/RegisterModal';
import LoginModal from './navbar/login/LoginModal';
import LogoutModal from './navbar/logout/logoutModal';
import ResultModal from './util/ResultModal';
import Footer from './footer';
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
      <div
        style={{ minHeight: 'calc(100vh - 100px)', backgroundColor: '#f3f7f9' }}
      >
        <div
          style={{
            backgroundColor: 'white',
            boxShadow: '0 0 30px #d1d1d1'
          }}
        >
          <Navbar />
        </div>
        <div style={{ padding: '20px 0px 30px 0px' }}>
          <RegisterModal />
          <LoginModal />
          <LogoutModal />
          <ResultModal />
          {children}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default App;
