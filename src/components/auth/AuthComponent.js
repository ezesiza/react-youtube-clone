import React, { useContext } from 'react';

import { AuthContext } from '../../context/Authorization';
import './AuthComponent.css';

const AuthComponent = props => {
  const authContext = useContext(AuthContext);

  const loginHandler = () => {
    authContext.login();
  };

  return (
    <div className="auth">
      <div>
        <h2>Click the Red Button to gain Access</h2>
        <button onClick={loginHandler}>Log In</button>
      </div>
    </div>
  );
};

export default AuthComponent;