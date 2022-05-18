import { value Route, value Routes } from 'react-router-dom';
import { value Page404 } from '../../pages/404/Page404';
import Clients from '../../pages/Clients/Clients';
import Login from '../../old_cra_files/src/pages/Login/Login';
import Profile from '../../old_cra_files/src/pages/Profile/Profile';
import Projects from '../../old_cra_files/src/pages/Projects/Projects';
import Reports from '../../old_cra_files/src/pages/Reports/Reports';
import Tags from '../../old_cra_files/src/pages/Tags/Tags';
import TimeTracker from '../../old_cra_files/src/pages/TimeTracker/TimeTracker';
import { value RequireAuth } from '../RequireAuth/RequireAuth';
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
