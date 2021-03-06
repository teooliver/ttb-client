import { useQueryClient } from 'react-query';
import Link from 'next/link';
import { Tags } from '../icons/Tags';
import { API_URL } from '../../utils/api-client';
import { ClockHistory } from '../icons/ClockHistory';
import { FileText } from '../icons/FileText';
import { Folder } from '../icons/Folder';
import { PersonSquare } from '../icons/PersonSquare';
import styles from './Navbar.module.css';
import { LoginButton } from '../LoginButton/LoginButton';
import { useRouter } from 'next/router';
import { useDangerouslyRemoveAllData } from '../../hooks/useDangerouslyRemoveAllData';

export const Navbar = () => {
  const router = useRouter();
  const queryClient = useQueryClient();

  const deleteAllData = useDangerouslyRemoveAllData();

  const handleSeedData = async () => {
    try {
      await fetch(`${API_URL}/seed/all`).then(() =>
        queryClient.invalidateQueries(['infinite-tasks'])
      );
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className={styles['navbar']} data-testid='navbar'>
      <div className={styles['logo']}>
        <span className='bold'>Time</span>
        <span>Track</span>
      </div>

      <ul>
        <li
          className={
            router.pathname === '/timetracker' ? styles['active-link'] : ''
          }
        >
          <Link href='/timetracker'>
            <a>
              <span>
                <ClockHistory />
              </span>
              Timer
            </a>
          </Link>
        </li>
        <li
          className={
            router.pathname === '/reports' ? styles['active-link'] : ''
          }
        >
          <Link href='/reports'>
            <a>
              <span>
                <FileText />
              </span>
              Reports
            </a>
          </Link>
        </li>
        <li
          className={
            router.pathname === '/projects' ? styles['active-link'] : ''
          }
        >
          <Link href='/projects'>
            <a>
              <span>
                <Folder />
              </span>
              Projects
            </a>
          </Link>
        </li>
        <li
          className={
            router.pathname === '/clients' ? styles['active-link'] : ''
          }
        >
          <Link href='/clients'>
            <a>
              <span>
                <PersonSquare />
              </span>
              Clients
            </a>
          </Link>
        </li>
        <li
          className={router.pathname === '/tags' ? styles['active-link'] : ''}
        >
          <Link href='/tags'>
            <a>
              <span>
                <Tags />
              </span>
              Tags
            </a>
          </Link>
        </li>
        <li
          className={
            router.pathname === '/profile' ? styles['active-link'] : ''
          }
        >
          <Link href='/profile'>
            <a>
              <span>
                <Tags />
              </span>
              Profile
            </a>
          </Link>
        </li>
      </ul>
      <div className={styles['seed-buttons']}>
        <LoginButton />
        <button className={styles['btn-navbar--add']} onClick={handleSeedData}>
          Seed Data
        </button>
        <button
          className={styles['btn-navbar--remove']}
          onClick={() => deleteAllData.mutate()}
        >
          Remove All Data
        </button>
      </div>
    </div>
  );
};
