import { useRouter } from 'next/router';
import { useAuth } from '../../context/AuthContext/AuthContext';

const Profile = () => {
  const auth = useAuth();
  const router = useRouter();

  const handleLogout = () => {
    auth.logout(() => router.push('/'));
  };
  return (
    <div>
      Welcome {auth.user?.name}
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Profile;
