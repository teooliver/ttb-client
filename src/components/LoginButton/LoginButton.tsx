import { useRouter } from 'next/router';
import { useAuth } from '../../context/AuthContext/AuthContext';
import styles from './LoginButton.module.css';

export const LoginButton = () => {
  const auth = useAuth();
  const router = useRouter();

  const handleLoginClick = () => {
    // TODO: Open login / signup Modal/Popup (Side Nav to the righ?)
    if (auth.user) {
      auth.logout();
      return;
    }
    router.push('/login');
  };

  if (auth.user) {
    return (
      <button
        className={styles['btn-navbar--login']}
        onClick={handleLoginClick}
      >
        Logout
      </button>
    );
  }

  return (
    <button className={styles['btn-navbar--login']} onClick={handleLoginClick}>
      Login / Signup
    </button>
  );
};
