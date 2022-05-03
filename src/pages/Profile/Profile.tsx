import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext/AuthContext';

const Profile = () => {
  const auth = useAuth();
  const navigate = useNavigate();

  console.log('USER', auth.user);

  const handleLogout = () => {
    auth.logout();
    navigate('/');
  };
  return (
    <div>
      Welcome {auth.user?.name}
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Profile;
