import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth, User } from '../../context/AuthContext/AuthContext';

const Login = () => {
  const [user, setUser] = useState<User>({ name: '', email: '' });
  const auth = useAuth();
  const navigate = useNavigate();

  const handleLogin = () => {
    // TODO: Add Validation
    if (user.name !== '' && user.email !== '') {
      auth.login(user);
      navigate('/');
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
