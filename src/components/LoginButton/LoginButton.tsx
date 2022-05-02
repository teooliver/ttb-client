import { useState } from 'react';
import styles from './LoginButton.module.css';

export const LoginButton = () => {
  const [isLogged, setIsLogged] = useState(false);

  const handleLoginClick = () => {
    // TODO: Open login / signup Modal/Popup (Side Nav to the righ?)
    setIsLogged(() => !isLogged);
  };

  if (isLogged) {
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
