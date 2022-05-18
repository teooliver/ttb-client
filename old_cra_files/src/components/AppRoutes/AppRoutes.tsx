import { Route, Routes } from 'react-router-dom';
import { Page404 } from '../../pages/404/Page404';
import Clients from '../../pages/Clients/Clients';
import Login from '../../pages/Login/Login';
import Profile from '../../pages/Profile/Profile';
import Projects from '../../pages/Projects/Projects';
import Reports from '../../pages/Reports/Reports';
import Tags from '../../pages/Tags/Tags';
import TimeTracker from '../../pages/TimeTracker/TimeTracker';
import { RequireAuth } from '../RequireAuth/RequireAuth';
import styles from './AppRoutes.module.css';

export const AppRoutes = () => {
  return (
    <section aria-label='application area' className={styles.AppRoutes}>
      <Routes>
        <Route path={'/'} element={<TimeTracker />} />
        <Route path={'/projects'} element={<Projects />} />
        <Route path={'/reports'} element={<Reports />} />
        <Route path='/clients' element={<Clients />} />
        <Route path='/tags' element={<Tags />} />
        <Route path='/tags' element={<Tags />} />
        <Route
          path='/profile'
          element={
            <RequireAuth>
              <Profile />
            </RequireAuth>
          }
        />
        <Route path='/login' element={<Login />} />
        <Route path='*' element={<Page404 />} />
      </Routes>
    </section>
  );
};
