import { useQueryClient } from 'react-query';
// import { NavLink as Link, useNavigate } from 'react-router-dom';
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

const Navbar = () => {
  // const navigate = useNavigate();
  const router = useRouter();
  const queryClient = useQueryClient();

  const handleRemoveAllData = () => {
    // removeAllData(queryClient);
    try {
      fetch(`${API_URL}/seed/remove`)
        .then((res) => queryClient.invalidateQueries('projects'))
        .then((res) => queryClient.invalidateQueries('tasks'));
    } catch (error) {
      console.log(error);
    }
  };

  const handleSeedData = async () => {
    // seedData(queryClient);
    try {
      fetch(`${API_URL}/seed/clients`)
        .then((res) => fetch(`${API_URL}/seed/projects`))
        .then((res) => queryClient.invalidateQueries('projects'))
        .then((res) => fetch(`${API_URL}/seed/tasks`))
        .then((res) => queryClient.invalidateQueries('tasks'))
        .then((res) => queryClient.invalidateQueries('clients'));
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
        <li>
          <Link
            className={router.pathname === '/' ? styles['active-link'] : ''}
            href='/'
          >
            <>
              <span>
                <ClockHistory />
              </span>
              Timer
            </>
          </Link>
        </li>
        <li>
          <Link
            className={
              router.pathname === '/reports' ? styles['active-link'] : ''
            }
            href='/reports'
          >
            <>
              <span>
                <FileText />
              </span>
              Reports
            </>
          </Link>
        </li>
        <li>
          <Link
            className={
              router.pathname === '/projects' ? styles['active-link'] : ''
            }
            href='/projects'
          >
            <>
              <span>
                <Folder />
              </span>
              Projects
            </>
          </Link>
        </li>
        <li>
          <Link
            className={
              router.pathname === '/clients' ? styles['active-link'] : ''
            }
            href='/clients'
          >
            <>
              <span>
                <PersonSquare />
              </span>
              Clients
            </>
          </Link>
        </li>
        <li>
          <Link
            className={router.pathname === '/tags' ? styles['active-link'] : ''}
            href='/tags'
          >
            <>
              <span>
                <Tags />
              </span>
              Tags
            </>
          </Link>
        </li>
        <li>
          <Link
            className={
              router.pathname === '/profile' ? styles['active-link'] : ''
            }
            href='/profile'
          >
            <>
              <span>
                <Tags />
              </span>
              Profile
            </>
          </Link>
        </li>
      </ul>
      <div className={styles['seed-buttons']}>
        {/* <LoginButton /> */}
        <button className={styles['btn-navbar--add']} onClick={handleSeedData}>
          Seed Data
        </button>
        <button
          className={styles['btn-navbar--remove']}
          onClick={handleRemoveAllData}
        >
          Remove All Data
        </button>
      </div>
    </div>
  );
};

export default Navbar;
