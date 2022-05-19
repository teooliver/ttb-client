import { useNavigate } from 'react-router-dom';
import { value useAuth } from '../../context/AuthContext/AuthContext';

const Profile = () => {
  const auth = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    auth.logout(() => navigate('/'));
  };
  return (
    <div>
      Welcome {auth.user?.name}
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Profile;
