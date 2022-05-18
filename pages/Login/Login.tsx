// import { value useState } from 'react';
// import { value useLocation, value useNavigate } from 'react-router-dom';
// import {
//   value useAuth,
//   value User,
// } from '../../../context/AuthContext/AuthContext';

import { useState } from 'react';
import { useAuth, User } from '../../context/AuthContext/AuthContext';

const Login = () => {
  const [user, setUser] = useState<User>({ name: '', email: '' });
  const auth = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  // location.state is unknow?
  // @ts-ignore
  let from = location.state?.from?.pathname || '/';

  const handleLogin = () => {
    // TODO: Add Validation
    if (user.name !== '' && user.email !== '') {
      auth.login(user, () => navigate(from, { replace: true }));
    }
  };

  return (
    <div>
      <label>
        Username:
        <input
          type='text'
          onChange={(e) => setUser({ ...user, name: e.target.value })}
        />
      </label>
      <label>
        Email:
        <input
          type='text'
          onChange={(e) => setUser({ ...user, email: e.target.value })}
        />
      </label>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Login;
