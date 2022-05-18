import { AppRoutes } from './components/AppRoutes/AppRoutes';
import Navbar from './components/Navbar/Navbar';
import { AuthProvider } from './context/AuthContext/AuthContext';
import './styles/reset.css';
import './styles/variables.css';
import './styles/global.css';

function App() {
  // TODO: Will need to reconfigure Routes
  // use Nested Routes and the <Outlet /> component from react router dom 6
  // https://reactrouterdotcom.fly.dev/docs/en/v6/getting-started/overview#nested-routes
  return (
    <AuthProvider>
      <div className='App'>
        <Navbar />
        <AppRoutes />
      </div>
    </AuthProvider>
  );
}

export default App;
